import * as React from "react";

const SvgSave = ({ title, titleId, ...props }) => (
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
      d="M20 7.5h.6v-.249l-.176-.175L20 7.5ZM16.5 4l.424-.424-.175-.176H16.5V4ZM8 8v-.6h-.6V8H8Zm0 1h-.6v.6H8V9Zm6 0v.6h.6V9H14Zm0-1h.6v-.6H14V8ZM3.4 5v14h1.2V5H3.4ZM5 20.6h14v-1.2H5v1.2ZM20.6 19V7.5h-1.2V19h1.2Zm-.176-11.924-3.5-3.5-.848.848 3.5 3.5.848-.848ZM16.5 3.4H5v1.2h11.5V3.4ZM7.4 8v1h1.2V8H7.4ZM8 9.6h6V8.4H8v1.2Zm6.6-.6V8h-1.2v1h1.2ZM14 7.4H8v1.2h6V7.4Zm5 13.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM3.4 19A1.6 1.6 0 0 0 5 20.6v-1.2a.4.4 0 0 1-.4-.4H3.4ZM4.6 5c0-.22.18-.4.4-.4V3.4A1.6 1.6 0 0 0 3.4 5h1.2Zm8.8 10a1.4 1.4 0 0 1-1.4 1.4v1.2a2.6 2.6 0 0 0 2.6-2.6h-1.2ZM12 16.4a1.4 1.4 0 0 1-1.4-1.4H9.4a2.6 2.6 0 0 0 2.6 2.6v-1.2ZM10.6 15a1.4 1.4 0 0 1 1.4-1.4v-1.2A2.6 2.6 0 0 0 9.4 15h1.2Zm1.4-1.4a1.4 1.4 0 0 1 1.4 1.4h1.2a2.6 2.6 0 0 0-2.6-2.6v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSave;
