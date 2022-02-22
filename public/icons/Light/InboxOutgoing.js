import * as React from "react";

const SvgInboxOutgoing = ({ title, titleId, ...props }) => (
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
      d="M14.83 15v-.6h-.425l-.141.4.565.2Zm-5.66 0 .566-.2-.141-.4h-.424v.6ZM20 19h-.6.6Zm-1 1v.6-.6ZM5 20v.6-.6ZM5 4.6h14V3.4H5v1.2Zm14.4.4v14h1.2V5h-1.2ZM19 19.4H5v1.2h14v-1.2ZM4.6 19V5H3.4v14h1.2Zm9.664-4.2c-.33.933-1.22 1.6-2.264 1.6v1.2a3.601 3.601 0 0 0 3.395-2.4l-1.131-.4ZM20 14.4h-5.17v1.2H20v-1.2Zm-8 2a2.401 2.401 0 0 1-2.264-1.6l-1.131.4A3.601 3.601 0 0 0 12 17.6v-1.2Zm-2.83-2H4v1.2h5.17v-1.2ZM5 3.4A1.6 1.6 0 0 0 3.4 5h1.2c0-.22.18-.4.4-.4V3.4Zm14 1.2c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 19 3.4v1.2Zm.4 14.4a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM5 19.4a.4.4 0 0 1-.4-.4H3.4A1.6 1.6 0 0 0 5 20.6v-1.2ZM12 7l-.424-.424L12 6.15l.424.425L12 7Zm1 1 .424-.424L14.448 8.6H13V8Zm-2 0v.6H9.551l1.025-1.024L11 8Zm1.6-1v6h-1.2V7h1.2Zm-.176-.424 1 1-.848.848-1-1 .848-.848ZM13 8.6h-2V7.4h2v1.2Zm-2.424-1.024 1-1 .848.848-1 1-.848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgInboxOutgoing;
