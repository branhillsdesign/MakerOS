import * as React from "react";

const SvgAtm = ({ title, titleId, ...props }) => (
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
      d="M12.1 14.75v-5.5h-1.2v5.5h1.2Zm-.6-6.1h-3v1.2h3v-1.2Zm0 1.2h3v-1.2h-3v1.2ZM6 8.65H3v1.2h3v-1.2Zm-4.1 1.1v2.5h1.2v-2.5H1.9Zm0 2.5v2.5h1.2v-2.5H1.9Zm5.2 2.5v-2.5H5.9v2.5h1.2Zm0-2.5v-2.5H5.9v2.5h1.2Zm-4.6.6h4v-1.2h-4v1.2Zm14.6 1.9v-5h-1.2v5h1.2Zm3.8-5v5h1.2v-5h-1.2Zm-3.9.1h2v-1.2h-2v1.2Zm2 0h2v-1.2h-2v1.2Zm-.6-.6v4.5h1.2v-4.5h-1.2Zm3.7.5a1.1 1.1 0 0 0-1.1-1.1v1.2a.1.1 0 0 1-.1-.1h1.2Zm-5 0a.1.1 0 0 1-.1.1v-1.2a1.1 1.1 0 0 0-1.1 1.1h1.2ZM3 8.65a1.1 1.1 0 0 0-1.1 1.1h1.2a.1.1 0 0 1-.1.1v-1.2Zm3 1.2a.1.1 0 0 1-.1-.1h1.2A1.1 1.1 0 0 0 6 8.65v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAtm;
