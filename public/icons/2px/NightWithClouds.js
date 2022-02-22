import * as React from "react";

const SvgNightwithClouds = ({ title, titleId, ...props }) => (
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
      d="M8.5 18a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558l-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m17.315 2.066.346-.938-.346.938Zm-.905 1.703c0-.453-.064-.889-.184-1.3l1.92-.559c.172.591.264 1.215.264 1.859h-2ZM20 7.359c0-1.996-1.26-3.7-3.032-4.356l.693-1.875A6.644 6.644 0 0 1 22 7.358h-2Zm-5.985.472A4.64 4.64 0 0 0 16.41 3.77h2a6.64 6.64 0 0 1-3.425 5.811l-.97-1.749Zm5.446 1.7A4.616 4.616 0 0 0 20 7.36h2a6.617 6.617 0 0 1-.772 3.11l-1.767-.938ZM16.226 2.47c-.234-.805.527-1.677 1.435-1.341l-.693 1.875c.754.28 1.366-.446 1.178-1.093l-1.92.559Z"
      fill="#555770"
    />
  </svg>
);

export default SvgNightwithClouds;
