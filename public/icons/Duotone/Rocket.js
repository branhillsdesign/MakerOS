import * as React from "react";

const SvgRocket = ({ title, titleId, ...props }) => (
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
      d="M13.195 10.805a1.741 1.741 0 1 1 2.462-2.462m0 7.386c.718 1.334 1.108 4.555-3.077 6.771l-2.182-2.182 1.846-1.847M8.5 16.731l-2.502 2.502-.616-.616-.615-.615L7.269 15.5M8.27 8.343a20.091 20.091 0 0 0-2.742 3.413l-1.847 1.846L1.5 11.42c2.216-4.185 5.437-3.795 6.77-3.077Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M13.195 10.805a1.741 1.741 0 1 0 2.462-2.462m-.721-4.415A19.958 19.958 0 0 0 8.27 8.343a20.096 20.096 0 0 0-2.742 3.413l1.74 3.744L8.5 16.731l3.744 1.74a20.092 20.092 0 0 0 3.414-2.742 19.958 19.958 0 0 0 4.414-6.665m-5.136-5.136A20.039 20.039 0 0 1 21.5 2.5a20.037 20.037 0 0 1-1.428 6.564m-5.136-5.136 5.136 5.136"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRocket;
