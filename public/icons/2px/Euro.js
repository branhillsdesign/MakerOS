import * as React from "react";

const SvgEuro = ({ title, titleId, ...props }) => (
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
      d="M18 17.745a7 7 0 1 1 0-11.49M4.5 10.5H16M4.5 14H16"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEuro;
