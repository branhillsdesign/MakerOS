import * as React from "react";

const SvgEmoticonAngry = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="M7.698 16.5c1.057-1.227 2.593-2 4.302-2 1.71 0 3.246.773 4.303 2M9 11a1 1 0 0 1-.96-1.279l1.239 1.24C9.19 10.986 9.097 11 9 11Zm7-1a1 1 0 0 1-1.279.96l1.24-1.239c.025.089.039.182.039.279Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonAngry;
