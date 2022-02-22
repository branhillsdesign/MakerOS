import * as React from "react";

const SvgEmoticonKiss = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={1.2} />
    <path
      d="m14.5 14.031-5 3.438m0-3.438 5 3.438M12 13v5.5M9 11.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm7.4-1.326h-2.8v-.068H16.4v.068Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonKiss;
