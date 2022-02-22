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
    <path
      d="M22 9V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={2} />
    <path
      d="M21.125 14.625V17h2v-2.375h-2Zm1 1.375h-5.25v2h5.25v-2Zm-4.25 1v-2.375h-2V17h2Zm-1-1H16.1v2h.775v-2ZM15 17.1V21h2v-3.9h-2Zm2 5.9h5v-2h-5v2Zm7-2v-3.9h-2V21h2Zm-1.1-5h-.775v2h.775v-2Zm1.1 1.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM16.1 16a1.1 1.1 0 0 0-1.1 1.1h2a.9.9 0 0 1-.9.9v-2Zm5.9 7a2 2 0 0 0 2-2h-2v2Zm-2.5-10c.898 0 1.625.727 1.625 1.625h2A3.625 3.625 0 0 0 19.5 11v2ZM15 21a2 2 0 0 0 2 2v-2h-2Zm4.5-10a3.625 3.625 0 0 0-3.625 3.625h2c0-.898.727-1.625 1.625-1.625v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailLocked;
