import * as React from "react";

const SvgChartArrow = ({ title, titleId, ...props }) => (
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
      d="m8 11 .424-.424L8 10.15l-.424.425L8 11Zm4 4-.424.424.424.425.424-.425L12 15Zm8-8h.6v-.6H20V7ZM4 20h-.6v.6H4V20Zm.424-4.576 4-4-.848-.848-4 4 .848.848Zm3.152-4 4 4 .848-.848-4-4-.848.848ZM20 6.4h-4v1.2h4V6.4Zm-.6.6v4h1.2V7h-1.2ZM4 20.6h17v-1.2H4v1.2Zm.6-.6v-5H3.4v5h1.2Zm0-5V4H3.4v11h1.2Zm7.824.424 8-8-.848-.848-8 8 .848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChartArrow;
