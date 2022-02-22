import * as React from "react";

const SvgArrowinBoxRight = ({ title, titleId, ...props }) => (
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
      d="M3 12v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8Zm0 0h12m0 0-5-5m5 5-5 5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgArrowinBoxRight;
