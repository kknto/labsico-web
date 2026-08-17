import type { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  padded?: boolean;
};

export function Card({ className = "", padded = true, ...props }: CardProps) {
  return <article className={`card ${padded ? "info-card" : ""} ${className}`.trim()} {...props} />;
}
