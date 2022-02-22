import * as React from "react";

const SvgLifesaverHouse = ({ title, titleId, ...props }) => (
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
    <path d="M17 8V5m0 0V2h5v3h-5Z" stroke="currentColor" strokeWidth={2} />
    <path
      d="m5 10 7-7 5 5 2 2M5 10l-3 3m3-3v10m0 0v4m0-4h5m9-10 3 3m-3-3v10m0 0v4m0-4h-5m-4 0v-8h4v8m-4 0h4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLifesaverHouse;
