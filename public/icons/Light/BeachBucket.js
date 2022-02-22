import * as React from "react";

const SvgBeachBucket = ({ title, titleId, ...props }) => (
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
      d="M3 6v-.6h-.6V6H3Zm0 3h-.6v.6H3V9Zm2 12-.598.05.046.55H5V21Zm9 1h-.6v.6h.6V22Zm.5 0v.6h.6V22h-.6Zm0-.5v-.6h-.6v.6h.6Zm6 0h.6v-.6h-.6v.6Zm0 .5h-.6v.6h.6V22Zm.5 0v.6h.6V22H21ZM15.5 2.5v-.6h-.6v.6h.6Zm4 0h.6v-.6h-.6v.6ZM15.768 6l.519-.3-.52.3ZM3 9.6h1V8.4H3v1.2Zm.402-.55 1 12 1.196-.1-1-12-1.196.1ZM14.6 18a2.9 2.9 0 0 1 2.9-2.9v-1.2a4.1 4.1 0 0 0-4.1 4.1h1.2Zm2.9-2.9a2.9 2.9 0 0 1 2.9 2.9h1.2a4.1 4.1 0 0 0-4.1-4.1v1.2ZM14 22.6h.5v-1.2H14v1.2Zm1.1-.6v-.5h-1.2v.5h1.2Zm-.6.1h6v-1.2h-6v1.2Zm5.4-.6v.5h1.2v-.5h-1.2Zm.6 1.1h.5v-1.2h-.5v1.2Zm1.1-.6v-4h-1.2v4h1.2ZM16.1 5V2.5h-1.2V5h1.2Zm-.6-1.9h4V1.9h-4v1.2Zm3.4-.6V5h1.2V2.5h-1.2Zm0 2.5a1.4 1.4 0 0 1-1.4 1.4v1.2A2.6 2.6 0 0 0 20.1 5h-1.2ZM2.4 6v3h1.2V6H2.4Zm11 12v3h1.2v-3h-1.2Zm0 3v1h1.2v-1h-1.2Zm-8.4.6h9v-1.2H5v1.2ZM17.5 6.4a1.4 1.4 0 0 1-1.213-.7l-1.039.6A2.6 2.6 0 0 0 17.5 7.6V6.4Zm-1.213-.7A1.391 1.391 0 0 1 16.1 5h-1.2c0 .473.127.917.348 1.3l1.039-.6Zm-.52-.3H3v1.2h12.768V5.4Zm2.333 9.1V9h-1.2v5.5h1.2Zm0-5.5V7h-1.2v2h1.2ZM4 9.6h13.5V8.4H4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBeachBucket;
