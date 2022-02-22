import * as React from "react";

const SvgGrid6 = ({ title, titleId, ...props }) => (
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
    <mask id="Grid_6_svg__a" fill="#fff">
      <path d="M2 11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2ZM2 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2ZM14 11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8ZM14 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-8Z" />
    </mask>
    <path
      d="M22 21v2-2Zm-9-1h2-2Zm1 1v-2 2Zm-1-7h-2 2Zm0-4h2-2Zm0-6h-2 2Zm-3 17v-2 2Zm-8 0v2-2ZM-1 4v6h4V4h-4Zm3 9h8V9H2v4Zm11-3V4H9v6h4Zm-3-9H2v4h8V1ZM-1 14v6h4v-6h-4Zm3 9h8v-4H2v4Zm11-3v-6H9v6h4Zm-3-9H2v4h8v-4Zm1-7v6h4V4h-4Zm3 9h8V9h-8v4Zm11-3V4h-4v6h4Zm-3-9h-8v4h8V1ZM11 14v6h4v-6h-4Zm3 9h8v-4h-8v4Zm11-3v-6h-4v6h4Zm-3-9h-8v4h8v-4Zm3 3a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4Zm-11-3a3 3 0 0 0 3 3v-4a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4ZM25 4a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4Zm-11-3a3 3 0 0 0 3 3V9a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1V1a3 3 0 0 0-3 3h4Zm-2 10a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3H9a1 1 0 0 1 1-1v4Zm-11-3a3 3 0 0 0 3 3v-4a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4ZM13 4a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-3 9a3 3 0 0 0 3-3H9a1 1 0 0 1 1-1v4Zm-11-3a3 3 0 0 0 3 3V9a1 1 0 0 1 1 1h-4Zm4-6a1 1 0 0 1-1 1V1a3 3 0 0 0-3 3h4Z"
      fill="#555770"
      mask="url(#Grid_6_svg__a)"
    />
  </svg>
);

export default SvgGrid6;
