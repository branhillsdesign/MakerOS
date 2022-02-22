import * as React from "react";

const SvgEmoticonAmazed = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="M12 17c-1.283 0-2-.834-2-1.5 0-.665.717-1.5 2-1.5s2 .835 2 1.5c0 .666-.717 1.5-2 1.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonAmazed;
