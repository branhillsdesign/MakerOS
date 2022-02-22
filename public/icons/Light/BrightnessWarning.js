import * as React from "react";

const SvgBrightnessWarning = ({ title, titleId, ...props }) => (
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
      d="M8.778 4.822h.249l.175-.176L12 1.85l2.798 2.797.175.176h4.205v4.205l.176.175L22.15 12l-2.797 2.798-.176.175v4.205h-4.205l-.176.176L12 22.15l-2.798-2.797-.175-.176H4.822v-4.205l-.176-.175L1.85 12l2.797-2.798.176-.175V4.822h3.956ZM12 6.5V14m0 3.5v-2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBrightnessWarning;
