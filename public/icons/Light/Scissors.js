import * as React from "react";

const SvgScissors = ({ title, titleId, ...props }) => (
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
      d="M9.4 6.5a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0Zm0 11a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.742 11.59 8.575 7.424l.848-.848 4.342 4.341.175.176v1.814l-.175.176-4.342 4.341-.848-.848 4.165-4.166v-.82Z"
      fill="#555770"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.849 11.152 23 6V4h-3l-7 7v2l7 7h3v-2l-5.151-5.152L17 12l.849-.848Zm3.951 7.345-5.649-5.649-.848-.848.848-.848 5.649-5.65V5.2h-1.303L14.2 11.497v1.006l6.297 6.297H21.8v-.303Z"
      fill="#555770"
    />
  </svg>
);

export default SvgScissors;
