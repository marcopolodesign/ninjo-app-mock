import svgPaths from '../../imports/svg-y4hswji1zk';

export default function EmptyState() {
  return (
    <div className="h-[477px] relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center pb-[60px] pr-[16px] pt-[168px] relative size-full">
          <p className="font-['MD_IO:Light',sans-serif] leading-[30px] not-italic relative shrink-0 text-[25.91px] text-black text-center tracking-[-0.5182px] w-[384.832px]">
            All set! Your free trial is activated and will be billed on {'{date}'}
          </p>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%-10px)] opacity-5 top-[calc(50%-51px)]">
            <div className="h-[210.677px] relative shrink-0 w-[205.635px]" data-name="Sidebar toggle">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 205.635 210.677">
                <g id="Sidebar toggle">
                  <path d={svgPaths.p21d49b80} fill="var(--fill-0, black)" id="Vector" />
                  <path d={svgPaths.p34203780} fill="var(--fill-0, black)" id="Vector_2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
