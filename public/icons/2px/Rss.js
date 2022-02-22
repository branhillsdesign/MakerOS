import * as React from "react";

const SvgRss = ({ title, titleId, ...props }) => (
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
      id="RSS_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={3}
      width={24}
      height={18}
    >
      <path d="M.5 8C7.404 8 13 13.596 13 20.5v.5h11V3H0v5h.5Z" fill="#fff" />
    </mask>
    <g mask="url(#RSS_svg__a)">
      <path d="M22 19H2V5h20v14Z" stroke="#555770" strokeWidth={2} />
    </g>
    <mask
      id="RSS_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={7}
      width={13}
      height={13}
    >
      <path fill="#fff" d="M1 7h13v13H1z" />
    </mask>
    <g mask="url(#RSS_svg__b)">
      <path
        d="M.5 12A8.5 8.5 0 0 1 9 20.5h2C11 14.701 6.299 10 .5 10v2Zm0 4A4.5 4.5 0 0 1 5 20.5h2A6.5 6.5 0 0 0 .5 14v2Zm0 4a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 .5 18v2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgRss;
