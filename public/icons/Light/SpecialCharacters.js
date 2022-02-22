import * as React from "react";

const SvgSpecialCharacters = ({ title, titleId, ...props }) => (
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
      d="M6.5 6v-.6l-.424 1.024L6.5 6Zm6.5 6.5.424.424.425-.424-.425-.424L13 12.5ZM6.5 19l-.424-.424L6.5 19.6V19ZM18 5.4H6.5v1.2H18V5.4ZM6.076 6.424l6.5 6.5.848-.848-6.5-6.5-.848.848Zm6.5 5.652-6.5 6.5.848.848 6.5-6.5-.848-.848ZM6.5 19.6H18v-1.2H6.5v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSpecialCharacters;
