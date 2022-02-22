import * as React from "react";

const SvgMessageDotsLeft = ({ title, titleId, ...props }) => (
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
      d="m4 10 .707.707.293-.293V10H4Zm-2 2-.707-.707L.586 12l.707.707L2 12Zm2 2h1v-.414l-.293-.293L4 14Zm1 6h15v-2H5v2ZM20 4H5v2h15V4Zm2 14V6h-2v12h2ZM3 6v4h2V6H3Zm.293 3.293-2 2 1.414 1.414 2-2-1.414-1.414Zm-2 3.414 2 2 1.414-1.414-2-2-1.414 1.414ZM3 14v4h2v-4H3Zm17 6a2 2 0 0 0 2-2h-2v2ZM5 18H3a2 2 0 0 0 2 2v-2ZM5 4a2 2 0 0 0-2 2h2V4Zm15 2h2a2 2 0 0 0-2-2v2ZM14 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMessageDotsLeft;
