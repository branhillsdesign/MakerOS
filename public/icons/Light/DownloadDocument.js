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
      d="M19 8h.6a.6.6 0 0 0-.176-.424L19 8Zm-5-5 .424-.424A.6.6 0 0 0 14 2.4V3Zm0 5h-.6v.6h.6V8Zm-2 9-.424.424.424.425.424-.425L12 17Zm1-1 .424.424 1.024-1.024H13v.6Zm-2 0v-.6H9.551l1.025 1.024L11 16Zm8 4h.6-.6ZM6 21.6h12v-1.2H6v1.2ZM4.4 4v16h1.2V4H4.4Zm15.2 16V8h-1.2v12h1.2ZM14 2.4H6v1.2h8V2.4Zm5.424 5.176-5-5-.848.848 5 5 .848-.848ZM13.4 3v5h1.2V3h-1.2Zm.6 5.6h5V7.4h-5v1.2ZM12.6 17v-6h-1.2v6h1.2Zm-.176.424 1-1-.848-.848-1 1 .848.848ZM13 15.4h-2v1.2h2v-1.2Zm-2.424 1.024 1 1 .848-.848-1-1-.848.848ZM18 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDownloadDocument;
