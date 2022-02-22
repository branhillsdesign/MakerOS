import * as React from "react";

const SvgWrapTextUp = ({ title, titleId, ...props }) => (
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
      d="M15 4v6l-3-3 3-3ZM20 19H4v-2h16v2Zm-2.75-5.5H4v-2h13.25v2ZM10 8H4.5V6H10v2Zm7.25 0H15V6h2.25v2ZM19 9.75A1.75 1.75 0 0 0 17.25 8V6A3.75 3.75 0 0 1 21 9.75h-2Zm-1.75 1.75A1.75 1.75 0 0 0 19 9.75h2a3.75 3.75 0 0 1-3.75 3.75v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWrapTextUp;
