import * as React from "react";

const SvgCalendarX = ({ title, titleId, ...props }) => (
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
      d="M21 8.95V5a1 1 0 0 0-1-1h-3m4 4.95H3m18 0V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.95m0 0V5a1 1 0 0 1 1-1h3m0 0V1m0 3h10m0 0V1m-5 14-3.5-3.5M12 15l3.5-3.5M12 15l3.5 3.5M12 15l-3.5 3.5"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgCalendarX;
