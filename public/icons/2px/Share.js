import * as React from "react";

const SvgShare = ({ title, titleId, ...props }) => (
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
      d="m14.684 7.264-6.5 3.545m6.5 5.928-6.5-3.546"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask id="Share_svg__a" fill="#fff">
      <path d="M20 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </mask>
    <path
      d="M18 6a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1 1a1 1 0 0 1-1-1h-4a5 5 0 0 0 5 5V7Zm-1-1a1 1 0 0 1 1-1V1a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4ZM7 12a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5H7Zm-1 1a1 1 0 0 1-1-1H1a5 5 0 0 0 5 5v-4Zm-1-1a1 1 0 0 1 1-1V7a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm12 7a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1 1a1 1 0 0 1-1-1h-4a5 5 0 0 0 5 5v-4Zm-1-1a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Z"
      fill="#555770"
      mask="url(#Share_svg__a)"
    />
  </svg>
);

export default SvgShare;
