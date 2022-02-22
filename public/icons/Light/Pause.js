import * as React from "react";

const SvgPause = ({ title, titleId, ...props }) => (
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
    <mask id="Pause_svg__a" fill="#fff">
      <path d="M4 20V4h7v16H4ZM13 20V4h7v16h-7Z" />
    </mask>
    <path
      d="M4 4V2.8H2.8V4H4Zm0 16H2.8v1.2H4V20Zm7 0v1.2h1.2V20H11Zm0-16h1.2V2.8H11V4Zm2 0V2.8h-1.2V4H13Zm0 16h-1.2v1.2H13V20Zm7 0v1.2h1.2V20H20Zm0-16h1.2V2.8H20V4ZM2.8 4v16h2.4V4H2.8ZM4 21.2h7v-2.4H4v2.4Zm8.2-1.2V4H9.8v16h2.4ZM11 2.8H4v2.4h7V2.8Zm.8 1.2v16h2.4V4h-2.4ZM13 21.2h7v-2.4h-7v2.4Zm8.2-1.2V4h-2.4v16h2.4ZM20 2.8h-7v2.4h7V2.8Z"
      fill="#555770"
      mask="url(#Pause_svg__a)"
    />
  </svg>
);

export default SvgPause;
