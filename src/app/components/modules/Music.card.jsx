'use client';

import { Play, Pause, Music2, Clock, Heart, Share2, Download } from 'lucide-react';
import { useState } from 'react';

export default function MusicCard({ music }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Add your audio play/pause logic here
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div 
      className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg dark:bg-slate-950 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Album Art Container */}
      <div className="relative overflow-hidden bg-gray-100 dark:bg-slate-900 aspect-square">
        <img
          src={music.coverArt}
          alt={music.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Play/Pause Button Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 ${
          isHovered || isPlaying ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={togglePlay}
            className="flex items-center justify-center transition-all duration-300 transform bg-white rounded-full w-14 h-14 dark:bg-black hover:scale-110 hover:shadow-xl"
          >
            {isPlaying ? (
              <Pause className="text-black fill-current w-7 h-7 dark:text-white" />
            ) : (
              <Play className="w-7 h-7 text-black dark:text-white fill-current ml-0.5" />
            )}
          </button>
        </div>

        {/* Now Playing Indicator */}
        {isPlaying && (
          <div className="absolute flex items-center gap-1 px-3 py-1 text-xs font-semibold text-white bg-black rounded top-3 left-3 dark:bg-white dark:text-black">
            <Music2 className="w-3 h-3 animate-pulse" />
            Playing
          </div>
        )}

        {/* Duration Badge */}
        {music.duration && (
          <div className="absolute flex items-center gap-1 px-2 py-1 text-xs font-semibold text-white bg-black rounded bottom-3 right-3 dark:bg-white dark:text-black">
            <Clock className="w-3 h-3" />
            {music.duration}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Artist */}
        <h2 className="mb-1 text-xl font-bold text-black transition-colors duration-200 dark:text-white line-clamp-1 hover:text-gray-700 dark:hover:text-slate-300">
          {music.title}
        </h2>
        
        <p className="mb-3 text-sm font-medium text-gray-600 dark:text-slate-400 line-clamp-1">
          {music.artist}
        </p>

        {/* Album/Genre */}
        {(music.album || music.genre) && (
          <div className="flex items-center gap-2 mb-4 text-xs text-gray-500 dark:text-slate-400">
            {music.album && <span>{music.album}</span>}
            {music.album && music.genre && <span>•</span>}
            {music.genre && <span>{music.genre}</span>}
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center gap-4 pb-4 mb-4 text-xs text-gray-500 border-b border-gray-200 dark:text-slate-400 dark:border-slate-800">
          {music.plays && (
            <div className="flex items-center gap-1">
              <Play className="w-3 h-3" />
              <span>{music.plays.toLocaleString()} plays</span>
            </div>
          )}
          {music.likes && (
            <div className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              <span>{music.likes.toLocaleString()}</span>
            </div>
          )}
          {music.releaseDate && (
            <span>{music.releaseDate}</span>
          )}
        </div>

        {/* Tags */}
        {music.tags && music.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {music.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
            {music.tags.length > 3 && (
              <span className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-slate-900 dark:text-slate-300">
                +{music.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={togglePlay}
            className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-black rounded-lg dark:bg-white dark:text-black hover:opacity-80 hover:shadow-md"
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                Play
              </>
            )}
          </button>

          <button
            onClick={toggleLike}
            className={`flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold transition-all duration-200 rounded-lg ${
              isLiked 
                ? 'bg-black text-white dark:bg-white dark:text-black' 
                : 'bg-gray-100 text-black dark:bg-slate-900 dark:text-white'
            } hover:opacity-80`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>

          {music.downloadUrl && (
            <a
              href={music.downloadUrl}
              download
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-gray-100 rounded-lg dark:bg-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800"
            >
              <Download className="w-4 h-4" />
            </a>
          )}

          <button
            className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-black transition-all duration-200 bg-gray-100 rounded-lg dark:bg-slate-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-800"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: music.title, text: `${music.title} by ${music.artist}`, url: music.url });
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