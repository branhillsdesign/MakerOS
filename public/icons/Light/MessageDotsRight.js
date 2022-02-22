import * as React from "react";

const SvgMessageDotsRight = ({ title, titleId, ...props }) => (
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
      d="m20 14-.424-.424-.176.175V14h.6Zm2-2 .424.424.425-.424-.425-.424L22 12Zm-2-2h-.6v.248l.176.176L20 10Zm-1-5.6H4v1.2h15V4.4ZM4 19.6h15v-1.2H4v1.2ZM2.4 6v12h1.2V6H2.4Zm18.2 12v-4h-1.2v4h1.2Zm-.176-3.576 2-2-.848-.848-2 2 .848.848Zm2-2.848-2-2-.848.848 2 2 .848-.848ZM20.6 10V6h-1.2v4h1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4Zm15 1.2c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 19 4.4v1.2Zm0 14a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM4 18.4a.4.4 0 0 1-.4-.4H2.4A1.6 1.6 0 0 0 4 19.6v-1.2ZM13 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM8.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMessageDotsRight;
