import * as React from "react";

const SvgGolfFlag = ({ title, titleId, ...props }) => (
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
    <circle cx={19.5} cy={19.5} r={1.5} fill="#555770" />
    <path
      d="M10 22c3.314 0 6-.895 6-2s-2.686-2-6-2c-.34 0-.675.01-1 .028V20H7v-1.732c-1.793.345-3 .992-3 1.732 0 1.105 2.686 2 6 2Z"
      fill="#555770"
    />
    <path
      d="M10 20V8.5M15 6l-5-2.5V6m5 0-5 2.5M15 6h-5m0 2.5V6"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGolfFlag;
