import * as React from "react";

const SvgNote = ({ title, titleId, ...props }) => (
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
      d="M12.402 18.174V7.79m0 0V5l4.605-.384v2.79l-4.605.384ZM12.4 18.1c0 1.17-1.188 2.3-2.9 2.3s-2.9-1.13-2.9-2.3c0-1.169 1.188-2.299 2.9-2.299s2.9 1.13 2.9 2.3Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgNote;
