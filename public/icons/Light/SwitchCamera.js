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
      strokeWidth={1.2}
    />
    <path
      d="m8 13-.424.424L8.6 14.448V13H8Zm-1-1-.424-.424L6.15 12l.425.424L7 12Zm1-1h.6V9.551l-1.024 1.025L8 11Zm8 2h-.6v1.448l1.024-1.024L16 13Zm1-1 .424.424.425-.424-.425-.424L17 12Zm-1-1 .424-.424L15.4 9.55V11h.6Zm-7.576 1.576-1-1-.848.848 1 1 .848-.848Zm-1-.152 1-1-.848-.848-1 1 .848.848ZM7.4 11v1h1.2v-1H7.4Zm0 1v1h1.2v-1H7.4Zm9.024 1.424 1-1-.848-.848-1 1 .848.848Zm1-1.848-1-1-.848.848 1 1 .848-.848ZM15.4 11v1h1.2v-1h-1.2Zm0 1v1h1.2v-1h-1.2Zm-7.4.6h8v-1.2H8v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwitchCamera;
