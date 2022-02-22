import * as React from "react";

const SvgMailLocked = ({ title, titleId, ...props }) => (
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
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={2} />
    <path
      d="M22 9V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M22.125 17v-2.375a2.625 2.625 0 0 0-5.25 0V17m5.25 0h-5.25m5.25 0h.775a.1.1 0 0 1 .1.1V21a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3.9a.1.1 0 0 1 .1-.1h.775"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMailLocked;
