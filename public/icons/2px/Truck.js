import * as React from "react";

const SvgTruck = ({ title, titleId, ...props }) => (
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
      d="M2 16H1v1h1v-1ZM16 5h1V4h-1v1Zm6 11v1h1v-1h-1Zm0-4h1v-.362l-.232-.278L22 12Zm-2.5-3 .768-.64-.3-.36H19.5v1ZM1 6v10h2V6H1Zm15-2H3v2h13V4Zm6.768 7.36-2.5-3-1.536 1.28 2.5 3 1.536-1.28ZM17 9V5h-2v4h2Zm2.5-1H16v2h3.5V8Zm3.5 5v-1h-2v1h2Zm-6 0V9h-2v4h2Zm5-1h-6v2h6v-2Zm-5 4v-1.5h-2V16h2Zm0-1.5V13h-2v1.5h2Zm6 1.5v-1.5h-2V16h2Zm0-1.5V13h-2v1.5h2Zm-7 1h6v-2h-6v2ZM7 17a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H7Zm-1 1a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Zm13-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2ZM6 16a1 1 0 0 1 .867.5l1.731-1A3 3 0 0 0 6 14v2Zm.867.5A.991.991 0 0 1 7 17h2a2.99 2.99 0 0 0-.402-1.5l-1.731 1Zm.865.5H16v-2H7.732v2ZM2 17h2.268v-2H2v2Zm3 0c0-.184.049-.353.133-.5l-1.731-1A2.99 2.99 0 0 0 3 17h2Zm.133-.5A1 1 0 0 1 6 16v-2a3 3 0 0 0-2.598 1.5l1.731 1ZM17 17c0-.184.049-.353.133-.5l-1.731-1A2.99 2.99 0 0 0 15 17h2Zm.133-.5A1 1 0 0 1 18 16v-2a3 3 0 0 0-2.598 1.5l1.731 1ZM16 17h.268v-2H16v2Zm3.732 0H22v-2h-2.268v2ZM18 16a1 1 0 0 1 .867.5l1.731-1A3 3 0 0 0 18 14v2Zm.867.5A.991.991 0 0 1 19 17h2a2.99 2.99 0 0 0-.402-1.5l-1.731 1ZM3 6V4a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTruck;
