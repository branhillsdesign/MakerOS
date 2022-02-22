import * as React from "react";

const SvgCompass = ({ title, titleId, ...props }) => (
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
      d="M22.4 12c0 2.872-1.163 5.471-3.046 7.354A10.366 10.366 0 0 1 12 22.4C6.256 22.4 1.6 17.744 1.6 12c0-2.872 1.163-5.471 3.046-7.354A10.366 10.366 0 0 1 12 1.6c5.744 0 10.4 4.656 10.4 10.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.897 7.338c.482-.804-.431-1.717-1.235-1.235l-6.406 3.844a.9.9 0 0 0-.31.309l-3.843 6.406c-.482.804.431 1.717 1.235 1.235l6.406-3.844a.9.9 0 0 0 .31-.309l3.843-6.406Zm-6.96 3.6 5.314-3.189-3.188 5.314-5.314 3.188 3.188-5.314Zm1.77 1.77a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.413Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCompass;
