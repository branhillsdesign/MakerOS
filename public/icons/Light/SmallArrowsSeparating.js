import * as React from "react";

const SvgSmallArrowsSeparating = ({ title, titleId, ...props }) => (
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
      d="m12 4 .424-.424L12 3.15l-.424.425L12 4Zm0 16-.424.424.424.425.424-.425L12 20ZM8.424 8.424l4-4-.848-.848-4 4 .848.848Zm3.152-4 4 4 .848-.848-4-4-.848.848Zm-4 12 4 4 .848-.848-4-4-.848.848Zm4.848 4 4-4-.848-.848-4 4 .848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSmallArrowsSeparating;
