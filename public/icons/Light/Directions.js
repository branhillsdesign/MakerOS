import * as React from "react";

const SvgDirections = ({ title, titleId, ...props }) => (
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
      d="M8 2v-.6h-.6V2H8Zm0 5h-.6v.6H8V7Zm10 0v.6h.248l.176-.176L18 7Zm2.5-2.5.424.424.425-.424-.425-.424-.424.424ZM18 2l.424-.424-.175-.176H18V2Zm-2 8h.6v-.6H16v.6Zm0 5v.6h.6V15H16ZM6 15l-.424.424.175.176H6V15Zm-2.5-2.5-.424-.424-.425.424.425.424.424-.424ZM6 10v-.6h-.249l-.175.176L6 10Zm1.4-8v5h1.2V2H7.4Zm11.024 5.424 2.5-2.5-.848-.848-2.5 2.5.848.848Zm2.5-3.348-2.5-2.5-.848.848 2.5 2.5.848-.848ZM18 1.4H8v1.2h10V1.4ZM15.4 10v5h1.2v-5h-1.2Zm-8.976 4.576-2.5-2.5-.848.848 2.5 2.5.848-.848Zm-2.5-1.652 2.5-2.5-.848-.848-2.5 2.5.848.848ZM8 7.6h4V6.4H8v1.2Zm4 0h6V6.4h-6v1.2Zm-6 3h6V9.4H6v1.2Zm6 0h4V9.4h-4v1.2ZM11.4 7v3h1.2V7h-1.2Zm4.6 7.4h-4v1.2h4v-1.2Zm-4 0H6v1.2h6v-1.2Zm-.6.6v9h1.2v-9h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDirections;
