import * as React from "react";

const SvgParking = ({ title, titleId, ...props }) => (
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
      d="M8 6V5H7v1h1Zm0 1h5V5H8v2Zm1 13v-6H7v6h2Zm0-6V6H7v8h2Zm4-1H8v2h5v-2Zm3-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-3-3a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgParking;
