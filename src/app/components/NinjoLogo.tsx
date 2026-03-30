import React from 'react';
import svgPaths from "../../imports/svg-wc834xvja7";

function SidebarToggle() {
  return (
    <div className="h-[33.269px] relative shrink-0 w-[33.262px]" data-name="Sidebar toggle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.2621 33.2688">
        <g id="Sidebar toggle">
          <path d={svgPaths.p218c4a72} fill="black" id="Vector" />
          <path d={svgPaths.pc75dc80} fill="black" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30.939px] relative shrink-0 w-[60.496px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4959 30.9388">
        <g id="Group 1184">
          <path d={svgPaths.p163bd200} fill="black" id="Vector" />
          <path d={svgPaths.p7945a10} fill="black" id="Vector_2" />
          <path d={svgPaths.p3d234700} fill="black" id="Vector_3" />
          <path d={svgPaths.pe340880} fill="black" id="Vector_4" />
          <path d={svgPaths.p20d11400} fill="black" id="Vector_5" />
          <path d={svgPaths.p3d96f400} fill="white" id="Vector_6" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

export function NinjoLogo() {
  return (
    <div className="content-stretch flex gap-[13px] items-center relative size-full">
      <SidebarToggle />
      <Group />
    </div>
  );
}
