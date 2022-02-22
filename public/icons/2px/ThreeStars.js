import * as React from "react";

const SvgThreeStars = ({ title, titleId, ...props }) => (
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
      d="m19.907 10.743.093-.215.093.215a1.3 1.3 0 0 0 1.073.78l.234.022-.176.155a1.3 1.3 0 0 0-.41 1.262l.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.233-.021a1.3 1.3 0 0 0 1.074-.78ZM11.907 10.743l.093-.215.093.215a1.3 1.3 0 0 0 1.073.78l.234.022-.176.155a1.3 1.3 0 0 0-.41 1.262l.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.234-.021a1.3 1.3 0 0 0 1.073-.78ZM3.907 10.743 4 10.528l.093.215a1.3 1.3 0 0 0 1.074.78l.233.022-.176.155a1.3 1.3 0 0 0-.41 1.262l.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.233-.021a1.3 1.3 0 0 0 1.074-.78Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgThreeStars;
