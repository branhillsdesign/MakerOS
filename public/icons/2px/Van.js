import * as React from "react";

const SvgVan = ({ title, titleId, ...props }) => (
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
      d="m16.5 6 .673-.74-.286-.26H16.5v1Zm5.5 5h1v-.442l-.327-.298L22 11Zm0 4v1h1v-1h-1ZM2 15H1v1h1v-1Zm5 1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H7Zm-1 1a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Zm13-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2ZM15.827 6.74l5.5 5 1.346-1.48-5.5-5-1.346 1.48ZM21 11v4h2v-4h-2ZM3 15v-4H1v4h2Zm0-4V7H1v4h2Zm0-4h5V5H3v2Zm-1 5h6v-2H2v2Zm5-6v5h2V6H7Zm1 1h6V5H8v2Zm6 0h2.5V5H14v2Zm-6 5h6v-2H8v2Zm6 0h8v-2h-8v2Zm-1-6v5h2V6h-2Zm-7 9a1 1 0 0 1 .867.5l1.731-1A3 3 0 0 0 6 13v2Zm.867.5A.991.991 0 0 1 7 16h2a2.99 2.99 0 0 0-.402-1.5l-1.731 1Zm-2.6-1.5H2v2h2.268v-2ZM5 16c0-.184.049-.353.133-.5l-1.731-1A2.99 2.99 0 0 0 3 16h2Zm.133-.5A1 1 0 0 1 6 15v-2a3 3 0 0 0-2.598 1.5l1.731 1ZM16.268 14H7.732v2h8.536v-2ZM17 16c0-.184.049-.353.133-.5l-1.731-1A2.99 2.99 0 0 0 15 16h2Zm.133-.5A1 1 0 0 1 18 15v-2a3 3 0 0 0-2.598 1.5l1.731 1ZM22 14h-2.268v2H22v-2Zm-4 1a1 1 0 0 1 .867.5l1.731-1A3 3 0 0 0 18 13v2Zm.867.5A.991.991 0 0 1 19 16h2a2.99 2.99 0 0 0-.402-1.5l-1.731 1ZM3 7V5a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVan;
