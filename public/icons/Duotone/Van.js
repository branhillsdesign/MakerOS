import * as React from "react";

const SvgVan = ({ title, titleId, ...props }) => (
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
      d="m22 11-5.5-5H14m8 5v4h-2.268M22 11h-8M2 11v4h2.268M2 11V7a1 1 0 0 1 1-1h5m-6 5h6m0-5v5m0-5h6m-6 5h6m0-5v5m-6.268 4h8.536"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M8 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM20 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVan;
