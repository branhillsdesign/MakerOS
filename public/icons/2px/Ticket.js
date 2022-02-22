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
      d="M3 14v-1H2v1h1Zm0-4H2v1h1v-1Zm18 4h1v-1h-1v1Zm0-4v1h1v-1h-1ZM4 6h16V4H4v2Zm16 12H4v2h16v-2ZM4 12a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H4Zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm18 2a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2ZM2 14v4h2v-4H2Zm2-4V6H2v4h2Zm16-4v4h2V6h-2Zm0 8v4h2v-4h-2ZM4 18H2a2 2 0 0 0 2 2v-2Zm16 2a2 2 0 0 0 2-2h-2v2Zm0-14h2a2 2 0 0 0-2-2v2ZM4 4a2 2 0 0 0-2 2h2V4Z"
      fill="#555770"
    />
    <path
      d="m11.907 10.743.093-.215.093.215a1.3 1.3 0 0 0 1.073.78l.234.022-.176.155a1.3 1.3 0 0 0-.41 1.262l.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.234-.021a1.3 1.3 0 0 0 1.073-.78Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgTicket;
