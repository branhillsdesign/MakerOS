import * as React from "react";

const SvgUserLocked = ({ title, titleId, ...props }) => (
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
      d="m3 22-.959-.284A1 1 0 0 0 3 23v-1Zm18 0v1a1 1 0 0 0 .959-1.284L21 22Zm-9-11a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6v-2ZM8 7a4 4 0 0 1 4-4V1a6 6 0 0 0-6 6h2ZM3.959 22.284C5.049 18.607 8.265 16 12 16v-2c-4.711 0-8.644 3.28-9.959 7.716l1.918.568ZM12 16c3.735 0 6.952 2.607 8.041 6.284l1.918-.568C20.645 17.279 16.71 14 12 14v2Zm-9 7h18v-2H3v2Zm9-20c.73 0 1.412.195 2 .535l1-1.732A5.977 5.977 0 0 0 12 1v2Z"
      fill="#555770"
    />
    <path
      d="M22.125 8V5.625a2.625 2.625 0 0 0-5.25 0V8m5.25 0h-5.25m5.25 0h.775a.1.1 0 0 1 .1.1V12a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V8.1a.1.1 0 0 1 .1-.1h.775"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgUserLocked;
