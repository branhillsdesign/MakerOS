import * as React from "react";

const SvgIridescentWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="M12 1v3M6 6 4 4m14 2 2-2M6 18l-2 2m8 0v3m6-5 2 2M6 10v4h12v-4H6Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgIridescentWhiteBalance;
