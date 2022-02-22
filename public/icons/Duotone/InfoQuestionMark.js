import * as React from "react";

const SvgInfoQuestionMark = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10} stroke="#555770" strokeWidth={2} />
    <path
      d="M8.688 9.799c0-1.914 1.585-3.3 3.347-3.3a3.26 3.26 0 0 1 3.274 3.3c0 1.473-1.218 1.945-2.337 3.183-.638.705-.937 1.807-.937 2.298m0 1.22v2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgInfoQuestionMark;
