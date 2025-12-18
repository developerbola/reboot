import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Course() {
  const [src, setSrc] = useState("/video1.mp4");
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerWrapperRef = useRef<HTMLDivElement>(null);

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

  const handChangeVideo = (id: number) => {
    setSrc(`/video${id}.mp4`);
    setPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const timeUpdate = () => setCurrentTime(video.currentTime);
    const durationChange = () => setDuration(video.duration);

    video.addEventListener("timeupdate", timeUpdate);
    video.addEventListener("loadedmetadata", durationChange);

    return () => {
      video.removeEventListener("timeupdate", timeUpdate);
      video.removeEventListener("loadedmetadata", durationChange);
    };
  }, [src]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-5">
      <Link to="/">
        <Button
          size={"icon"}
          variant={"outline"}
          className="absolute top-4 left-4 flex items-center gap-2 z-50"
        >
          <ArrowLeft />
        </Button>
      </Link>

      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Section */}
        <div className="lg:col-span-2 space-y-4">
          <div
            ref={playerWrapperRef}
            className={cn(
              "overflow-hidden rounded-2xl relative",
              isFullscreen && "flex items-center justify-center"
            )}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
            <video
              ref={videoRef}
              src={src}
              className="w-full aspect-video"
              autoPlay={playing}
              muted={muted}
              onClick={togglePlay}
              onDoubleClick={handleFullscreen}
            />

            {/* Custom Controls */}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 flex items-center gap-2 p-3 bg-linear-to-t from-black/40 to-transparent transition-all duration-200",
                !showControls ? "opacity-0 invisible" : "opacity-100 visible"
              )}
            >
              <Button size="icon" variant="outline" onClick={togglePlay}>
                {playing ? <Pause /> : <Play />}
              </Button>

              {/* Volume */}
              <div
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}
                className={"flex items-center justify-center rounded-md h-9 p-2 px-2.5  border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"}
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

              <span className="text-white text-sm">
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

          {/* Course Info */}
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">New Tanstack AI</h1>
            <p className="text-muted-foreground">
              Creating apps that utilize AI is almost a necessity at this point
              and the brand new Tanstack AI library makes this process so much
              smoother...
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <div className="rounded-2xl p-4 pt-7 pb-3">
            <div className="space-y-3">
              <h2 className="font-semibold text-lg">Course Progress</h2>
              <div className="w-full h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full w-2/5 bg-primary" />
              </div>
              <p className="text-sm text-muted-foreground">40% completed</p>
            </div>
          </div>

          <div>
            <div className="p-4 space-y-3">
              <h2 className="font-semibold text-lg">Lessons</h2>
              <ul className="space-y-2 text-sm">
                {["Tanstack AI", "This CSS Update Revolutionizes"].map(
                  (_, i) => (
                    <li
                      key={i}
                      className="p-2 rounded-lg hover:bg-muted cursor-pointer"
                      onClick={() => handChangeVideo(i + 1)}
                    >
                      0{i + 1}. {_}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
