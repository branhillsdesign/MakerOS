import * as React from "react";

const SvgLightbulb = ({ title, titleId, ...props }) => (
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
      d="M10.268 20a2 2 0 0 0 3.464 0m-3.464 0H9v-4.803h6V20h-1.268m-3.464 0h3.464"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 4a6 6 0 0 0-3 11.197h6A6 6 0 0 0 12 4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M9 17.5h6" stroke="#555770" />
    <path d="M12 15v-4m0 0-2-2m2 2 2-2" stroke="currentColor" />
  </svg>
);

export default SvgLightbulb;
