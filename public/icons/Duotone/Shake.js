import * as React from "react";

const SvgShake = ({ title, titleId, ...props }) => (
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
      d="M12 0v14m5.616 0H12m-5.615 0H12"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 9a6 6 0 1 1 12 0M6 9h12M6 9a.5.5 0 0 0 0 1h.077M6 9l.077 1M18 9a.5.5 0 0 1 0 1h-.077M18 9l-.077 1M6.077 10h11.846M6.077 10l.308 4 .544 7.077a1 1 0 0 0 .997.923h8.148a1 1 0 0 0 .997-.923L17.615 14l.308-4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShake;
