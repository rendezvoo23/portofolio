"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { Locale } from "@/data/site";

const languageStorageKey = "portfolio-language";

export function getLocalizedPath(pathname: string, locale: Locale) {
  const pathWithoutLocale = pathname.replace(/^\/en(?=\/|$)/, "") || "/";

  if (locale === "en") {
    return pathWithoutLocale === "/" ? "/en" : `/en${pathWithoutLocale}`;
  }

  return pathWithoutLocale;
}

export function saveLocale(locale: Locale) {
  try {
    window.localStorage.setItem(languageStorageKey, locale);
  } catch {
    // Navigation still works when storage is unavailable.
  }
}

export function LanguageDetector() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isEnglishPath = pathname === "/en" || pathname.startsWith("/en/");
    document.documentElement.lang = isEnglishPath ? "en" : "ru";

    let storedLocale: Locale | null = null;

    try {
      const storedValue = window.localStorage.getItem(languageStorageKey);
      if (storedValue === "ru" || storedValue === "en") {
        storedLocale = storedValue;
      }
    } catch {
      // Fall back to the browser language.
    }

    if (!storedLocale) {
      storedLocale = isEnglishPath
        ? "en"
        : navigator.language.toLowerCase().startsWith("ru")
          ? "ru"
          : "en";
      saveLocale(storedLocale);
    }

    if (storedLocale === "en" && !isEnglishPath) {
      router.replace(getLocalizedPath(pathname, "en"));
    }

    if (storedLocale === "ru" && isEnglishPath) {
      router.replace(getLocalizedPath(pathname, "ru"));
    }
  }, [pathname, router]);

  return null;
}
