import * as React from "react";

const SvgMessageWarning = ({ title, titleId, ...props }) => (
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
      d="m6.75 17-.625-.78L6.4 16h.351v1Zm-3.588 2.87.625.78-.625-.78ZM4 3h16v2H4V3Zm18 2v11h-2V5h2ZM2 16V5h2v11H2Zm0 3.792V16h2v3.792H2Zm5.375-2.011-3.588 2.87-1.25-1.562 3.588-2.87 1.25 1.562ZM6.75 16H20v2H6.75v-2ZM4 19.792a.9.9 0 0 0-1.462-.703l1.25 1.562A1.1 1.1 0 0 1 2 19.79h2ZM20 3a2 2 0 0 1 2 2h-2V3ZM4 5H2a2 2 0 0 1 2-2v2Zm18 11a2 2 0 0 1-2 2v-2h2Z"
      fill="#555770"
    />
    <path d="M12 7v4m0 3v-1.5" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgMessageWarning;
