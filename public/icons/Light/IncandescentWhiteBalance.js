import * as React from "react";

const SvgIncandescentWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="m10 7.416.24.55.36-.157v-.393H10ZM10 3v-.6h-.6V3h.6Zm4 0h.6v-.6H14V3Zm0 4.416h-.6v.393l.36.157.24-.55ZM4 11.4H1v1.2h3v-1.2Zm7.4 8.6v3h1.2v-3h-1.2Zm8.6-7.4h3v-1.2h-3v1.2Zm-2.424 5.824 2 2 .848-.848-2-2-.848.848Zm-12-.848-2 2 .848.848 2-2-.848-.848ZM16.4 12a4.4 4.4 0 0 1-4.4 4.4v1.2a5.6 5.6 0 0 0 5.6-5.6h-1.2ZM12 16.4A4.4 4.4 0 0 1 7.6 12H6.4a5.6 5.6 0 0 0 5.6 5.6v-1.2ZM7.6 12a4.401 4.401 0 0 1 2.64-4.034l-.48-1.1A5.601 5.601 0 0 0 6.4 12h1.2Zm3-4.584V3H9.4v4.416h1.2ZM10 3.6h4V2.4h-4v1.2Zm3.76 4.366A4.401 4.401 0 0 1 16.4 12h1.2a5.601 5.601 0 0 0-3.36-5.134l-.48 1.1ZM13.4 3v4.416h1.2V3h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIncandescentWhiteBalance;
