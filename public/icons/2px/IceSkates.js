import * as React from "react";

const SvgIceSkates = ({ title, titleId, ...props }) => (
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
      d="M2 14c0 .993.29 2.461 1.188 3.71C4.124 19.008 5.674 20 8 20v-2c-1.674 0-2.624-.675-3.188-1.46C4.21 15.707 4 14.674 4 14H2Zm15 6H21v-2H17v2Zm1-1v-3h-2v3h2ZM8 20H11v-2H8v2Zm3 0H17v-2H11v2Zm1-1v-3h-2v3h2Zm5-4h-6v2h6v-2Zm-6 0H9.5v2H11v-2Zm3.1-9.5h5.8v-2h-5.8v2ZM18 15h-1v2h1v-2Zm-3-5.1V7.5h-2v2.4h2Zm0-2.4V4.6h-2v2.9h2Zm4-2.9v2.9h2V4.6h-2Zm0 2.9V14h2V7.5h-2Zm-5 1h6v-2h-6v2ZM9.5 11h.5V9h-.5v2ZM9 10v2h2v-2H9Zm1 1h3V9h-3v2Zm3 0h.9V9H13v2Zm-1-1v2h2v-2h-2Zm6 7a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm1.9-11.5a.9.9 0 0 1-.9-.9h2a1.1 1.1 0 0 0-1.1-1.1v2Zm-5.8-2A1.1 1.1 0 0 0 13 4.6h2a.9.9 0 0 1-.9.9v-2ZM13 9.9a.9.9 0 0 1 .9-.9v2A1.1 1.1 0 0 0 15 9.9h-2ZM7.5 13a2 2 0 0 1 2-2V9a4 4 0 0 0-4 4h2Zm2 2a2 2 0 0 1-2-2h-2a4 4 0 0 0 4 4v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIceSkates;
