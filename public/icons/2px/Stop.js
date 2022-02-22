import * as React from "react";

const SvgStop = ({ title, titleId, ...props }) => (
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
    <mask id="Stop_svg__a" fill="#fff">
      <path d="M4 20V4h16v16H4Z" />
    </mask>
    <path
      d="M4 4V2H2v2h2Zm0 16H2v2h2v-2Zm16 0v2h2v-2h-2Zm0-16h2V2h-2v2ZM2 4v16h4V4H2Zm2 18h16v-4H4v4Zm18-2V4h-4v16h4ZM20 2H4v4h16V2Z"
      fill="#555770"
      mask="url(#Stop_svg__a)"
    />
  </svg>
);

export default SvgStop;
