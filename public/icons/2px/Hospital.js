import * as React from "react";

const SvgHospital = ({ title, titleId, ...props }) => (
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
      d="M9 7v5m0 5v-5m6-5v5m0 5v-5m0 0H9m-5 9h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHospital;
