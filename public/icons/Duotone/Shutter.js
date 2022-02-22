import * as React from "react";

const SvgShutter = ({ title, titleId, ...props }) => (
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
      d="m14.31 12-1.155 2m1.155-2-1.155-2m1.155 2-5.488 9.484M13.155 14h-2.31m2.31 0-2.31-4m0 4L9.69 12m1.155 2H2.2m8.645 0L5.336 4.544M9.69 12l1.155-2M9.69 12l5.462-9.493M10.845 10h2.31m0 0H21.8m-8.645 0 5.485 9.477"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 22a9.963 9.963 0 0 0 6.64-2.523A9.976 9.976 0 0 0 22 12c0-.685-.069-1.354-.2-2a10.017 10.017 0 0 0-6.649-7.493A9.99 9.99 0 0 0 12 2c-2.56 0-4.895.962-6.664 2.544A9.975 9.975 0 0 0 2 12c0 .685.069 1.354.2 2a10.017 10.017 0 0 0 6.622 7.484A9.988 9.988 0 0 0 12 22Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShutter;
