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
      strokeWidth={1.2}
    />
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={1.2} />
    <path
      d="M21.525 14.625V17h1.2v-2.375h-1.2Zm.6 1.775h-5.25v1.2h5.25v-1.2Zm-4.65.6v-2.375h-1.2V17h1.2Zm-.6-.6H16.1v1.2h.775v-1.2Zm-1.475.7V21h1.2v-3.9h-1.2Zm1.6 5.5h5v-1.2h-5v1.2Zm6.6-1.6v-3.9h-1.2V21h1.2Zm-.7-4.6h-.775v1.2h.775v-1.2Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-7.5-.7a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5v-1.2Zm5.9 6.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm-2.5-10c1.118 0 2.025.907 2.025 2.025h1.2A3.225 3.225 0 0 0 19.5 11.4v1.2ZM15.4 21a1.6 1.6 0 0 0 1.6 1.6v-1.2a.4.4 0 0 1-.4-.4h-1.2Zm4.1-9.6a3.225 3.225 0 0 0-3.225 3.225h1.2c0-1.118.907-2.025 2.025-2.025v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailLocked;
