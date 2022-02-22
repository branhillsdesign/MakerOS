import * as React from "react";

const SvgMotorcycle = ({ title, titleId, ...props }) => (
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
      d="M9 6h4l2.91 2.91M0 10h4.5l2.13 2.13m9.675-2.825 2.838 2.82m-2.838-2.82-.394.695m.394-.695-.394-.394m0 1.089H11l-4.106 2m9.017-2-1.137 2m-8.145.13L8.5 14m-1.87-1.87.264-.13m9.017-3.09.899-.41m0 0 2.19-1v1h-2.19ZM8.5 14l2 2h2l1.137-2M8.5 14h5.137m0 0 1.137-2m0 0h-7.88"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM23 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMotorcycle;
