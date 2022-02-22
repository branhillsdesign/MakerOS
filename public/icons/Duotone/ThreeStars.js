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
      d="m21.166 11.524.234.021-.176.155a1.3 1.3 0 0 0-.41 1.262l.975-.22-.975.22.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.233-.021a1.3 1.3 0 0 0 1.074-.78l-.918-.396.918.395.093-.215.093.215a1.3 1.3 0 0 0 1.073.78Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m13.166 11.524.234.021-.176.155a1.3 1.3 0 0 0-.41 1.262l.975-.22-.975.22.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.234-.021a1.3 1.3 0 0 0 1.073-.78l-.918-.396.918.395.093-.215.093.215a1.3 1.3 0 0 0 1.073.78Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m5.167 11.524.233.021-.176.155a1.3 1.3 0 0 0-.41 1.262l.975-.22-.975.22.051.229-.201-.12a1.3 1.3 0 0 0-1.328 0l-.201.12.051-.229a1.3 1.3 0 0 0-.41-1.262l-.176-.155.233-.021a1.3 1.3 0 0 0 1.074-.78l-.918-.396.918.395.093-.215.093.215a1.3 1.3 0 0 0 1.074.78Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgThreeStars;
