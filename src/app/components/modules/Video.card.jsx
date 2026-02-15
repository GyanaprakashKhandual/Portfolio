/* eslint-disable @next/next/no-img-element */
"use client";

import { Play, Calendar, Eye, ThumbsUp, Share2 } from "lucide-react";
import { useState } from "react";

export default function VideoCard({ video }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail Container */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-slate-900 aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 transform bg-white rounded-full dark:bg-black hover:scale-110">
            <Play className="w-8 h-8 text-black fill-current dark:text-white" />
          </div>
        </div>

        {/* Duration Badge */}
        {video.duration && (
          <div className="absolute px-2 py-1 text-xs font-semibold text-white bg-black rounded bottom-3 right-3 dark:bg-white dark:text-black">
            {video.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold text-black transition-colors duration-200 dark:text-white line-clamp-2 hover:text-gray-700 dark:hover:text-slate-300">
          {video.title}
        </h2>

        {/* Category Badge */}
        {video.category && (
          <p className="mb-3 text-xs font-medium text-gray-500 dark:text-slate-400">
            {video.category}
          </p>
        )}

        {/* Description */}
        <p className="mb-4 text-sm text-gray-700 dark:text-slate-300 line-clamp-2">
          {video.description}
        </p>

        {/* Metadata */}
        <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 dark:text-slate-400">
          {video.publishedAt && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{video.publishedAt}</span>
            </div>
          )}
          {video.views && (
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{video.views.toLocaleString()} views</span>
            </div>
          )}
          {video.likes && (
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" />
              <span>{video.likes.toLocaleString()}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {video.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
            {video.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300">
                +{video.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80 hover:shadow-md"
          >
            <Play className="w-4 h-4" />
            Watch
          </a>
          <button
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-gray-100 rounded-lg dark:bg-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: video.title, url: video.url });
              }
            }}
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
