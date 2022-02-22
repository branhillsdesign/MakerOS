import * as React from "react";

const SvgChristmasTreeBall = ({ title, titleId, ...props }) => (
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
      d="M12 3c-1.5 0-1.5 1.5-1.5 3.14a8.042 8.042 0 0 1 3 0C13.5 4.5 13.5 3 12 3Zm0 0V0M4.017 14.52a5.983 5.983 0 0 0 3.52-1.737A5.982 5.982 0 0 1 11.805 11c1.67 0 3.18.682 4.268 1.783a5.98 5.98 0 0 0 3.908 1.773"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10.5 6.14a8.003 8.003 0 0 0-6.483 8.38A8 8 0 1 0 10.5 6.14Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChristmasTreeBall;
