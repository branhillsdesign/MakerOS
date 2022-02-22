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
      d="M6 22h12v-2H6v2Zm14-2V4h-2v16h2ZM4 4v16h2V4H4Zm14-2H6v2h12V2Zm2 2a2 2 0 0 0-2-2v2h2Zm-2 18a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTabletVertical;
