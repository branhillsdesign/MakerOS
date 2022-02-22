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
      d="M15 21v-6l-3 3 3 3ZM20 6H4v2h16V6Zm-2.75 5.5H4v2h13.25v-2ZM10 17H4.5v2H10v-2Zm7.25 0H15v2h2.25v-2ZM19 15.25A1.75 1.75 0 0 1 17.25 17v2A3.75 3.75 0 0 0 21 15.25h-2Zm-1.75-1.75c.966 0 1.75.784 1.75 1.75h2a3.75 3.75 0 0 0-3.75-3.75v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWrapTextDown;
