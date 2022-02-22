import * as React from "react";

const SvgTarget01 = ({ title, titleId, ...props }) => (
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
      d="M20.182 12A8.182 8.182 0 0 1 12 20.182M20.182 12A8.182 8.182 0 0 0 12 3.818M20.182 12H23m-11 8.182A8.182 8.182 0 0 1 3.818 12M12 20.182V23M3.818 12A8.182 8.182 0 0 1 12 3.818M3.818 12H1m11-8.182V1"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgTarget01;
