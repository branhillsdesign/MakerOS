import * as React from "react";

const SvgSleepingBag = ({ title, titleId, ...props }) => (
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
      d="M6 11c.396-.396 1.364-1.003 3-1.573M17 8c-3.57.21-6.192.796-8 1.427m0 0V7a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1.287"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m6 11 1.146 8.405A3 3 0 0 0 10.12 22h2.762a3 3 0 0 0 2.973-2.595L17 11V8M6 11V5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v3M6 11c1.63 0 5.24.67 6.894 3.322.044.07.152.064.183-.014C14.07 11.82 15.44 8.39 17 8M6 11c.396-.396 1.364-1.003 3-1.573 1.808-.63 4.43-1.217 8-1.427"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSleepingBag;
