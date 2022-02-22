import * as React from "react";

const SvgSpa = ({ title, titleId, ...props }) => (
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
      d="M14.5 9c-.4-2.4-1.833-4.667-2.5-5.5-.667.833-2.1 3.1-2.5 5.5 1 .5 1.5 1 2.5 2 1-1 1.5-1.5 2.5-2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 17c2.8-4.8 7.167-6 9-6-.333 2.833-2.6 8.8-9 10-6.4-1.2-8.667-7.167-9-10 1.833 0 6.2 1.2 9 6Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSpa;
