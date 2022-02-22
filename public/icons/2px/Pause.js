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
      d="M4 4V2H2v2h2Zm0 16H2v2h2v-2Zm7 0v2h2v-2h-2Zm0-16h2V2h-2v2Zm2 0V2h-2v2h2Zm0 16h-2v2h2v-2Zm7 0v2h2v-2h-2Zm0-16h2V2h-2v2ZM2 4v16h4V4H2Zm2 18h7v-4H4v4Zm9-2V4H9v16h4ZM11 2H4v4h7V2Zm0 2v16h4V4h-4Zm2 18h7v-4h-7v4Zm9-2V4h-4v16h4ZM20 2h-7v4h7V2Z"
      fill="#555770"
      mask="url(#Pause_svg__a)"
    />
  </svg>
);

export default SvgPause;
