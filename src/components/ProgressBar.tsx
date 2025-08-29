import React from "react";

interface ProgressBarProps {
  percent: number;
  size?: "small" | "normal" | "large";
  colorFill?: string;
  className?: string;
}

export default function ProgressBar({
  percent,
  size = "normal",
  colorFill = "black",
  className = "",
}: ProgressBarProps) {
  const heightClass =
    size === "small" ? "h-3" : size === "large" ? "h-6" : "h-4";

  return (
    <div>
      <h5 className="pb-[0.6rem]">Progress:</h5>
      <div
        className={`w-full border border-black overflow-hidden ${heightClass} ${className}`}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            backgroundColor: colorFill,
          }}
        />
      </div>
    </div>
  );
}
