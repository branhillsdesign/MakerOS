import * as React from "react";

const SvgAtmDollar = ({ title, titleId, ...props }) => (
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
      d="M4 6h16V4H4v2Zm16 0v12h2V6h-2Zm.006 12H3.997v2H20.006v-2ZM4 18V6H2v12h2Zm7-11v2h2V7h-2Zm2 10v-2h-2v2h2Zm-4-1h4.9v-2H9v2Zm6-1.1v-2.8h-2v2.8h2ZM13.9 11h-3.8v2h3.8v-2Zm-2.9.9V9.1H9v2.8h2Zm-.9-1.9H15V8h-4.9v2Zm4.9 2.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM13.9 16a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2Zm-9.903 2c-.002 0-.002 0 0 0h.001l.002.002V18H2c0 1.1.888 2 1.997 2v-2ZM20 18v.003l.003-.002h.003c.002-.001.002-.001 0-.001v2A1.995 1.995 0 0 0 22 18h-2Zm-9-8.9a.9.9 0 0 1-.9.9V8A1.1 1.1 0 0 0 9 9.1h2ZM20 6h2a2 2 0 0 0-2-2v2Zm-9.9 5a.9.9 0 0 1 .9.9H9a1.1 1.1 0 0 0 1.1 1.1v-2ZM4 4a2 2 0 0 0-2 2h2V4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAtmDollar;
