"use client";

import Image from "next/image";
import { useState } from "react";

interface DoctorImageProps {
  className?: string;
  size?: number;
}

export default function DoctorImage({ className = "", size = 128 }: DoctorImageProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 text-white font-bold select-none ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.4 }}
      >
        SJ
      </div>
    );
  }

  return (
    <Image
      src="/images/Dr Jadhav.png"
      alt="Dr. Satish Jadhav — Proctologist & Laser Surgeon, Sunrise Piles Hospital Pune"
      width={size}
      height={size}
      className={`object-cover object-top ${className}`}
      onError={() => setImgError(true)}
      priority
    />
  );
}
