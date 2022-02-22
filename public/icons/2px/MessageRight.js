import * as React from "react";

const SvgMessageRight = ({ title, titleId, ...props }) => (
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
      d="m17.25 17 .625-.78L17.6 16h-.351v1Zm3.587 2.87-.624.78.624-.78ZM20 3H4v2h16V3ZM2 5v11h2V5H2Zm20 11V5h-2v11h2Zm0 3.792V16h-2v3.792h2Zm-5.375-2.011 3.588 2.87 1.25-1.562-3.588-2.87-1.25 1.562ZM17.25 16H4v2h13.25v-2ZM20 19.792a.9.9 0 0 1 1.462-.703l-1.25 1.562A1.1 1.1 0 0 0 22 19.79h-2ZM4 3a2 2 0 0 0-2 2h2V3Zm16 2h2a2 2 0 0 0-2-2v2ZM2 16a2 2 0 0 0 2 2v-2H2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMessageRight;
