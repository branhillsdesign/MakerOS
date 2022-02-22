import * as React from "react";

const SvgMouse = ({ title, titleId, ...props }) => (
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
    <mask id="Mouse_svg__a" fill="#fff">
      <path d="M6 9a6 6 0 1 1 12 0v6a6 6 0 0 1-12 0V9Z" />
    </mask>
    <path
      d="M13 8a1 1 0 1 0-2 0h2Zm-2 3a1 1 0 1 0 2 0h-2Zm0-3v3h2V8h-2Zm5 1v6h4V9h-4Zm-8 6V9H4v6h4Zm4 4a4 4 0 0 1-4-4H4a8 8 0 0 0 8 8v-4Zm0 4a8 8 0 0 0 8-8h-4a4 4 0 0 1-4 4v4Zm0-18a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Zm0-4a8 8 0 0 0-8 8h4a4 4 0 0 1 4-4V1Z"
      fill="#555770"
      mask="url(#Mouse_svg__a)"
    />
  </svg>
);

export default SvgMouse;
