import * as React from "react";

const SvgTwoMessages = ({ title, titleId, ...props }) => (
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
      d="m19.25 19 .625-.78L19.6 18h-.351v1Zm3.587 2.87-.624.78.624-.78ZM24 18V7h-2v11h2Zm0 3.792V18h-2v3.792h2Zm-5.375-2.011 3.588 2.87 1.25-1.562-3.588-2.87-1.25 1.562ZM19.25 18H6v2h13.25v-2ZM22 5h-2v2h2V5ZM4 16v2h2v-2H4Zm18 5.792a.9.9 0 0 1 1.462-.703l-1.25 1.562A1.1 1.1 0 0 0 24 21.79h-2ZM24 7a2 2 0 0 0-2-2v2h2ZM6 18H4a2 2 0 0 0 2 2v-2Z"
      fill="#555770"
    />
    <path
      d="m4.75 15-.625-.78L4.4 14h.351v1Zm-3.588 2.87.625.78-.625-.78ZM2 1h16v2H2V1Zm18 2v11h-2V3h2ZM0 14V3h2v11H0Zm0 3.792V14h2v3.792H0Zm5.375-2.011-3.588 2.87-1.25-1.562 3.588-2.87 1.25 1.562ZM4.75 14H18v2H4.75v-2ZM2 17.792a.9.9 0 0 0-1.462-.703l1.25 1.562A1.1 1.1 0 0 1 0 17.79h2ZM18 1a2 2 0 0 1 2 2h-2V1ZM2 3H0a2 2 0 0 1 2-2v2Zm18 11a2 2 0 0 1-2 2v-2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTwoMessages;
