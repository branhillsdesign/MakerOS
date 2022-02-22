import * as React from "react";

const SvgRoomService = ({ title, titleId, ...props }) => (
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
      d="M19.938 14.5v.6h.68l-.084-.674-.596.074Zm-15.876 0-.596-.074-.084.674h.68v-.6Zm8.338-8a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm-.4.4a.4.4 0 0 1-.4-.4h-1.2A1.6 1.6 0 0 0 12 8.1V6.9Zm-.4-.4c0-.22.18-.4.4-.4V4.9a1.6 1.6 0 0 0-1.6 1.6h1.2Zm.4-.4c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 12 4.9v1.2Zm0 2a7.401 7.401 0 0 1 7.343 6.474l1.19-.148A8.602 8.602 0 0 0 12 6.9v1.2Zm-7.343 6.474A7.401 7.401 0 0 1 12 8.1V6.9a8.601 8.601 0 0 0-8.534 7.526l1.191.148Zm15.281-.674H4.062v1.2h15.876v-1.2ZM2 17.6h20v-1.2H2v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRoomService;
