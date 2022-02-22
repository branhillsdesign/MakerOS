import * as React from "react";

const SvgBpmMonitor = ({ title, titleId, ...props }) => (
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
      d="m9.919 8.136.857.514-.857-.514Zm.169-.005.832-.554-.832.554Zm-3.059 4.82-.857-.514.857.514Zm6.903.947.832-.554-.832.555ZM22 16V6h-2v10h2ZM20 4H4v2h16V4ZM2 6v10h2V6H2Zm5 15h5v-2H7v2Zm5 0h5v-2h-5v2Zm-8-3h8v-2H4v2Zm8 0h8v-2h-8v2Zm1 2v-3h-2v3h2Zm-8-6h1.943v-2H5v2Zm2.887-.534 2.89-4.816L9.06 7.621l-2.89 4.816 1.716 1.029Zm1.369-4.78 3.844 5.767 1.664-1.11-3.844-5.766-1.664 1.11Zm5.537 5.935 2.885-2.885-1.414-1.414-2.885 2.885 1.414 1.414ZM17.041 12H19v-2h-1.959v2Zm-6.265-3.35a.9.9 0 0 1-1.52.036l1.664-1.11a1.1 1.1 0 0 0-1.859.045l1.715 1.029ZM6.943 14a1.1 1.1 0 0 0 .944-.534l-1.715-1.029A.9.9 0 0 1 6.943 12v2ZM4 4a2 2 0 0 0-2 2h2V4Zm18 2a2 2 0 0 0-2-2v2h2Zm-4.322 5.736a.9.9 0 0 1-.637.264v-2a1.1 1.1 0 0 0-.777.322l1.414 1.414ZM20 16v2a2 2 0 0 0 2-2h-2Zm-6.9-1.547a1.1 1.1 0 0 0 1.693.168l-1.414-1.414a.9.9 0 0 1 1.385.137l-1.664 1.11ZM2 16a2 2 0 0 0 2 2v-2H2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBpmMonitor;
