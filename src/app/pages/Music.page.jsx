"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../scripts/Theme.context";
import Image from "next/image";

export default function MusicPlayer() {
  const router = useRouter();
  const { theme } = useTheme();
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  // Replace with your music URL
  const musicUrl = "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3";
  const musicName = "Creative Minds";
  const artistName = "Bensound";

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipForward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.min(audio.currentTime + 10, duration);
  };

  const handleSkipBackward = () => {
    const audio = audioRef.current;
    audio.currentTime = Math.max(audio.currentTime - 10, 0);
  };

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="relative overflow-hidden bg-black min-h-56">
      <audio ref={audioRef} src={musicUrl} />

      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dvytvjplt/image/upload/v1771170898/Gemini_Generated_Image_tugn9ttugn9ttugn_nhquza.png"
          alt="Album Art"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-between h-full px-4 py-6 sm:px-6 md:px-8 lg:px-12">
        
        {/* Music Info - Top Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pt-4 text-center sm:pt-8 md:pt-12"
        >
          <h1 className="mb-2 text-3xl font-bold text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
            {musicName}
          </h1>
          <p className="text-base text-white/80 drop-shadow-md sm:text-lg md:text-xl">
            {artistName}
          </p>
        </motion.div>

        {/* Controls Section - Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl pb-4 mx-auto sm:pb-6 md:pb-8"
        >
          
          {/* Progress Bar */}
          <div className="mb-4 sm:mb-6">
            <div className="relative w-full h-2 rounded-full bg-white/20 backdrop-blur-sm">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full shadow-lg"
                style={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.1 }}
              />
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/80 sm:text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:gap-4 md:gap-6 sm:mb-6">
            
            {/* Back Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => router.back()}
              className="p-2.5 sm:p-3 md:p-4 text-white transition-colors bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/20"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Skip Backward */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSkipBackward}
              className="p-2.5 sm:p-3 md:p-4 text-white transition-colors bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/20"
            >
              <SkipBack className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Play/Pause */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlayPause}
              className="p-4 text-black transition-colors bg-white rounded-full shadow-2xl sm:p-5 md:p-6 hover:bg-gray-100"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" />
              ) : (
                <Play className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="currentColor" />
              )}
            </motion.button>

            {/* Skip Forward */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSkipForward}
              className="p-2.5 sm:p-3 md:p-4 text-white transition-colors bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/20"
            >
              <SkipForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Volume Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              className="p-2.5 sm:p-3 md:p-4 text-white transition-colors bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 border border-white/20"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              ) : (
                <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              )}
            </motion.button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center justify-center max-w-xs gap-3 mx-auto sm:max-w-sm md:max-w-md">
            <Volume2 className="w-4 h-4 text-white/60 sm:w-5 sm:h-5" />
            <div className="relative flex-1 h-2 rounded-full bg-white/20 backdrop-blur-sm">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white rounded-full shadow-lg"
                style={{ width: `${volume * 100}%` }}
                transition={{ duration: 0.1 }}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="w-8 text-xs text-white/60 sm:text-sm">{Math.round(volume * 100)}%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}