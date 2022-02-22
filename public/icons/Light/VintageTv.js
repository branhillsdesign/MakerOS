import * as React from "react";

const SvgVintageTv = ({ title, titleId, ...props }) => (
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
      d="M20.4 9v12h1.2V9h-1.2ZM20 21.4H4v1.2h16v-1.2ZM3.6 21V9H2.4v12h1.2Zm1.8-7v2h1.2v-2H5.4ZM9 19.6h4v-1.2H9v1.2Zm7.6-3.6v-2h-1.2v2h1.2ZM13 10.4H9v1.2h4v-1.2Zm5 1.2h1v-1.2h-1v1.2Zm-14-3h7V7.4H4v1.2Zm.576-6.176 6 6 .848-.848-6-6-.848.848ZM11 8.6h2V7.4h-2v1.2Zm2 0h7V7.4h-7v1.2Zm.424-.176 6-6-.848-.848-6 6 .848.848ZM16.6 14a3.6 3.6 0 0 0-3.6-3.6v1.2a2.4 2.4 0 0 1 2.4 2.4h1.2ZM13 19.6a3.6 3.6 0 0 0 3.6-3.6h-1.2a2.4 2.4 0 0 1-2.4 2.4v1.2ZM5.4 16A3.6 3.6 0 0 0 9 19.6v-1.2A2.4 2.4 0 0 1 6.6 16H5.4Zm1.2-2A2.4 2.4 0 0 1 9 11.6v-1.2A3.6 3.6 0 0 0 5.4 14h1.2ZM4 21.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 22.6v-1.2Zm16.4-.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm1.2-12A1.6 1.6 0 0 0 20 7.4v1.2c.22 0 .4.18.4.4h1.2Zm-18 0c0-.22.18-.4.4-.4V7.4A1.6 1.6 0 0 0 2.4 9h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVintageTv;
