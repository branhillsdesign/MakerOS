import * as React from "react";

const SvgSteak = ({ title, titleId, ...props }) => (
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
      d="M16.5 8.1c0 .47-.504.85-1.125.85s-1.125-.38-1.125-.85.504-.85 1.125-.85 1.125.38 1.125.85Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 8.1C21 5.283 17.978 3 14.25 3c-2.724 0-5.071 1.22-6.138 2.975-1.392 2.292-.612 1.7-3.987 4.396C3.421 11.028 3 11.864 3 12.775M21 8.1c0 1.774-1.199 3.336-3.017 4.25-3.17 1.275-4.296 1.275-6.147 2.975-.883.81-2.274 1.275-3.774 1.275C5.268 16.6 3 14.887 3 12.775M21 8.1v3.4c0 1.774-1.199 3.336-3.017 4.25-3.17 1.275-4.296 1.275-6.147 2.975-.883.81-2.274 1.275-3.774 1.275C5.268 20 3 18.288 3 16.175v-3.4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSteak;
