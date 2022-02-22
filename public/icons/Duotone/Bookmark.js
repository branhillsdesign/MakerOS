import * as React from "react";

const SvgBookmark = ({ title, titleId, ...props }) => (
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
    <path
      d="m12.58 16.2-.58-.414-.58.414L6 20.06V4h12v16.06l-5.42-3.86Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Bookmark_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Bookmark_svg__a)">
      <path
        d="m12.58 16.2-.58-.414-.58.414L6 20.06V4h12v16.06l-5.42-3.86Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBookmark;
