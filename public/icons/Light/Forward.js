import * as React from "react";

const SvgForward = ({ title, titleId, ...props }) => (
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
      d="M14 5h-.6a.6.6 0 0 1 1.024-.424L14 5Zm0 4h.6v.6H14V9ZM3 20l.48.36a.6.6 0 0 1-1.072-.459L3 20Zm11-5v-.6h.6v.6H14Zm0 4 .424.424A.6.6 0 0 1 13.4 19h.6Zm7-7 .424-.424.425.424-.425.424L21 12Zm-6.4-7v4h-1.2V5h1.2ZM14 9.6c-3.687 0-9.253 3.568-10.408 10.499L2.408 19.9C3.653 12.432 9.687 8.4 14 8.4v1.2ZM2.52 19.64c.763-1.017 1.82-2.345 3.612-3.406C7.926 15.17 10.41 14.4 14 14.4v1.2c-3.41 0-5.676.73-7.257 1.666-1.583.939-2.526 2.11-3.263 3.094l-.96-.72ZM14.6 15v4h-1.2v-4h1.2Zm-1.024 3.576 7-7 .848.848-7 7-.848-.848Zm7-6.152-7-7 .848-.848 7 7-.848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgForward;
