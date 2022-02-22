import * as React from "react";

const SvgStopwatch = ({ title, titleId, ...props }) => (
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
      d="M12 4a9 9 0 1 0 6.844 3.156M12 4a8.98 8.98 0 0 1 6.844 3.156M12 4V3m0 4.5V14m9-9-2.156 2.156M12 3h-2m2 0h2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgStopwatch;
