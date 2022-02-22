import * as React from "react";

const SvgBackward = ({ title, titleId, ...props }) => (
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
      d="M10 5h.6a.6.6 0 0 0-1.024-.424L10 5Zm0 4h-.6v.6h.6V9Zm11 11-.48.36a.6.6 0 0 0 1.072-.459L21 20Zm-11-5v-.6h-.6v.6h.6Zm0 4-.424.424A.6.6 0 0 0 10.6 19H10Zm-7-7-.424-.424L2.15 12l.425.424L3 12Zm6.4-7v4h1.2V5H9.4Zm.6 4.6c3.687 0 9.253 3.568 10.408 10.499l1.184-.198C20.347 12.432 14.313 8.4 10 8.4v1.2Zm11.48 10.04c-.763-1.017-1.82-2.345-3.612-3.406C16.074 15.17 13.59 14.4 10 14.4v1.2c3.41 0 5.676.73 7.257 1.666 1.583.939 2.526 2.11 3.263 3.094l.96-.72ZM9.4 15v4h1.2v-4H9.4Zm1.024 3.576-7-7-.848.848 7 7 .848-.848Zm-7-6.152 7-7-.848-.848-7 7 .848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBackward;
