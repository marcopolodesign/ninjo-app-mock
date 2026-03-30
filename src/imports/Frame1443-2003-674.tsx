import svgPaths from "./svg-uolgo5dcgk";

function SidebarToggle() {
  return (
    <div className="h-[210.677px] relative shrink-0 w-[205.635px]" data-name="Sidebar toggle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.635 210.677">
        <g id="Sidebar toggle">
          <path d={svgPaths.p21d49b80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p34203780} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-5 relative size-full">
      <SidebarToggle />
    </div>
  );
}