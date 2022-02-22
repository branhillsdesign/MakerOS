import * as React from "react";

const SvgTravelSuitcase = ({ title, titleId, ...props }) => (
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
      d="M14.5 10.5h.6v-.6h-.6v.6Zm-2 0v-.6h-.248l-.176.176.424.424ZM10 13l-.424-.424L9.15 13l.425.424L10 13Zm2 2-.424.424.424.425.424-.425L12 15Zm2.5-2.5.424.424.176-.175V12.5h-.6Zm5.9-2.5v8h1.2v-8h-1.2ZM3.6 18v-8H2.4v8h1.2ZM17 8.6h2V7.4h-2v1.2Zm2 10.8h-2v1.2h2v-1.2ZM16.4 8v12h1.2V8h-1.2ZM5 8.6h2V7.4H5v1.2Zm12 10.8H7v1.2h10v-1.2Zm-10 0H5v1.2h2v-1.2ZM6.4 8v12h1.2V8H6.4Zm.6.6h2V7.4H7v1.2ZM9.6 8V7H8.4v1h1.2ZM11 5.6h2V4.4h-2v1.2Zm-2 3h6V7.4H9v1.2Zm6 0h2V7.4h-2v1.2ZM14.4 7v1h1.2V7h-1.2Zm.1 2.9h-2v1.2h2V9.9Zm-2.424.176-2.5 2.5.848.848 2.5-2.5-.848-.848Zm-2.5 3.348 2 2 .848-.848-2-2-.848.848Zm2.848 2 2.5-2.5-.848-.848-2.5 2.5.848.848ZM15.1 12.5v-2h-1.2v2h1.2ZM13 5.6A1.4 1.4 0 0 1 14.4 7h1.2A2.6 2.6 0 0 0 13 4.4v1.2ZM9.6 7A1.4 1.4 0 0 1 11 5.6V4.4A2.6 2.6 0 0 0 8.4 7h1.2ZM2.4 18A2.6 2.6 0 0 0 5 20.6v-1.2A1.4 1.4 0 0 1 3.6 18H2.4Zm18 0a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2Zm1.2-8A2.6 2.6 0 0 0 19 7.4v1.2a1.4 1.4 0 0 1 1.4 1.4h1.2Zm-18 0A1.4 1.4 0 0 1 5 8.6V7.4A2.6 2.6 0 0 0 2.4 10h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTravelSuitcase;
