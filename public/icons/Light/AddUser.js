import * as React from "react";

const SvgAddUser = ({ title, titleId, ...props }) => (
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
      d="m3 22-.575-.17A.6.6 0 0 0 3 22.6V22Zm18 0v.6a.6.6 0 0 0 .575-.77L21 22Zm-9-10.6A4.4 4.4 0 0 1 7.6 7H6.4a5.6 5.6 0 0 0 5.6 5.6v-1.2ZM7.6 7A4.4 4.4 0 0 1 12 2.6V1.4A5.6 5.6 0 0 0 6.4 7h1.2ZM3.575 22.17C4.71 18.341 8.07 15.6 12 15.6v-1.2c-4.516 0-8.306 3.145-9.575 7.43l1.15.34ZM12 15.6c3.93 0 7.29 2.741 8.425 6.57l1.15-.34c-1.27-4.285-5.059-7.43-9.575-7.43v1.2Zm-9 7h18v-1.2H3v1.2Zm9-20c.802 0 1.553.214 2.2.588l.6-1.038A5.577 5.577 0 0 0 12 1.4v1.2Z"
      fill="#555770"
    />
    <path d="M24 8H14m5-5v10" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgAddUser;
