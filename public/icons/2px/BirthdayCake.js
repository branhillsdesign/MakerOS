import * as React from "react";

const SvgBirthdayCake = ({ title, titleId, ...props }) => (
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
      d="M21 22v1h1v-1h-1ZM3 22H2v1h1v-1Zm13.5-7.818.9-.437-.9-1.851-.9 1.851.9.437Zm-9 0 .9-.437-.9-1.851-.9 1.851.9.437ZM20 12v10h2V12h-2Zm1 9H3v2h18v-2ZM4 22V12H2v10h2Zm14-12a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2ZM6 8a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V8Zm15 8a4 4 0 0 1-3.6-2.255l-1.8.874A6 6 0 0 0 21 18v-2Zm-5.4-2.255A4 4 0 0 1 12 16v2a6 6 0 0 0 5.4-3.381l-1.8-.874Zm-9 0A4 4 0 0 1 3 16v2a6 6 0 0 0 5.4-3.381l-1.8-.874ZM12 16a4 4 0 0 1-3.6-2.255l-1.8.874A6 6 0 0 0 12 18v-2Zm-6-6h6V8H6v2Zm6 0h6V8h-6v2Zm1-1V6h-2v3h2ZM13.75 3.342C13.75 4.258 12.966 5 12 5s-1.75-.742-1.75-1.658C10.25 2.426 12 .5 12 .5s1.75 1.926 1.75 2.842Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBirthdayCake;
