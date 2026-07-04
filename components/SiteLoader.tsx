"use client";

import { useEffect, useRef, useState } from "react";

const loaderSessionKey = "portfolio-loader-viewed";
type LoaderState = "checking" | "playing" | "leaving" | "hidden";

export function SiteLoader() {
  const [loaderState, setLoaderState] = useState<LoaderState>("checking");
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(loaderSessionKey)) {
        setLoaderState("hidden");
        return;
      }

      window.sessionStorage.setItem(loaderSessionKey, "true");
    } catch {
      // The loader still works when storage is unavailable.
    }

    setLoaderState("playing");

    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  useEffect(() => {
    if (loaderState === "hidden") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loaderState]);

  const finishLoading = () => {
    if (loaderState !== "playing") return;

    setLoaderState("leaving");
    hideTimer.current = setTimeout(() => setLoaderState("hidden"), 480);
  };

  if (loaderState === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`site-loader ${loaderState === "leaving" ? "is-leaving" : ""}`}
    >
      {loaderState !== "checking" && (
        <video
          autoPlay
          className="site-loader-video"
          muted
          onEnded={finishLoading}
          onError={finishLoading}
          playsInline
          preload="auto"
        >
          <source src="/media/loader.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
