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
        x={4}
        y={8}
        width={12}
        height={12}
        rx={1}
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="M13 6.733V9h-2.267v2H13v2.267h2V11h2.267V9H15V6.733h-2ZM9 4h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAddLayer;
