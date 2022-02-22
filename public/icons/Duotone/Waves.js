import * as React from "react";

const SvgWaves = ({ title, titleId, ...props }) => (
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
      d="M2 6c2 0 3-1.5 5-1.5S10 6 12 6s3-1.5 5-1.5S20 6 22 6M2 15c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M2 10.5C4 10.5 5 9 7 9s3 1.5 5 1.5S15 9 17 9s3 1.5 5 1.5m-20 9c2 0 3-1.5 5-1.5s3 1.5 5 1.5 3-1.5 5-1.5 3 1.5 5 1.5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWaves;
