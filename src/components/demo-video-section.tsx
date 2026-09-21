// "use client";

// import { PlayCircle } from "lucide-react";

// export function DemoVideoSection() {
//   return (
//     <section
//       id="demo-video"
//       className="
//         relative
//         scroll-mt-[80px]
//         min-h-[calc(100vh-120px)]
//         flex items-center
//         bg-background/40
//         backdrop-blur-xl
//       "
//     >
//       {/* Subtle gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />

//       <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 sm:mb-8">
//           <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-3">
//             <PlayCircle className="h-4 w-4 mr-1.5" />
//             Product Demo
//           </div>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
//             Watch{" "}
//             <span className="bg-gradient-hero bg-clip-text text-transparent">
//               OPTIMA
//             </span>{" "}
//             in Action
//           </h2>

//           <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
//             Real-time tracking, AI insights, and intelligent logistics automation
//             — all in one platform.
//           </p>
//         </div>

//         {/* Video */}
//         <div className="flex justify-center">
//           <div
//             className="
//               w-full
//               max-w-5xl
//               rounded-2xl
//               overflow-hidden
//               border border-border/40
//               bg-background/60
//               backdrop-blur-md
//               shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)]
//             "
//           >
//             <video
//               src="/videos/hero-bg.mp4"
//               controls
//               className="w-full aspect-video object-contain"
//               poster="/images/video-poster.webp"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useRef, useState } from "react";
import { Play, ChevronDown } from "lucide-react";

type Lang = "en" | "te" | "hi";

const VIDEO_MAP: Record<Lang, string> = {
  en: "/videos/hero-bg.mp4",
  te: "/videos/demo-te.mp4",
  hi: "/videos/demo-hi.mp4",
};

const LANG_LABEL: Record<Lang, string> = {
  en: "English",
  te: "తెలుగు",
  hi: "हिंदी",
};

export function DemoVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;
    await videoRef.current.play();
    setPlaying(true);
  };

  const changeLanguage = async (newLang: Lang) => {
    if (!videoRef.current || newLang === lang) return;

    const currentTime = videoRef.current.currentTime;
    const wasPlaying = !videoRef.current.paused;

    videoRef.current.pause();
    videoRef.current.src = VIDEO_MAP[newLang];
    videoRef.current.load();
    videoRef.current.currentTime = currentTime;

    if (wasPlaying) {
      await videoRef.current.play();
    }

    setLang(newLang);
    setOpen(false);
  };

  return (
    <section
      id="demo-video"
      className="
        relative
        scroll-mt-[80px]
        min-h-[calc(100vh-140px)]
        flex items-center
        bg-background/40
        backdrop-blur-xl
      "
    >
      {/* subtle background wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-cyan-500/5 pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-2">
            Product Demo
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Watch{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              OPTIMA
            </span>{" "}
            in Action
          </h2>

          <p className="mt-1.5 text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Experience OPTIMA in your preferred language.
          </p>
        </div>

        {/* Video */}
        <div className="flex justify-center">
          <div
            className="
              relative
              w-full
              max-w-4xl
              rounded-xl
              overflow-hidden
              border border-border/30
              bg-background/60
              backdrop-blur-md
              shadow-[0_12px_40px_-18px_rgba(0,0,0,0.35)]
            "
          >
            {/* Language Dropdown */}
            <div className="absolute top-3 right-3 z-20">
              <button
                onClick={() => setOpen(!open)}
                className="
                  flex items-center gap-1
                  px-3 py-1.5
                  text-xs font-medium
                  rounded-md
                  bg-background/80
                  border border-border
                  backdrop-blur
                  hover:bg-background
                "
              >
                {LANG_LABEL[lang]}
                <ChevronDown className="h-3 w-3" />
              </button>

              {open && (
                <div className="mt-1 rounded-md border border-border bg-background/95 shadow-lg overflow-hidden">
                  {(Object.keys(VIDEO_MAP) as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => changeLanguage(l)}
                      className={`
                        block w-full px-4 py-2 text-left text-xs
                        hover:bg-muted
                        ${lang === l ? "bg-muted font-medium" : ""}
                      `}
                    >
                      {LANG_LABEL[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Video */}
            <video
              ref={videoRef}
              src={VIDEO_MAP[lang]}
              className="w-full aspect-video object-contain"
              poster="/video-poster.jpg"
              playsInline
              controls={playing}
            />

            {/* Play Overlay */}
            {!playing && (
              <button
                onClick={handlePlay}
                aria-label="Play demo video"
                className="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <span className="absolute inline-flex h-14 w-14 rounded-full bg-primary/25 animate-ping" />
                <span className="relative flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <Play className="h-5 w-5 text-white ml-0.5" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
