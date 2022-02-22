import * as React from "react";

const SvgGrid7 = ({ title, titleId, ...props }) => (
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
    <mask id="Grid_7_svg__a" fill="#fff">
      <path d="M2 11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2ZM2 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2Z" />
    </mask>
    <path
      d="M23 14h2-2Zm0 6h2-2Zm-1-9V9v2ZM2 11v2-2Zm-3-7v6h4V4h-4Zm3 9h20V9H2v4Zm23-3V4h-4v6h4Zm-3-9H2v4h20V1ZM-1 14v6h4v-6h-4Zm3 9h20v-4H2v4Zm23-3v-6h-4v6h4Zm-3-9H2v4h20v-4Zm3 3a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4Zm-23-3a3 3 0 0 0 3 3v-4a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4ZM25 4a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4Zm-23-3a3 3 0 0 0 3 3V9a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1V1a3 3 0 0 0-3 3h4Z"
      fill="#555770"
      mask="url(#Grid_7_svg__a)"
    />
  </svg>
);

export default SvgGrid7;
