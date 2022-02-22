import * as React from "react";

const SvgRuler = ({ title, titleId, ...props }) => (
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
      d="m6.285 17 2.857 2.857 2.143-2.143m0 0L9.5 15.93m1.786 1.785 2.143-2.142m0 0-2.857-2.858m2.857 2.857 2.143-2.142m0 0-1.786-1.786m1.786 1.786 2.143-2.143m0 0-2.857-2.857m2.857 2.857 2.143-2.143-1.786-1.786"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M17 2 2 17l5 5 2.143-2.143 2.143-2.143 2.143-2.143 2.142-2.142 2.143-2.143 2.143-2.143L22 7l-5-5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRuler;
