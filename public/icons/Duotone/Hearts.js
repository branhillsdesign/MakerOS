import * as React from "react";

const SvgHearts = ({ title, titleId, ...props }) => (
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
      d="M19 1H5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9.46 7.37a2.544 2.544 0 0 0-2.54 2.547c0 .574.04 1.27.69 2.033.65.761 4.39 4.68 4.39 4.68s3.739-3.919 4.39-4.68c.65-.762.689-1.459.689-2.033a2.544 2.544 0 0 0-2.54-2.548A2.544 2.544 0 0 0 12 9.917 2.544 2.544 0 0 0 9.46 7.37Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHearts;
