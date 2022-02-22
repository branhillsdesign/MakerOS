import * as React from "react";

const SvgSofa = ({ title, titleId, ...props }) => (
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
      d="M5 15H4v1h1v-1Zm14 0v1h1v-1h-1ZM6 15v-3H4v3h2Zm-6-3v5h2v-5H0Zm3 8h18v-2H3v2Zm21-3v-5h-2v5h2Zm-6-5v3h2v-3h-2Zm1 2H5v2h14v-2ZM6 6h12V4H6v2Zm13 1v3h2V7h-2ZM5 10V7H3v3h2Zm13-4a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM6 4a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V4Zm14 8a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm4 0a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm-3 8a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2ZM0 17a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0Zm2-5a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm4 0a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSofa;
