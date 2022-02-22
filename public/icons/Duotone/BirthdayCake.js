import * as React from "react";

const SvgBirthdayCake = ({ title, titleId, ...props }) => (
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
      d="M21 17a5 5 0 0 1-4.5-2.818 5 5 0 0 1-9 0A5 5 0 0 1 3 17"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 9H6a3 3 0 0 0-3 3v10h18V12a3 3 0 0 0-3-3h-6Zm0 0V6"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13.75 3.342C13.75 4.258 12.966 5 12 5s-1.75-.742-1.75-1.658C10.25 2.426 12 .5 12 .5s1.75 1.926 1.75 2.842Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgBirthdayCake;
