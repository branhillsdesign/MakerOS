import * as React from "react";

const SvgShieldwithX5 = ({ title, titleId, ...props }) => (
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
      d="M5 3h14v12.524l-7 5.688-7-5.688V3Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m9 14 6-6M9 8l6 6" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgShieldwithX5;
