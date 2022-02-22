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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="M15 16H9M9.732 10a1 1 0 0 1-1.278.96l1.24-1.239c.025.089.038.182.038.279Zm5.536 1a1 1 0 0 1-.961-1.279l1.24 1.24c-.09.025-.183.039-.28.039Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonDissapointed;
