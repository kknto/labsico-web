import Image from "next/image";
import type { ContentImage } from "@/content/types";

type MediaFrameProps = {
  image?: ContentImage;
  label: string;
  className?: string;
  priority?: boolean;
};

export function MediaFrame({ image, label, className = "", priority = false }: MediaFrameProps) {
  if (image) {
    return (
      <div className={`media-frame ${className}`.trim()}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 33vw" priority={priority} />
      </div>
    );
  }

  return (
    <div className={`media-frame media-frame--fallback ${className}`.trim()} aria-label={label}>
      <span>{label.slice(0, 2).toUpperCase()}</span>
    </div>
  );
}
