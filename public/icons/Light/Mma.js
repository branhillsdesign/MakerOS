import * as React from "react";

const SvgMma = ({ title, titleId, ...props }) => (
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
      d="M8 17.5v-.6h-.6v.6H8Zm8 0h.6v-.6H16v.6ZM9 8v-.6h-.6V8H9Zm0 1h-.6v.6H9V9Zm4 0v.6h.6V9H13Zm0-1h.6v-.6H13V8Zm4.97 3.12-.582-.146.582.145Zm-11.94 0 .582-.146-.582.145Zm.951 3.804.582-.145-.582.145Zm.582-.145-.951-3.805-1.164.291.951 3.805 1.164-.291ZM6.6 10.877V5H5.4v5.877h1.2ZM7 4.6h8V3.4H7v1.2ZM17.4 9v1.877h1.2V9h-1.2Zm-.012 1.974-.951 3.805 1.164.29.951-3.804-1.164-.291Zm-.466 3.426H7.078v1.2h9.844v-1.2ZM7.4 17.5v2.4h1.2v-2.4H7.4Zm.7 3.1h7.8v-1.2H8.1v1.2Zm8.5-.7v-2.4h-1.2v2.4h1.2Zm-.6-3H8v1.2h8v-1.2ZM8.4 8v1h1.2V8H8.4ZM9 9.6h4V8.4H9v1.2Zm4.6-.6V8h-1.2v1h1.2ZM13 7.4H9v1.2h4V7.4ZM15.4 5v3h1.2V5h-1.2Zm0 3v2h1.2V8h-1.2Zm1.6-.6h-1v1.2h1V7.4Zm-1.1 13.2a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm-8.5-.7a.7.7 0 0 0 .7.7v-1.2a.5.5 0 0 1 .5.5H7.4Zm9.037-5.121a.5.5 0 0 1 .485-.379v1.2a.7.7 0 0 0 .679-.53l-1.164-.291Zm.963-3.902a.401.401 0 0 1-.012.097l1.164.291c.032-.127.048-.257.048-.388h-1.2ZM15 4.6c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 15 3.4v1.2ZM6.6 5c0-.22.18-.4.4-.4V3.4A1.6 1.6 0 0 0 5.4 5h1.2Zm.012 5.974a.4.4 0 0 1-.012-.097H5.4c0 .13.016.261.048.388l1.164-.291ZM18.6 9A1.6 1.6 0 0 0 17 7.4v1.2c.22 0 .4.18.4.4h1.2ZM6.399 15.07a.7.7 0 0 0 .68.53v-1.2a.5.5 0 0 1 .484.379l-1.164.29Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMma;
