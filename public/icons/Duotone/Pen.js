import * as React from "react";

const SvgPen = ({ title, titleId, ...props }) => (
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
      d="M11.475 12.525a1.918 1.918 0 1 0 2.711-2.712 1.918 1.918 0 0 0-2.711 2.712Zm0 0L3 21"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M15.509 4.356a9.578 9.578 0 0 1-7.424 2.068L3 21l14.576-5.085a9.578 9.578 0 0 1 2.068-7.424m-4.135-4.135-.645-.644L16.898 1m-1.39 3.356 4.136 4.135m0 0 .644.645L23 7.102"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPen;
