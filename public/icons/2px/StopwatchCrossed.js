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
    <g clipPath="url(#Stopwatch_Crossed_svg__a)">
      <mask
        id="Stopwatch_Crossed_svg__b"
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
          d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#Stopwatch_Crossed_svg__b)">
        <path
          d="M12 3a9 9 0 1 0 6.844 3.156M12 3a8.98 8.98 0 0 1 6.844 3.156M12 3V2m0 4.5V13m9-9-2.156 2.156M12 2h-2m2 0h2"
          stroke="#555770"
          strokeWidth={2}
        />
      </g>
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
    </g>
    <defs>
      <clipPath id="Stopwatch_Crossed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgStopwatchCrossed;
