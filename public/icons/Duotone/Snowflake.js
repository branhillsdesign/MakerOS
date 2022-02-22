import * as React from "react";

const SvgSnowflake = ({ title, titleId, ...props }) => (
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
      d="M2 12h6.5M22 12h-6.75M8.5 12l-5-5m5 5-5 5m5-5h6.75m0 0 5-5m-5 5 5 5"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 2v6.5M12 22v-6.75m0-6.75-5-5m5 5 5-5m-5 5v6.75m0 0-5 5m5-5 5 5"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSnowflake;
