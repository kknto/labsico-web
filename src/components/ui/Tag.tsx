import type { ComponentPropsWithoutRef } from "react";

type TagProps = ComponentPropsWithoutRef<"span">;

export function Tag({ className = "", ...props }: TagProps) {
  return <span className={`tag ${className}`.trim()} {...props} />;
}
