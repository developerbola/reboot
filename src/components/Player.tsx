import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  Loader2,
} from "lucide-react";
import { cn, formatTime } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

const Player = ({ src }: { src: string }) => {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [buffered, setBuffered] = useState<{ start: number; end: number }[]>([]);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    if (muted) {
      videoRef.current.volume = 0.8;
      setVolume(0.8);
      setMuted(false);
    } else {
      videoRef.current.volume = 0;
      setVolume(0);
      setMuted(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) videoRef.current.volume = newVolume;
    setMuted(newVolume === 0);
  };

  const handleFullscreen = () => {
    const el = playerWrapperRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Update buffered ranges
  const updateBuffered = () => {
    const video = videoRef.current;
    if (!video || !video.buffered.length) return;

    const ranges: { start: number; end: number }[] = [];
    for (let i = 0; i < video.buffered.length; i++) {
      ranges.push({
        start: video.buffered.start(i),
        end: video.buffered.end(i),
      });
    }
    setBuffered(ranges);
  };

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeUpdate = () => {
      setCurrentTime(video.currentTime);
      updateBuffered();
    };
    
    const durationChange = () => {
      setDuration(video.duration);
      updateBuffered();
    };

    const handleProgress = () => {
      updateBuffered();
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
      setIsLoading(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handlePlaying = () => {
      setIsBuffering(false);
    };

    const handleStalled = () => {
      setIsBuffering(true);
    };

    video.addEventListener("timeupdate", timeUpdate);
    video.addEventListener("loadedmetadata", durationChange);
    video.addEventListener("progress", handleProgress);
    video.addEventListener("waiting", handleWaiting);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("stalled", handleStalled);

    return () => {
      video.removeEventListener("timeupdate", timeUpdate);
      video.removeEventListener("loadedmetadata", durationChange);
      video.removeEventListener("progress", handleProgress);
      video.removeEventListener("waiting", handleWaiting);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("stalled", handleStalled);
    };
  }, [src]);

  return (
    <div
      ref={playerWrapperRef}
      className={cn(
        "overflow-hidden rounded-2xl relative bg-black",
        isFullscreen && "flex items-center justify-center"
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full aspect-video"
        autoPlay
        muted={muted}
        onClick={togglePlay}
        onDoubleClick={handleFullscreen}
        preload="auto"
        playsInline
      />

      {/* Loading Spinner */}
      {(isLoading || isBuffering) && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Loader2 className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Custom Controls */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 flex flex-col gap-2 p-3 bg-gradient-to-t from-black/60 via-black/40 to-transparent transition-all duration-200",
          !showControls ? "opacity-0 invisible" : "opacity-100 visible"
        )}
      >
        {/* Timeline/Progress Bar */}
        <div
          ref={progressBarRef}
          className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer group"
          onClick={handleProgressClick}
        >
          {/* Buffered segments */}
          {buffered.map((range, index) => (
            <div
              key={index}
              className="absolute h-full bg-white/40 rounded-full"
              style={{
                left: `${(range.start / duration) * 100}%`,
                width: `${((range.end - range.start) / duration) * 100}%`,
              }}
            />
          ))}
          
          {/* Current progress */}
          <div
            className="absolute h-full bg-white rounded-full transition-all"
            style={{
              width: `${(currentTime / duration) * 100}%`,
            }}
          >
            {/* Progress handle */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline" onClick={togglePlay}>
            {playing ? <Pause className="text-white" /> : <Play className="text-white" />}
          </Button>

          {/* Volume */}
          <div
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
            className="flex items-center justify-center rounded-md h-9 p-2 px-2.5 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
          >
            <div onClick={toggleMute} className="cursor-pointer">
              {muted || volume === 0 ? (
                <VolumeX className="text-white" size={17} />
              ) : (
                <Volume2 className="text-white" size={17} />
              )}
            </div>
            {showVolumeSlider && (
              <div className="ml-2 flex items-center gap-2">
                <input
                  value={volume}
                  onChange={handleVolumeChange}
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(to right, white ${
                      volume * 100
                    }%, rgba(255,255,255,0.2) ${volume * 100}%)`,
                  }}
                />
              </div>
            )}
          </div>

          <span className="text-white text-sm font-medium">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex-1" />

          <Button size="icon" variant="outline" onClick={handleFullscreen}>
            {isFullscreen ? (
              <Minimize className="text-white" />
            ) : (
              <Maximize className="text-white" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;