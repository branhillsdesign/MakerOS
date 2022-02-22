import * as React from "react";

const SvgBallpen = ({ title, titleId, ...props }) => (
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
      d="m19 11 .707.707.707-.707-.707-.707L19 11Zm1.707-6.293a1 1 0 0 0-1.414-1.414l1.414 1.414Zm-15.414 11.5 2.5 2.5 1.414-1.414-2.5-2.5-1.414 1.414Zm8.75-8.75 4.25 4.25 1.414-1.414-4.25-4.25-1.414 1.414Zm4.25 2.836-4 4 1.414 1.414 4-4-1.414-1.414Zm1.164-4.336 1.25-1.25-1.414-1.414-1.25 1.25 1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="m4 17.5 2-2L16.793 4.707a1 1 0 0 1 1.414 0l.543.543.543.543a1 1 0 0 1 0 1.414L8.5 18l-2 2H4v-2.5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBallpen;
