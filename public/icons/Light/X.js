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
      d="m17.233 5.919-5.657 5.657.848.848 5.657-5.657-.848-.848Zm-5.657 5.657-5.657 5.657.848.848 5.657-5.657-.848-.848Zm6.505 5.657-5.657-5.657-.848.848 5.657 5.657.848-.848Zm-5.657-5.657L6.767 5.919l-.848.848 5.657 5.657.848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgX;
