import * as React from "react";

const SvgStopwatchCrossed = ({ title, titleId, ...props }) => (
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
      id="Stopwatch_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Stopwatch_Crossed_svg__a)" stroke="#555770">
      <path d="M3.5 4 20 20.5" strokeWidth={1.5} />
      <path
        d="M12 3a9 9 0 1 0 6.844 3.156M12 3a8.98 8.98 0 0 1 6.844 3.156M12 3V2m0 4.5V13m9-9-2.156 2.156M12 2h-2m2 0h2"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgStopwatchCrossed;
