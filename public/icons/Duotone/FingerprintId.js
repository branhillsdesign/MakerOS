import * as React from "react";

const SvgFingerprintId = ({ title, titleId, ...props }) => (
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
      d="M18.287 3.583C16.227 2.256 13.7 2 12.172 2s-4.055.256-6.115 1.583M16.25 22c-4.586 0-6.625-4.103-6.625-6.667s1.529-3.077 2.548-3.077c1.529 0 2.548 1.148 2.548 2.564 0 1.539 1.422 2.565 2.548 2.565 1.461 0 2.548-1.026 2.548-2.565 0-2.05-2.039-7.692-7.644-7.692-3.567 0-9.987 3.692-7.134 12.308"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M21 10.205c-1.694-3.59-5.056-5.64-8.828-5.64C8.4 4.564 4.53 7.127 3 10.204m9.172 4.615c0 2.052 1.02 5.129 6.625 5.129m-1.53-5.129c0-1.709-1.018-5.128-5.095-5.128-5.095 0-5.095 5.128-5.095 6.154 0 1.026.51 4.616 3.057 6.154"
      stroke="#555770"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgFingerprintId;
