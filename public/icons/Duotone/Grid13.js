import * as React from "react";

const SvgGrid13 = ({ title, titleId, ...props }) => (
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
      d="M22 3h-2.9a.1.1 0 0 0-.1.1v17.8a.1.1 0 0 0 .1.1H22M2 3h2.9a.1.1 0 0 1 .1.1v17.8a.1.1 0 0 1-.1.1H2"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M9 3h6v18H9V3Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgGrid13;
