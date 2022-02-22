import * as React from "react";

const SvgBabyCart = ({ title, titleId, ...props }) => (
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
      d="M3 10h2l1.15 2m0 0h14.7a7.49 7.49 0 0 1-2.253 4.002M6.15 12a7.49 7.49 0 0 0 2.253 4.002m0 0a2.5 2.5 0 1 0 2.387 1.493m-2.387-1.493L8.5 16a2.5 2.5 0 0 1 2.29 1.495m0 0A7.48 7.48 0 0 0 13.5 18a7.48 7.48 0 0 0 2.71-.505m2.387-1.493a2.5 2.5 0 0 0-2.387 1.494m2.387-1.494a2.5 2.5 0 1 1-2.387 1.493M15 3.15V9h5.85A7.509 7.509 0 0 0 15 3.15Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBabyCart;
