import * as React from "react";

const SvgSwapCallsArrows = ({ title, titleId, ...props }) => (
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
      d="m7.5 16 .424.424L8.95 15.4H7.5v.6ZM6 17.5l-.424.424.424.425.424-.425L6 17.5ZM4.5 16v-.6H3.051l1.025 1.024L4.5 16ZM18 5.5l.424-.424L18 4.65l-.424.425L18 5.5ZM16.5 7l-.424-.424L15.052 7.6H16.5V7Zm3 0v.6h1.448l-1.024-1.024L19.5 7ZM7.076 15.576l-1.5 1.5.848.848 1.5-1.5-.848-.848Zm-.652 1.5-1.5-1.5-.848.848 1.5 1.5.848-.848ZM4.5 16.6H6v-1.2H4.5v1.2Zm1.5 0h1.5v-1.2H6v1.2Zm.6-.6V8H5.4v8h1.2Zm4.8-8v7h1.2V8h-1.2Zm6.176-2.924-1.5 1.5.848.848 1.5-1.5-.848-.848Zm2.348 1.5-1.5-1.5-.848.848 1.5 1.5.848-.848ZM16.5 7.6H18V6.4h-1.5v1.2Zm1.5 0h1.5V6.4H18v1.2Zm-.6-.6v8h1.2V7h-1.2ZM15 18.6a3.6 3.6 0 0 0 3.6-3.6h-1.2a2.4 2.4 0 0 1-2.4 2.4v1.2ZM11.4 15a3.6 3.6 0 0 0 3.6 3.6v-1.2a2.4 2.4 0 0 1-2.4-2.4h-1.2ZM9 5.6A2.4 2.4 0 0 1 11.4 8h1.2A3.6 3.6 0 0 0 9 4.4v1.2ZM6.6 8A2.4 2.4 0 0 1 9 5.6V4.4A3.6 3.6 0 0 0 5.4 8h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwapCallsArrows;
