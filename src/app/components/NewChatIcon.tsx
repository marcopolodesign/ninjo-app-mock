import React from "react";
import svgPaths from "../../imports/svg-wc28ud773m";

export function NewChatIcon({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2002_468)" id="Group 1223">
          <path d={svgPaths.p18405d00} id="Vector" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          <path d={svgPaths.p3201daf1} id="Vector_2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_2002_468">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
