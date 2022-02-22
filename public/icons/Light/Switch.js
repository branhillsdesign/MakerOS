import * as React from "react";

const SvgSwitch = ({ title, titleId, ...props }) => (
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
      d="M10.6 3.6h2.8v4.651l-1.4 1.4-1.4-1.4V3.6Zm0 16.8v-4.651l1.324-1.325.076-.075.076.075L13.4 15.75V20.4h-2.8Zm9.8-7h-4.651l-1.325-1.324L14.35 12l.075-.076L15.75 10.6H20.4v2.8Zm-16.8 0v-2.8h4.651l1.325 1.324.075.076-.075.076L8.25 13.4H3.6Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSwitch;
