import * as React from "react";

const SvgCarabiner = ({ title, titleId, ...props }) => (
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
      d="M17.4 8v8h1.2V8h-1.2ZM12 21.4A5.4 5.4 0 0 1 6.6 16H5.4a6.6 6.6 0 0 0 6.6 6.6v-1.2Zm5.4-5.4a5.4 5.4 0 0 1-5.4 5.4v1.2a6.6 6.6 0 0 0 6.6-6.6h-1.2ZM12 2.6A5.4 5.4 0 0 1 17.4 8h1.2A6.6 6.6 0 0 0 12 1.4v1.2Zm0-1.2A6.6 6.6 0 0 0 5.4 8h1.2A5.4 5.4 0 0 1 12 2.6V1.4ZM6.6 9V8H5.4v1h1.2ZM6 12.6h.9v-1.2H6v1.2Zm.4-.5v2.8h1.2v-2.8H6.4Zm.2 3.9v-1H5.4v1h1.2Zm.3-1.6H6v1.2h.9v-1.2Zm-.9 0h-.9v1.2H6v-1.2Zm-.4.5v-2.8H4.4v2.8h1.2Zm-.5-2.3H6v-1.2h-.9v1.2Zm.5-.5a.5.5 0 0 1-.5.5v-1.2a.7.7 0 0 0-.7.7h1.2Zm-.5 2.3a.5.5 0 0 1 .5.5H4.4a.7.7 0 0 0 .7.7v-1.2Zm1.3.5a.5.5 0 0 1 .5-.5v1.2a.7.7 0 0 0 .7-.7H6.4Zm.5-2.3a.5.5 0 0 1-.5-.5h1.2a.7.7 0 0 0-.7-.7v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCarabiner;
