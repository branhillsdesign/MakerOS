import * as React from "react";

const SvgSendto = ({ title, titleId, ...props }) => (
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
      d="M11 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m21 3-9 9m9-9h-8m8 0v8" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgSendto;
