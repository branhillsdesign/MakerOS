import * as React from "react";

const SvgCrossedArrows = ({ title, titleId, ...props }) => (
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
    <path d="M15 20h5v-5l-5 5ZM15 4h5v5l-5-5Z" fill="#555770" />
    <path
      d="m5 5 4.88 4.88M19 19l-4.88-4.88M5 19 19 5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCrossedArrows;
