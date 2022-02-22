import * as React from "react";

const SvgAddLayer = ({ title, titleId, ...props }) => (
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
      id="Add_Layer_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={7}
      width={14}
      height={14}
    >
      <path d="M3 21V7h1.867v12.133H17V21H3Z" fill="#fff" />
    </mask>
    <g mask="url(#Add_Layer_svg__a)">
      <rect
        x={3.6}
        y={7.6}
        width={12.8}
        height={12.8}
        rx={1.4}
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M13.4 6.733V9.4h-2.667v1.2H13.4v2.667h1.2V10.6h2.667V9.4H14.6V6.733h-1.2ZM9 3.6h10A1.4 1.4 0 0 1 20.4 5v10a1.4 1.4 0 0 1-1.4 1.4H9A1.4 1.4 0 0 1 7.6 15V5A1.4 1.4 0 0 1 9 3.6Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgAddLayer;
