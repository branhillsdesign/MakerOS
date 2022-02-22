import * as React from "react";

const SvgGlove = ({ title, titleId, ...props }) => (
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
      d="m4.141 12.37 3.56 4.27a1 1 0 0 0 .767.36h8.373a1 1 0 0 0 .919-.606l1.194-2.787a10 10 0 0 0 .226-7.303l-.559-1.565a3 3 0 0 0-2.453-1.968l-3.617-.452A3 3 0 0 0 9.293 4.47L8.272 8.048a.948.948 0 0 1-1.211.639l-.331-.11a2.387 2.387 0 0 0-2.589 3.792Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 18a1 1 0 0 1 1-1h10.5a.5.5 0 0 1 .5.5V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGlove;
