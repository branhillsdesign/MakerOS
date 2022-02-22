import * as React from "react";

const SvgBold = ({ title, titleId, ...props }) => (
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
      d="M7 19h-.6v.6H7V19ZM7 6v-.6h-.6V6H7Zm0 13.6h6.563v-1.2H7v1.2Zm-.6-7.1V19h1.2v-6.5H6.4Zm7.162-.6H7v1.2h6.563v-1.2Zm4.038 3.85c0-2.158-1.84-3.85-4.038-3.85v1.2c1.6 0 2.838 1.218 2.838 2.65h1.2Zm-4.038 3.85c2.198 0 4.038-1.692 4.038-3.85h-1.2c0 1.432-1.238 2.65-2.837 2.65v1.2ZM7 13.1h5.875v-1.2H7v1.2ZM6.4 6v6.5h1.2V6H6.4Zm6.475-.6H7v1.2h5.875V5.4Zm4.038 3.85c0-2.158-1.84-3.85-4.038-3.85v1.2c1.6 0 2.838 1.218 2.838 2.65h1.2Zm-4.038 3.85c2.198 0 4.038-1.692 4.038-3.85h-1.2c0 1.432-1.239 2.65-2.838 2.65v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBold;
