"use client";

import Script from "next/script";

export default function ClientScripts() {
  return (
    <>
      <Script
        src="https://unpkg.com/aos@2.3.4/dist/aos.js"
        strategy="afterInteractive"
        onLoad={() => {
          const w = window as unknown as Record<string, { init: (opts: Record<string, unknown>) => void }>;
          if (w.AOS) {
            w.AOS.init({ duration: 700 });
          }
        }}
      />
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3/dist/cdn.min.js" strategy="beforeInteractive" />
    </>
  );
}
