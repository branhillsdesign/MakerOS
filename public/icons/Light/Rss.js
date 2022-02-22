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
      <path
        d="M22 19.4H2a.4.4 0 0 1-.4-.4V5c0-.22.18-.4.4-.4h20c.22 0 .4.18.4.4v14a.4.4 0 0 1-.4.4Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
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
        d="M.5 11.6a8.9 8.9 0 0 1 8.9 8.9h1.2c0-5.578-4.522-10.1-10.1-10.1v1.2Zm0 4a4.9 4.9 0 0 1 4.9 4.9h1.2a6.1 6.1 0 0 0-6.1-6.1v1.2Zm0 4a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgRss;
