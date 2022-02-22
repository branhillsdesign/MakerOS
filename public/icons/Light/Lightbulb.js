import * as React from "react";

const SvgLightbulb = ({ title, titleId, ...props }) => (
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
      d="M9 20h-.6v.6H9V20Zm6 0v.6h.6V20H15ZM6.6 10A5.4 5.4 0 0 1 12 4.6V3.4A6.6 6.6 0 0 0 5.4 10h1.2ZM12 4.6a5.4 5.4 0 0 1 5.4 5.4h1.2A6.6 6.6 0 0 0 12 3.4v1.2ZM9.3 14.678A5.397 5.397 0 0 1 6.6 10H5.4a6.598 6.598 0 0 0 3.3 5.717l.6-1.04Zm-.9.52V20h1.2v-4.803H8.4ZM12 20.4a1.4 1.4 0 0 1-1.213-.7l-1.039.6A2.6 2.6 0 0 0 12 21.6v-1.2Zm-3 .2h1.268v-1.2H9v1.2Zm4.213-.9a1.4 1.4 0 0 1-1.213.7v1.2a2.6 2.6 0 0 0 2.252-1.3l-1.039-.6Zm.52.9H15v-1.2h-1.268v1.2ZM17.4 10a5.397 5.397 0 0 1-2.7 4.678l.6 1.039A6.598 6.598 0 0 0 18.6 10h-1.2Zm-1.8 10v-4.803h-1.2V20h1.2Zm-5.332.6h3.464v-1.2h-3.464v1.2ZM9 15.797h6v-1.2H9v1.2Z"
      fill="#555770"
    />
    <path
      d="M9 18.1h6v-1.2H9v1.2Zm3.6-3.1v-4h-1.2v4h1.2Zm-.176-4.424-2-2-.848.848 2 2 .848-.848Zm0 .848 2-2-.848-.848-2 2 .848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLightbulb;
