import * as React from "react";

const SvgVignette = ({ title, titleId, ...props }) => (
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
      d="M1 5v14h2V5H1Zm2 16h18v-2H3v2Zm20-2V5h-2v14h2ZM21 3H3v2h18V3Zm-1 9c0-1.787-1.016-3.311-2.469-4.35C16.076 6.613 14.117 6 12 6v2c1.749 0 3.29.508 4.369 1.278C17.449 10.05 18 11.026 18 12h2Zm-8 6c2.117 0 4.076-.611 5.531-1.65C18.984 15.31 20 13.786 20 12h-2c0 .974-.551 1.95-1.631 2.722C15.289 15.492 13.748 16 12 16v2Zm-8-6c0 1.787 1.016 3.311 2.469 4.35C7.924 17.387 9.883 18 12 18v-2c-1.749 0-3.29-.508-4.369-1.278C6.551 13.95 6 12.974 6 12H4Zm2 0c0-.974.551-1.95 1.631-2.722C8.711 8.508 10.251 8 12 8V6c-2.117 0-4.076.612-5.531 1.65C5.016 8.69 4 10.214 4 12h2Zm17-7a2 2 0 0 0-2-2v2h2Zm-2 16a2 2 0 0 0 2-2h-2v2ZM1 19a2 2 0 0 0 2 2v-2H1ZM3 5V3a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVignette;
