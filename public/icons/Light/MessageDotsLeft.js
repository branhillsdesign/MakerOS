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
      d="m4 10 .424.424.176-.175V10H4Zm-2 2-.424-.424L1.15 12l.425.424L2 12Zm2 2h.6v-.248l-.176-.176L4 14Zm1 5.6h15v-1.2H5v1.2ZM20 4.4H5v1.2h15V4.4ZM21.6 18V6h-1.2v12h1.2ZM3.4 6v4h1.2V6H3.4Zm.176 3.576-2 2 .848.848 2-2-.848-.848Zm-2 2.848 2 2 .848-.848-2-2-.848.848ZM3.4 14v4h1.2v-4H3.4ZM20 19.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM5 18.4a.4.4 0 0 1-.4-.4H3.4A1.6 1.6 0 0 0 5 19.6v-1.2Zm0-14A1.6 1.6 0 0 0 3.4 6h1.2c0-.22.18-.4.4-.4V4.4Zm15 1.2c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 20 4.4v1.2ZM14 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM9.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMessageDotsLeft;
