import * as React from "react";

const SvgX = ({ title, titleId, ...props }) => (
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
      d="m16.95 5.636-5.657 5.657 1.414 1.414 5.657-5.657-1.414-1.414Zm-5.657 5.657L5.636 16.95l1.414 1.414 5.657-5.657-1.414-1.414Zm7.071 5.657-5.657-5.657-1.414 1.414 5.657 5.657 1.414-1.414Zm-5.657-5.657L7.05 5.636 5.636 7.05l5.657 5.657 1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgX;
