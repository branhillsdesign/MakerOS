import * as React from "react";

const SvgFlag6 = ({ title, titleId, ...props }) => (
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
      d="M4 5V4H3v1h1Zm11 5-.707-.707-.707.707.707.707L15 10ZM4 15H3v1h1v-1Zm15.83-9.83.706.708-.707-.707ZM4 6h15.759V4H4v2Zm15.122-1.536-4.83 4.829 1.415 1.414 4.83-4.83-1.415-1.413Zm-4.83 6.243 4.83 4.83 1.414-1.415-4.829-4.83-1.414 1.415ZM5 15V5H3v10h2Zm14.759-1H4v2h15.759v-2Zm-.637 1.536c-.567-.567-.165-1.536.637-1.536v2c.98 0 1.47-1.185.777-1.878l-1.414 1.414ZM19.76 6c-.802 0-1.204-.97-.637-1.536l1.414 1.414C21.23 5.185 20.74 4 19.76 4v2Z"
      fill="currentColor"
    />
    <path d="M5 5V2.5H3V5h2Zm0 18v-8H3v8h2Zm0-8V5H3v10h2Z" fill="#555770" />
  </svg>
);

export default SvgFlag6;
