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
      d="M12 18.502V7m0 0V5l5-1v2l-5 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M13 18.5c0 1.38-1.567 2.5-3.5 2.5S6 19.88 6 18.5 7.567 16 9.5 16s3.5 1.12 3.5 2.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgNote;
