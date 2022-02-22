import * as React from "react";

const SvgGridRound = ({ title, titleId, ...props }) => (
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
    <mask id="Grid_Round_svg__a" fill="#fff">
      <path d="M3 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM3 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    </mask>
    <path
      d="M17 19a2 2 0 0 1-2-2h-4a6 6 0 0 0 6 6v-4Zm2-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6h-4Zm-2-2a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4Zm0-4a6 6 0 0 0-6 6h4a2 2 0 0 1 2-2v-4Zm0-2a2 2 0 0 1-2-2h-4a6 6 0 0 0 6 6V9Zm2-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6h-4Zm-2-2a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4Zm0-4a6 6 0 0 0-6 6h4a2 2 0 0 1 2-2V1ZM7 19a2 2 0 0 1-2-2H1a6 6 0 0 0 6 6v-4Zm2-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6H9Zm-2-2a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4Zm0-4a6 6 0 0 0-6 6h4a2 2 0 0 1 2-2v-4Zm0-2a2 2 0 0 1-2-2H1a6 6 0 0 0 6 6V9Zm2-2a2 2 0 0 1-2 2v4a6 6 0 0 0 6-6H9ZM7 5a2 2 0 0 1 2 2h4a6 6 0 0 0-6-6v4Zm0-4a6 6 0 0 0-6 6h4a2 2 0 0 1 2-2V1Z"
      fill="#555770"
      mask="url(#Grid_Round_svg__a)"
    />
  </svg>
);

export default SvgGridRound;
