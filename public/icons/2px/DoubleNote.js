import * as React from "react";

const SvgDoubleNote = ({ title, titleId, ...props }) => (
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
      d="M8 18.502V7m12 11.502V6m0 0V4L8 5v2m12-1L8 7"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9 18.5C9 19.88 7.433 21 5.5 21S2 19.88 2 18.5 3.567 16 5.5 16 9 17.12 9 18.5ZM21 18.5c0 1.38-1.567 2.5-3.5 2.5S14 19.88 14 18.5s1.567-2.5 3.5-2.5 3.5 1.12 3.5 2.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDoubleNote;
