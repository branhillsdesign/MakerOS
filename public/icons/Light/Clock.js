import * as React from "react";

const SvgClock = ({ title, titleId, ...props }) => (
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
      d="M11.4 12v.248l.176.176 4 4 .848-.848L12.6 11.75V5h-1.2v7Zm11 0c0 5.744-4.656 10.4-10.4 10.4-5.744 0-10.4-4.656-10.4-10.4C1.6 6.256 6.256 1.6 12 1.6c5.744 0 10.4 4.656 10.4 10.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgClock;
