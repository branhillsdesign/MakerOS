import * as React from "react";

const SvgPopstickle = ({ title, titleId, ...props }) => (
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
      d="M11.5 21.503v-5.467h1v5.467A.499.499 0 0 1 12 22a.499.499 0 0 1-.5-.497Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M7 4.46c0-.526.278-1.014.732-1.285a8.338 8.338 0 0 1 8.536 0c.454.27.732.759.732 1.285v10.582a.997.997 0 0 1-1 .994H8c-.552 0-1-.445-1-.994V4.46Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPopstickle;
