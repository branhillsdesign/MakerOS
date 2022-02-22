import * as React from "react";

const SvgWrapTextDown = ({ title, titleId, ...props }) => (
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
      d="M15 21v-6l-3 3 3 3ZM20 6.4H4v1.2h16V6.4Zm-2.75 5.5H4v1.2h13.25v-1.2ZM10 17.4H4.5v1.2H10v-1.2Zm7.25 0H15v1.2h2.25v-1.2Zm2.15-2.15a2.15 2.15 0 0 1-2.15 2.15v1.2c1.85 0 3.35-1.5 3.35-3.35h-1.2Zm-2.15-2.15a2.15 2.15 0 0 1 2.15 2.15h1.2c0-1.85-1.5-3.35-3.35-3.35v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWrapTextDown;
