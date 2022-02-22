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
      d="M12 9v8m-4-4h8m.5-7H20v1l-2 6 2 6v1H4v-1l2-6-2-6V6h12.5Zm0 0L18 1.5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPharmacy;
