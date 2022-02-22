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
      d="M12.6 7.5a.6.6 0 1 0-1.2 0h1.2Zm-1.2 3a.6.6 0 1 0 1.2 0h-1.2Zm0-3v3h1.2v-3h-1.2ZM16.8 9v6h2.4V9h-2.4Zm-9.6 6V9H4.8v6h2.4Zm4.8 4.8A4.8 4.8 0 0 1 7.2 15H4.8a7.2 7.2 0 0 0 7.2 7.2v-2.4Zm0 2.4a7.2 7.2 0 0 0 7.2-7.2h-2.4a4.8 4.8 0 0 1-4.8 4.8v2.4Zm0-18A4.8 4.8 0 0 1 16.8 9h2.4A7.2 7.2 0 0 0 12 1.8v2.4Zm0-2.4A7.2 7.2 0 0 0 4.8 9h2.4A4.8 4.8 0 0 1 12 4.2V1.8Z"
      fill="#555770"
      mask="url(#Mouse_svg__a)"
    />
  </svg>
);

export default SvgMouse;
