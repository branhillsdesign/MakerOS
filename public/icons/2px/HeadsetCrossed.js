import * as React from "react";

const SvgHeadsetCrossed = ({ title, titleId, ...props }) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask
      id="Headset_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21 20.997 0 0v24h24V0H5.698v2.866L22.5 19.668 21 20.997Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Headset_Crossed_svg__a)">
      <path d="M2.583 4 20 21.417" stroke="#555770" strokeWidth={2} />
      <path
        d="m15.788 21.398-.715-.699.715.7Zm3.642-3.724.715.699-.715-.7ZM5 10a7 7 0 0 1 7-7V1a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2Zm0 20h2.358v-2H12v2Zm4.503-.903 3.642-3.724-1.43-1.398-3.642 3.724 1.43 1.398ZM21 16.276V16h-2v.276h2Zm-.855 2.097A3 3 0 0 0 21 16.276h-2a1 1 0 0 1-.285.699l1.43 1.398ZM14.358 23a3 3 0 0 0 2.145-.903l-1.43-1.398a1 1 0 0 1-.715.301v2ZM19 10v6h2v-6h-2Z"
        fill="#555770"
      />
      <mask id="Headset_Crossed_svg__b" fill="#fff">
        <path d="M1 11a1 1 0 0 1 1-1h3v6H2a1 1 0 0 1-1-1v-4ZM19 10h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v-6ZM10 21a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z" />
      </mask>
      <path
        d="M5 10h2V8H5v2Zm0 6v2h2v-2H5Zm14-6V8h-2v2h2Zm0 6h-2v2h2v-2ZM2 12h3V8H2v4Zm1-2v6h4v-6H3Zm2 4H2v4h3v-4Zm-2 1v-4h-4v4h4Zm16-3h3V8h-3v4Zm2-1v4h4v-4h-4Zm1 3h-3v4h3v-4Zm-1 2v-6h-4v6h4Zm-10 6h2v-4h-2v4Zm1-1v1h4v-1h-4Zm1 0h-2v4h2v-4Zm-1 1v-1H8v1h4Zm0 0a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm1 0a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm8-7a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4Zm-10 3a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1v-4Zm-9-4a1 1 0 0 1 1 1h-4a3 3 0 0 0 3 3v-4Zm20-2a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-11 9a1 1 0 0 1 1 1H8a3 3 0 0 0 3 3v-4ZM2 8a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1V8Z"
        fill="#555770"
        mask="url(#Headset_Crossed_svg__b)"
      />
    </g>
  </svg>
);

export default SvgHeadsetCrossed;
