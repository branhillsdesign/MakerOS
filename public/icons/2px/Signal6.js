import * as React from "react";

const SvgSignal6 = ({ title, titleId, ...props }) => (
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
    <path d="M21 19H4.72L21 5.162V19Z" stroke="#555770" strokeWidth={2} />
    <path d="M2 20 22 3v17H2Z" fill="#555770" />
  </svg>
);

export default SvgSignal6;
