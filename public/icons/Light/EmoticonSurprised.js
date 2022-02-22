import * as React from "react";

const SvgEmoticonSurprised = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={1.2} />
    <path
      d="M15 16H9M10.9 10a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm6 0a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonSurprised;
