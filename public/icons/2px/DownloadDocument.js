import * as React from "react";

const SvgDownloadDocument = ({ title, titleId, ...props }) => (
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
      d="M19 8h1a1 1 0 0 0-.293-.707L19 8Zm-5-5 .707-.707A1 1 0 0 0 14 2v1Zm0 5h-1v1h1V8Zm-2 9-.707.707.707.707.707-.707L12 17Zm1-1 .707.707L15.414 15H13v1Zm-2 0v-1H8.586l1.707 1.707L11 16Zm8 4h1-1ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V8h-2v12h2ZM14 2H6v2h8V2Zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414ZM13 3v5h2V3h-2Zm1 6h5V7h-5v2Zm-1 8v-6h-2v6h2Zm-.293.707 1-1-1.414-1.414-1 1 1.414 1.414ZM13 15h-2v2h2v-2Zm-2.707 1.707 1 1 1.414-1.414-1-1-1.414 1.414ZM18 22a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDownloadDocument;
