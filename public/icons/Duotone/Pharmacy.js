import * as React from "react";

const SvgPharmacy = ({ title, titleId, ...props }) => (
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
      d="M12 9v8m-4-4h8m.5-7L18 1.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20 20H4v-1l2-6-2-6V6h16v1l-2 6 2 6v1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPharmacy;
