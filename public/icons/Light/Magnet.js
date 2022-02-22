import * as React from "react";

const SvgMagnet = ({ title, titleId, ...props }) => (
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
    <mask
      id="Magnet_svg__a"
      maskUnits="userSpaceOnUse"
      x={4}
      y={2}
      width={16}
      height={20}
      fill="#000"
    >
      <path fill="#fff" d="M4 2h16v20H4z" />
      <path d="M12 20a6 6 0 0 0 6-6V8.5h-1v5.206C17 16.63 14.761 19 12 19s-5-2.37-5-5.294V8.5H6V14a6 6 0 0 0 6 6ZM6 4v1h1V4H6ZM18 4v1h-1V4h1Z" />
    </mask>
    <path
      d="M6 5H4.8v1.2H6V5Zm0-1V2.8H4.8V4H6Zm12 1v1.2h1.2V5H18Zm0-1h1.2V2.8H18V4ZM7 5v1.2h1.2V5H7Zm0-1h1.2V2.8H7V4Zm10 1h-1.2v1.2H17V5Zm0-1V2.8h-1.2V4H17Zm0 4.5V7.3h-1.2v1.2H17Zm1 0h1.2V7.3H18v1.2Zm-12 0V7.3H4.8v1.2H6Zm1 0h1.2V7.3H7v1.2Zm9.8 5.5a4.8 4.8 0 0 1-4.8 4.8v2.4a7.2 7.2 0 0 0 7.2-7.2h-2.4ZM12 18.8A4.8 4.8 0 0 1 7.2 14H4.8a7.2 7.2 0 0 0 7.2 7.2v-2.4ZM7.2 5V4H4.8v1h2.4Zm12 0V4h-2.4v1h2.4Zm-3.4 8.706c0 2.326-1.765 4.094-3.8 4.094v2.4c3.488 0 6.2-2.973 6.2-6.494h-2.4ZM12 17.8c-2.035 0-3.8-1.768-3.8-4.094H5.8c0 3.52 2.712 6.494 6.2 6.494v-2.4ZM8.2 5V4H5.8v1h2.4Zm10 0V4h-2.4v1h2.4ZM7 3.8H6v2.4h1V3.8ZM6 5.2h1V2.8H6v2.4Zm12-1.4h-1v2.4h1V3.8Zm-1 1.4h1V2.8h-1v2.4Zm1.2 8.506V8.5h-2.4v5.206h2.4Zm1 .294V8.5h-2.4V14h2.4ZM17 9.7h1V7.3h-1v2.4ZM7.2 14V8.5H4.8V14h2.4Zm1-.294V8.5H5.8v5.206h2.4ZM6 9.7h1V7.3H6v2.4Z"
      fill="#555770"
      mask="url(#Magnet_svg__a)"
    />
  </svg>
);

export default SvgMagnet;
