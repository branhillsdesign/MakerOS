import * as React from "react";

const SvgTicket = ({ title, titleId, ...props }) => (
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
      d="M20 5H4a1 1 0 0 0-1 1v4a2 2 0 1 1 0 4v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a2 2 0 1 1 0-4V6a1 1 0 0 0-1-1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m13.166 11.524.234.021-.176.155a1.3 1.3 0 0 0-.41 1.262l.975-.22-.975.22.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.234-.021a1.3 1.3 0 0 0 1.073-.78l-.918-.396.918.395.093-.215.093.215a1.3 1.3 0 0 0 1.073.78Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTicket;
