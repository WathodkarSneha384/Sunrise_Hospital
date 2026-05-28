import Image from "next/image";
import { LOGO_SRC } from "@/lib/site";

interface SiteLogoProps {
  className?: string;
  priority?: boolean;
}

export default function SiteLogo({
  className = "h-16 sm:h-[68px] md:h-[76px] w-auto object-contain",
  priority = false,
}: SiteLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="Sunrise Piles Hospital"
      width={280}
      height={96}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
