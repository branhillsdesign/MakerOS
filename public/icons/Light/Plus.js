import * as React from "react";

const SvgPlus = ({ title, titleId, ...props }) => (
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
      d="M12 16.6h5v-1.2h-5v1.2Zm-9-14h18c.22 0 .4.18.4.4v18a.4.4 0 0 1-.4.4H3a.4.4 0 0 1-.4-.4V3c0-.22.18-.4.4-.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3 3 21V3h18ZM7.936 5v2.936H5v1.2h2.936v2.935h1.2V9.136h2.935v-1.2H9.136V5h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPlus;
