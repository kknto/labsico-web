import type { ComponentPropsWithoutRef } from "react";

type PageSectionProps = ComponentPropsWithoutRef<"section"> & {
  muted?: boolean;
};

export function PageSection({ className = "", muted = false, ...props }: PageSectionProps) {
  return <section className={`section ${muted ? "section--muted" : ""} ${className}`.trim()} {...props} />;
}
