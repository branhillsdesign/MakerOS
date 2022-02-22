import * as React from "react";

const SvgLinkCrossed = ({ title, titleId, ...props }) => (
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
      id="Link_Crossed_svg__a"
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
    <g mask="url(#Link_Crossed_svg__a)">
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" strokeWidth={2} />
      <path
        d="m18.364 9.879-2.828 2.828 1.414 1.414 2.828-2.828-1.414-1.414Zm-7.071-1.415 2.828-2.828-1.414-1.414L9.88 7.05l1.414 1.414Zm0 11.314 2.828-2.828-1.414-1.414-2.828 2.828 1.414 1.414Zm-4.243-9.9-2.828 2.83 1.414 1.413 2.828-2.828L7.05 9.879Zm7.779-2.12-7.072 7.07 1.415 1.415 7.07-7.071-1.414-1.415ZM5.636 18.363a3 3 0 0 1 0-4.243l-1.414-1.414a5 5 0 0 0 0 7.071l1.414-1.414ZM18.364 5.636a3 3 0 0 1 0 4.243l1.414 1.414a5 5 0 0 0 0-7.071l-1.414 1.414ZM4.222 19.778a5 5 0 0 0 7.07 0L9.88 18.364a3 3 0 0 1-4.243 0l-1.414 1.414ZM19.778 4.222a5 5 0 0 0-7.07 0l1.413 1.414a3 3 0 0 1 4.243 0l1.414-1.414Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgLinkCrossed;
