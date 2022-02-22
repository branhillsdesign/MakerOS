import * as React from "react";

const SvgBank = ({ title, titleId, ...props }) => (
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
    <path d="M5.5 12v6m13-6v6M12 12v6" stroke="currentColor" strokeWidth={2} />
    <path d="M2 21h20M12 3 3 8v1h18V8l-9-5Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgBank;
