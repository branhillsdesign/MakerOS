import * as React from "react";

const SvgSearchDocument = ({ title, titleId, ...props }) => (
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
      d="M19 8h.6a.6.6 0 0 0-.176-.424L19 8Zm-5-5 .424-.424A.6.6 0 0 0 14 2.4V3Zm0 5h-.6v.6h.6V8ZM4.4 4v16h1.2V4H4.4ZM14 2.4H6v1.2h8V2.4Zm5.424 5.176-5-5-.848.848 5 5 .848-.848ZM13.4 3v5h1.2V3h-1.2Zm.6 5.6h5V7.4h-5v1.2Zm5.6 1.9V8h-1.2v2.5h1.2ZM6 21.6h4v-1.2H6v1.2ZM4.4 20A1.6 1.6 0 0 0 6 21.6v-1.2a.4.4 0 0 1-.4-.4H4.4ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2ZM17.461 19.31l4.115 4.114.848-.848-4.114-4.115-.849.849Zm1.006-3.277a3.433 3.433 0 0 1-3.434 3.434v1.2a4.633 4.633 0 0 0 4.634-4.634h-1.2Zm-3.434 3.434a3.433 3.433 0 0 1-3.433-3.434h-1.2a4.633 4.633 0 0 0 4.633 4.634v-1.2ZM11.6 16.033a3.433 3.433 0 0 1 3.433-3.433v-1.2a4.633 4.633 0 0 0-4.633 4.633h1.2Zm3.433-3.433a3.433 3.433 0 0 1 3.434 3.433h1.2a4.633 4.633 0 0 0-4.634-4.633v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSearchDocument;
