"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export default function EditorialImage({ src, alt, className = "", loading = "lazy" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-gradient-to-br from-teal-50 via-slate-100 to-sky-100 ${className}`}>
        <div className="flex flex-col items-center gap-3 px-6 text-center text-teal-900">
          <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className="h-14 w-14 opacity-65">
            <rect x="8" y="8" width="48" height="48" rx="14" stroke="currentColor" strokeWidth="2" />
            <path d="M32 19v26M19 32h26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <span className="max-w-xs text-sm font-medium">CareBridge Health · Patient guidance</span>
        </div>
      </div>
    );
  }
  if (src.startsWith("/")) {
    return <Image src={src} alt={alt} width={1200} height={675} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1100px" quality={75} loading={loading} onError={() => setFailed(true)} className={className} />;
  }
  return <img src={src} alt={alt} loading={loading} decoding="async" onError={() => setFailed(true)} className={className} />;
}
