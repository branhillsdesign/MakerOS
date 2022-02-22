import * as React from "react";

const SvgEmoticonGlasses = ({ title, titleId, ...props }) => (
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
      d="M17.5 9v-.5h-4V9m4 0h2.988M17.5 9v2.5h-4V9m6.988 0A9.002 9.002 0 0 0 12 3a9.003 9.003 0 0 0-8.488 6m16.976 0c.332.938.512 1.948.512 3a9 9 0 1 1-18 0c0-1.052.18-2.062.512-3M6.5 9v-.5h4V9m-4 0H3.512M6.5 9v2.5h4V9m0 0h3"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonGlasses;
