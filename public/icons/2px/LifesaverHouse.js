import * as React from "react";

const SvgLifesaverHouse = ({ title, titleId, ...props }) => (
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
      d="m12 3 .707-.707L12 1.586l-.707.707L12 3Zm5-1V1h-1v1h1Zm5 0h1V1h-1v1Zm0 3v1h1V5h-1Zm-12 7v-1H9v1h1Zm4 0h1v-1h-1v1Zm-2.707-9.707-7 7 1.414 1.414 7-7-1.414-1.414Zm-7 7-3 3 1.414 1.414 3-3-1.414-1.414ZM4 10v10h2V10H4Zm0 10v4h2v-4H4Zm14.293-9.293 3 3 1.414-1.414-3-3-1.414 1.414ZM18 10v10h2V10h-2Zm0 10v4h2v-4h-2ZM11.293 3.707l5 5 1.414-1.414-5-5-1.414 1.414Zm5 5 2 2 1.414-1.414-2-2-1.414 1.414ZM17 3h5V1h-5v2Zm4-1v3h2V2h-2Zm-3 6V5h-2v3h2Zm0-3V2h-2v3h2Zm4-1h-5v2h5V4ZM5 21h5v-2H5v2Zm6-1v-8H9v8h2Zm-1-7h4v-2h-4v2Zm0 8h4v-2h-4v2Zm4 0h5v-2h-5v2Zm-1-9v8h2v-8h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLifesaverHouse;
