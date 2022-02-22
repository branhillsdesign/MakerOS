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
        d="M11.4 1v22h1.2V1h-1.2Zm7.954 2.798L3.798 19.354l.848.848L20.202 4.646l-.848-.848ZM23 11.4H1v1.2h22v-1.2Zm-2.798 7.954L4.646 3.798l-.848.848 15.556 15.556.848-.848Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgLoader;
