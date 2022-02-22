import * as React from "react";

const SvgEyeCrossed = ({ title, titleId, ...props }) => (
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
      id="Eye_Crossed_svg__a"
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
    <g mask="url(#Eye_Crossed_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="m3.524 4.942 15.5 15.5" />
      <circle cx={12} cy={12} r={3} />
      <path d="M12 18c-4.548 0-8.367-2.526-9.916-6C3.633 8.526 7.452 6 12 6s8.367 2.526 9.916 6c-1.549 3.474-5.368 6-9.916 6Z" />
    </g>
  </svg>
);

export default SvgEyeCrossed;
