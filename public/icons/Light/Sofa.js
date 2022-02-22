import * as React from "react";

const SvgSofa = ({ title, titleId, ...props }) => (
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
      d="M5 15h-.6v.6H5V15Zm14 0v.6h.6V15H19ZM5.6 15v-3H4.4v3h1.2ZM.4 12v5h1.2v-5H.4ZM3 19.6h18v-1.2H3v1.2ZM23.6 17v-5h-1.2v5h1.2Zm-5.2-5v3h1.2v-3h-1.2Zm.6 2.4H5v1.2h14v-1.2ZM6 5.6h12V4.4H6v1.2ZM19.4 7v3h1.2V7h-1.2ZM4.6 10V7H3.4v3h1.2ZM18 5.6A1.4 1.4 0 0 1 19.4 7h1.2A2.6 2.6 0 0 0 18 4.4v1.2ZM6 4.4A2.6 2.6 0 0 0 3.4 7h1.2A1.4 1.4 0 0 1 6 5.6V4.4ZM19.6 12a1.4 1.4 0 0 1 1.4-1.4V9.4a2.6 2.6 0 0 0-2.6 2.6h1.2Zm4 0A2.6 2.6 0 0 0 21 9.4v1.2a1.4 1.4 0 0 1 1.4 1.4h1.2ZM21 19.6a2.6 2.6 0 0 0 2.6-2.6h-1.2a1.4 1.4 0 0 1-1.4 1.4v1.2ZM.4 17A2.6 2.6 0 0 0 3 19.6v-1.2A1.4 1.4 0 0 1 1.6 17H.4Zm1.2-5A1.4 1.4 0 0 1 3 10.6V9.4A2.6 2.6 0 0 0 .4 12h1.2Zm4 0A2.6 2.6 0 0 0 3 9.4v1.2A1.4 1.4 0 0 1 4.4 12h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSofa;
