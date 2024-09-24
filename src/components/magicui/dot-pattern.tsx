import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number; // Use number instead of any
  height?: number; // Use number instead of any
  x?: number; // Use number instead of any
  y?: number; // Use number instead of any
  cx?: number; // Use number instead of any
  cy?: number; // Use number instead of any
  cr?: number; // Use number instead of any
  className?: string;
  // [key: string]: any; // Keep this for any additional props you might pass
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
    /* eslint-disable */
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
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
