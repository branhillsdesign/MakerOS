import * as React from "react";

const SvgSettings = ({ title, titleId, ...props }) => (
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
      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m10.444 3-.465 2.849A6.5 6.5 0 0 0 7.67 7.174L4.984 6.152 3.428 8.848l2.212 1.81a6.468 6.468 0 0 0 0 2.685l-2.212 1.809 1.556 2.696 2.69-1.018A6.502 6.502 0 0 0 9.98 18.15L10.444 21h3.113l.465-2.849a6.5 6.5 0 0 0 2.307-1.325l2.687 1.022 1.557-2.696-2.213-1.81a6.473 6.473 0 0 0 0-2.685l2.213-1.809-1.557-2.696-2.69 1.018a6.5 6.5 0 0 0-2.304-1.321L13.557 3h-3.113Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgSettings;
