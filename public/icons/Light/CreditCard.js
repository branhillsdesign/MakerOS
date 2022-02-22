import * as React from "react";

const SvgCreditCard = ({ title, titleId, ...props }) => (
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
      d="M2 8.275V6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2.275m-20 0h20m-20 0V11m20-2.725V11m0 0v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7m20 0H2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgCreditCard;
