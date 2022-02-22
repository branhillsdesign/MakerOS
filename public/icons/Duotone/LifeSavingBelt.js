import * as React from "react";

const SvgLifeSavingBelt = ({ title, titleId, ...props }) => (
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
      d="M8 2.832A10.037 10.037 0 0 0 2.832 8l4.584 2A5.018 5.018 0 0 1 10 7.416L8 2.832ZM16 21.168A10.037 10.037 0 0 0 21.168 16l-4.584-2A5.019 5.019 0 0 1 14 16.584l2 4.584ZM21.168 8A10.037 10.037 0 0 0 16 2.832l-2 4.584A5.018 5.018 0 0 1 16.584 10l4.584-2ZM2.832 16A10.037 10.037 0 0 0 8 21.168l2-4.584A5.019 5.019 0 0 1 7.416 14l-4.584 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 2a9.966 9.966 0 0 0-4 .832A10.037 10.037 0 0 0 2.832 8 9.966 9.966 0 0 0 2 12c0 1.422.297 2.775.832 4A10.037 10.037 0 0 0 8 21.168 9.966 9.966 0 0 0 12 22a9.966 9.966 0 0 0 4-.832A10.036 10.036 0 0 0 21.168 16 9.966 9.966 0 0 0 22 12a9.966 9.966 0 0 0-.832-4A10.037 10.037 0 0 0 16 2.832 9.966 9.966 0 0 0 12 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLifeSavingBelt;
