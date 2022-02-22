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
      d="M15 4v6l-3-3 3-3ZM20 18.6H4v-1.2h16v1.2Zm-2.75-5.5H4v-1.2h13.25v1.2ZM10 7.6H4.5V6.4H10v1.2Zm7.25 0H15V6.4h2.25v1.2Zm2.15 2.15a2.15 2.15 0 0 0-2.15-2.15V6.4c1.85 0 3.35 1.5 3.35 3.35h-1.2Zm-2.15 2.15a2.15 2.15 0 0 0 2.15-2.15h1.2c0 1.85-1.5 3.35-3.35 3.35v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWrapTextUp;
