import * as React from "react";

const SvgKey = ({ title, titleId, ...props }) => (
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
      d="m12.659 10-.566.2.141.4h.425V10ZM23 10h.6v-.6H23v.6Zm0 4v.6h.6V14H23Zm-10.341 0v-.6h-.425l-.141.4.566.2ZM21 14v-.6h-.6v.6h.6Zm0 4v.6h.6V18H21Zm-4 0h-.6v.6h.6V18Zm0-4h.6v-.6H17v.6Zm-8.6-2A1.4 1.4 0 0 1 7 13.4v1.2A2.6 2.6 0 0 0 9.6 12H8.4ZM7 13.4A1.4 1.4 0 0 1 5.6 12H4.4A2.6 2.6 0 0 0 7 14.6v-1.2ZM5.6 12A1.4 1.4 0 0 1 7 10.6V9.4A2.6 2.6 0 0 0 4.4 12h1.2ZM7 10.6A1.4 1.4 0 0 1 8.4 12h1.2A2.6 2.6 0 0 0 7 9.4v1.2Zm0 6.8A5.4 5.4 0 0 1 1.6 12H.4A6.6 6.6 0 0 0 7 18.6v-1.2ZM1.6 12A5.4 5.4 0 0 1 7 6.6V5.4A6.6 6.6 0 0 0 .4 12h1.2ZM7 6.6a5.403 5.403 0 0 1 5.093 3.6l1.131-.4A6.603 6.603 0 0 0 7 5.4v1.2Zm5.659 4H23V9.4H12.659v1.2ZM22.4 10v4h1.2v-4h-1.2Zm-10.307 3.8A5.403 5.403 0 0 1 7 17.4v1.2a6.602 6.602 0 0 0 6.224-4.4l-1.131-.4ZM23 13.4h-2v1.2h2v-1.2Zm-2.6.6v4h1.2v-4h-1.2Zm.6 3.4h-4v1.2h4v-1.2Zm-4-4h-4.341v1.2H17v-1.2Zm.6 4.6v-4h-1.2v4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgKey;
