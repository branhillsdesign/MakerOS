import * as React from "react";

const SvgPin = ({ title, titleId, ...props }) => (
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
      d="m12.697 20.261.735.678-.735-.678Zm-1.394 0-.735.678.735-.678ZM18 10c0 .56-.212 1.313-.64 2.218-.42.888-1.008 1.843-1.667 2.785-1.318 1.883-2.86 3.633-3.732 4.58l1.471 1.356c.898-.976 2.508-2.8 3.9-4.79.695-.994 1.35-2.05 1.836-3.076.477-1.01.832-2.078.832-3.073h-2Zm-5.961 9.584c-.873-.948-2.414-2.698-3.732-4.581-.659-.942-1.247-1.897-1.667-2.785C6.212 11.313 6 10.561 6 10H4c0 .995.355 2.063.832 3.073.485 1.026 1.14 2.082 1.836 3.076 1.392 1.99 3.002 3.814 3.9 4.79l1.471-1.355ZM6 10a6 6 0 0 1 6-6V2a8 8 0 0 0-8 8h2Zm6-6a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8v2Zm-.039 15.584.004-.003a.063.063 0 0 1 .07 0l.004.003-1.471 1.355a1.94 1.94 0 0 0 2.864 0l-1.471-1.355Z"
      fill="#555770"
    />
    <path
      d="M15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPin;
