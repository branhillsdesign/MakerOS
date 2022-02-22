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
      d="M17 9v-.5h-3V9m3 0h3.488M17 9v.5m3.488-.5A9.002 9.002 0 0 0 12 3a9.003 9.003 0 0 0-8.488 6m16.976 0c.332.938.512 1.948.512 3a9 9 0 1 1-18 0c0-1.052.18-2.062.512-3M7 9v-.5h3V9M7 9H3.512M7 9v.5m3-.5h4m-4 0v.5m4-.5v.5m-7 0V11h3V9.5m-3 0h3m4 0V11h3V9.5m-3 0h3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonGlasses;
