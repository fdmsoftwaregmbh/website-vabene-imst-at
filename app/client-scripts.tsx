"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function ClientScripts() {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;
    if (w.AOS && typeof (w.AOS as { init: () => void }).init === "function") {
      (w.AOS as { init: () => void }).init();
    }
  }, []);

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js" strategy="beforeInteractive" />
    </>
  );
}
