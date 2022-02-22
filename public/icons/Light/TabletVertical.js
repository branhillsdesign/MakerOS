import * as React from "react";

const SvgTabletVertical = ({ title, titleId, ...props }) => (
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
      d="M6 21.6h12v-1.2H6v1.2ZM19.6 20V4h-1.2v16h1.2ZM4.4 4v16h1.2V4H4.4ZM18 2.4H6v1.2h12V2.4ZM19.6 4A1.6 1.6 0 0 0 18 2.4v1.2c.22 0 .4.18.4.4h1.2ZM18 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTabletVertical;
