import * as React from "react";

const SvgInboxIncoming = ({ title, titleId, ...props }) => (
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
      d="m14.83 15-.944-.333.943.333ZM5 5h14V3H5v2Zm14 0v14h2V5h-2Zm0 14H5v2h14v-2ZM5 19V5H3v14h2Zm9-5c0 .236-.04.46-.114.667l1.886.666c.148-.418.228-.867.228-1.333h-2Zm-.114.667A2.001 2.001 0 0 1 12 16v2a4.001 4.001 0 0 0 3.772-2.667l-1.886-.666ZM20 14h-5.17v2H20v-2Zm-8 2c-.87 0-1.611-.555-1.886-1.333l-1.886.666A4.001 4.001 0 0 0 12 18v-2Zm-1.886-1.333A1.996 1.996 0 0 1 10 14H8c0 .466.08.915.228 1.333l1.886-.666ZM9.17 14H4v2h5.17v-2ZM5 3a2 2 0 0 0-2 2h2V3Zm14 2h2a2 2 0 0 0-2-2v2Zm0 14v2a2 2 0 0 0 2-2h-2ZM5 19H3a2 2 0 0 0 2 2v-2ZM12 12l-.707.707.707.707.707-.707L12 12Zm1-1 .707.707L15.414 10H13v1Zm-2 0v-1H8.586l1.707 1.707L11 11Zm2 1V6h-2v6h2Zm-.293.707 1-1-1.414-1.414-1 1 1.414 1.414ZM13 10h-2v2h2v-2Zm-2.707 1.707 1 1 1.414-1.414-1-1-1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgInboxIncoming;
