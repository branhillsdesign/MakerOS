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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={1.2} />
    <path
      d="M7.697 16.5c1.057-1.227 2.593-2 4.303-2s3.245.773 4.302 2M9 11.4a1.4 1.4 0 0 1-1.046-2.33l1.976 1.976c-.247.22-.573.354-.93.354Zm7.4-1.4a1.4 1.4 0 0 1-2.33 1.046l1.976-1.976c.22.247.354.573.354.93Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonAngry;
