import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;   // Specify as number
  height?: number;  // Specify as number
  x?: number;       // Specify as number
  y?: number;       // Specify as number
  cx?: number;      // Specify as number
  cy?: number;      // Specify as number
  cr?: number;      // Specify as number
  className?: string; // Specify as optional string
  [key: string]: any; // Allows other props, but be cautious with type safety
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}

export default DotPattern;
