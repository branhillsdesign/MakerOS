import * as React from "react";

const SvgCalculator = ({ title, titleId, ...props }) => (
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
      d="m19.576 13.576-3 3 .848.848 3-3-.848-.848Zm-3 3-3 3 .848.848 3-3-.848-.848Zm-3-2.152 3 3 .848-.848-3-3-.848.848Zm3 3 3 3 .848-.848-3-3-.848.848Z"
      fill="#555770"
    />
    <path d="M3 17h8M13 7h8M7 3v8M3 7h8" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgCalculator;
