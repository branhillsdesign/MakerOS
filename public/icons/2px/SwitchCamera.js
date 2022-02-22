import * as React from "react";

const SvgSwitchCamera = ({ title, titleId, ...props }) => (
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
      d="M2 7a1 1 0 0 1 1-1h3.586a1 1 0 0 0 .707-.293l1.414-1.414A1 1 0 0 1 9.414 4h5.172a1 1 0 0 1 .707.293l1.414 1.414a1 1 0 0 0 .707.293H21a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m8 13-.707.707L9 15.414V13H8Zm-1-1-.707-.707-.707.707.707.707L7 12Zm1-1h1V8.586l-1.707 1.707L8 11Zm8 2h-1v2.414l1.707-1.707L16 13Zm1-1 .707.707.707-.707-.707-.707L17 12Zm-1-1 .707-.707L15 8.586V11h1Zm-7.293 1.293-1-1-1.414 1.414 1 1 1.414-1.414Zm-1 .414 1-1-1.414-1.414-1 1 1.414 1.414ZM7 11v1h2v-1H7Zm0 1v1h2v-1H7Zm9.707 1.707 1-1-1.414-1.414-1 1 1.414 1.414Zm1-2.414-1-1-1.414 1.414 1 1 1.414-1.414ZM15 11v1h2v-1h-2Zm0 1v1h2v-1h-2Zm-7 1h8v-2H8v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwitchCamera;
