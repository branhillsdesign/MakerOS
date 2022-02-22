import * as React from "react";

const SvgCoffeePot = ({ title, titleId, ...props }) => (
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
      d="M18.962 11.191C19.625 12.18 20 13.305 20 14.5c0 2.907-2.221 5.406-5.4 6.5H7.4C4.221 19.906 2 17.407 2 14.5c0-1.195.375-2.32 1.038-3.309m15.924 0H3.038m15.924 0C18.012 9.776 16.472 8.644 14.6 8M3.038 11.191C3.988 9.776 5.528 8.644 7.4 8m0 0h7.2M7.4 8V5.4M14.6 8V3M7.4 3h7.2M7.4 3H5c0 1 1 2.4 2.4 2.4m0-2.4v2.4M14.6 3C17 3 22 3 22 10"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgCoffeePot;
