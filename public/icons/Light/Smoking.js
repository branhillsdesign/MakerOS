import * as React from "react";

const SvgSmoking = ({ title, titleId, ...props }) => (
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
    <path d="M3 18v-1h13v1H3Z" stroke="#555770" strokeWidth={1.2} />
    <path
      d="M18.4 16v3h1.2v-3h-1.2Zm2.5 0v3h1.2v-3h-1.2Zm1.2-1v-2h-1.2v2h1.2Zm0-2a5.6 5.6 0 0 0-5.6-5.6v1.2a4.4 4.4 0 0 1 4.4 4.4h1.2Zm-5.6-4.4h.25V7.4h-.25v1.2Zm.25-6.7h-.25v1.2h.25V1.9Zm3.35 3.35c0-1.85-1.5-3.35-3.35-3.35v1.2a2.15 2.15 0 0 1 2.15 2.15h1.2ZM16.75 8.6c1.85 0 3.35-1.5 3.35-3.35h-1.2a2.15 2.15 0 0 1-2.15 2.15v1.2ZM19.6 15v-1h-1.2v1h1.2ZM16 10.4h-1.5v1.2H16v-1.2Zm-3.4-1.9c0-1.05.85-1.9 1.9-1.9V5.4a3.1 3.1 0 0 0-3.1 3.1h1.2Zm1.9 1.9a1.9 1.9 0 0 1-1.9-1.9h-1.2a3.1 3.1 0 0 0 3.1 3.1v-1.2Zm5.1 3.6a3.6 3.6 0 0 0-3.6-3.6v1.2a2.4 2.4 0 0 1 2.4 2.4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSmoking;
