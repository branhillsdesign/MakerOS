import * as React from "react";

const SvgEmoticonDissapointed = ({ title, titleId, ...props }) => (
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
      d="M15 16H9M10.132 10a1.4 1.4 0 0 1-2.33 1.046L9.78 9.07c.22.247.353.573.353.93Zm5.136 1.4a1.4 1.4 0 0 1-1.047-2.33l1.977 1.976c-.248.22-.574.354-.93.354Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonDissapointed;
