import * as React from "react";

const SvgCup = ({ title, titleId, ...props }) => (
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
      d="M6.5 11A2.5 2.5 0 0 1 4 8.5H2A4.5 4.5 0 0 0 6.5 13v-2ZM4 8.5A2.5 2.5 0 0 1 6.5 6V4A4.5 4.5 0 0 0 2 8.5h2Zm16 0a2.5 2.5 0 0 1-2.5 2.5v2A4.5 4.5 0 0 0 22 8.5h-2ZM17.5 6A2.5 2.5 0 0 1 20 8.5h2A4.5 4.5 0 0 0 17.5 4v2ZM16 5h2V3h-2v2Zm1.5 6H16v2h1.5v-2ZM6 5h2V3H6v2Zm2 0h8V3H8v2Zm0 6H6.5v2H8v-2ZM7 4v1h2V4H7Zm0 1v7h2V5H7Zm-.5 1H8V4H6.5v2ZM15 4v1h2V4h-2Zm0 1v7h2V5h-2Zm2.5-1H16v2h1.5V4ZM7.095 12.426c.976 2.073 2.951 3.112 4.905 3.112v-2c-1.25 0-2.478-.653-3.095-1.964l-1.81.852ZM12 15.538c1.954 0 3.929-1.039 4.905-3.112l-1.81-.852c-.617 1.311-1.845 1.964-3.095 1.964v2ZM7 21h5v-2H7v2Zm5 0h5v-2h-5v2Zm-1-6.462V20h2v-5.462h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCup;
