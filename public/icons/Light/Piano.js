import * as React from "react";

const SvgPiano = ({ title, titleId, ...props }) => (
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
      d="M22.6 17V7h-1.2v10h1.2ZM3 18.6h18v-1.2H3v1.2ZM1.4 7v10h1.2V7H1.4ZM6 5.4H3v1.2h3V5.4Zm-.6.6v6h1.2V6H5.4Zm4.6-.6H6v1.2h4V5.4Zm-.6.6v6h1.2V6H9.4Zm4.6-.6h-4v1.2h4V5.4Zm-.6.6v6h1.2V6h-1.2Zm7.6-.6h-3v1.2h3V5.4Zm-3 0h-4v1.2h4V5.4Zm-.6.6v6h1.2V6h-1.2ZM2.6 7c0-.22.18-.4.4-.4V5.4A1.6 1.6 0 0 0 1.4 7h1.2Zm20 0A1.6 1.6 0 0 0 21 5.4v1.2c.22 0 .4.18.4.4h1.2Zm-1.2 10a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM3 17.4a.4.4 0 0 1-.4-.4H1.4A1.6 1.6 0 0 0 3 18.6v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPiano;
