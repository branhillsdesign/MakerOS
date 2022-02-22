import * as React from "react";

const SvgLoader = ({ title, titleId, ...props }) => (
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
      id="Loader_svg__a"
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
        d="M12 17a5 5 0 1 0-1.5-9.771L8 0h16v24H0V0h3l6.818 7.5A5 5 0 0 0 12 17Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Loader_svg__a)" strokeWidth={2}>
      <path d="M12 1v22m11-11H1" stroke="#555770" />
      <path
        d="M19.778 4.222 4.222 19.778m15.556 0L4.222 4.222"
        stroke="currentColor"
      />
    </g>
  </svg>
);

export default SvgLoader;
