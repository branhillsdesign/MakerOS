import * as React from "react";

const SvgSurfboard = ({ title, titleId, ...props }) => (
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
      d="M14.772 14.885c1.142-2.433 1.213-4.557.056-5.713-1.156-1.157-3.28-1.086-5.713.056M8.11 16.596l-.707-.707m1.06.354-.707-.707"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m14.828 14.828-.057.057c-4.278 4.255-8.64 6.095-10.196 4.54-1.555-1.556.284-5.919 4.54-10.197l.056-.056c4.296-4.296 8.691-6.159 10.253-4.597 1.562 1.562-.3 5.958-4.596 10.253Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSurfboard;
