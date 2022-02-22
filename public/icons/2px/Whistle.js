import * as React from "react";

const SvgWhistle = ({ title, titleId, ...props }) => (
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
      d="M21 7h1V6h-1v1Zm0 2v1h1V9h-1ZM5 8.5a.5.5 0 0 1-.5.5v2A2.5 2.5 0 0 0 7 8.5H5Zm-.5.5a.5.5 0 0 1-.5-.5H2A2.5 2.5 0 0 0 4.5 11V9ZM4 8.5a.5.5 0 0 1 .5-.5V6A2.5 2.5 0 0 0 2 8.5h2Zm.5-.5a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 4.5 6v2Zm9.5 4a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3 3a3 3 0 0 1-3-3H6a5 5 0 0 0 5 5v-2Zm-3-3a3 3 0 0 1 3-3V7a5 5 0 0 0-5 5h2Zm3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Zm4 3a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4 4a4 4 0 0 1-4-4H5a6 6 0 0 0 6 6v-2Zm-4-4a4 4 0 0 1 4-4V6a6 6 0 0 0-6 6h2Zm4-4h10V6H11v2Zm9-1v2h2V7h-2Zm-9 1c1.308 0 2.47.627 3.2 1.6l1.6-1.2A5.992 5.992 0 0 0 11 6v2Zm3.2 1.6c.503.669.8 1.498.8 2.4h2c0-1.35-.447-2.598-1.2-3.6l-1.6 1.2ZM21 8h-2.5v2H21V8Zm-2.5 0H15v2h3.5V8ZM17 12c0-.975.136-1.43.3-1.65.106-.141.352-.35 1.2-.35V8c-1.152 0-2.156.291-2.8 1.15-.586.78-.7 1.825-.7 2.85h2Zm-8 0a2 2 0 0 0 2 2v-2H9Zm2 2a2 2 0 0 0 2-2h-2v2Zm2-2a2 2 0 0 0-2-2v2h2Zm-2-2a2 2 0 0 0-2 2h2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWhistle;
