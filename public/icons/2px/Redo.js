import * as React from "react";

const SvgRedo = ({ title, titleId, ...props }) => (
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
      d="M3 15c.896-4.008 4.425-7 8.642-7 3.859 0 7.141 2.504 8.358 6"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M15 15h7V8l-7 7Z" fill="#555770" />
  </svg>
);

export default SvgRedo;
