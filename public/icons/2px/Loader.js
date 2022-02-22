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
    <g mask="url(#Loader_svg__a)">
      <path
        d="M11 1v22h2V1h-2Zm8.071 2.515L3.515 19.07l1.414 1.414L20.485 4.93l-1.414-1.414ZM23 11H1v2h22v-2Zm-2.515 8.071L4.93 3.515 3.515 4.929 19.07 20.485l1.414-1.414Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgLoader;
