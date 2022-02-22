import * as React from "react";

const SvgMedal = ({ title, titleId, ...props }) => (
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
      d="m12 10-1.757 1.757H7.757v2.486L6 16l1.757 1.757v2.486h2.486L12 22l1.757-1.757h2.486v-2.486L18 16l-1.757-1.757v-2.486h-2.486L12 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M3 3V2H1.252l.886 1.507L3 3Zm5 0 .868-.496L8.58 2H8v1Zm4 7-.868.496a1 1 0 0 0 1.736 0L12 10Zm9-7 .862.507L22.748 2H21v1Zm-5 0V2h-.58l-.288.504L16 3Zm-7.138 7.993-5-8.5-1.724 1.014 5 8.5 1.724-1.014ZM3 4h5V2H3v2Zm4.132-.504 4 7 1.736-.992-4-7-1.736.992Zm9.73 8.511 5-8.5-1.724-1.014-5 8.5 1.724 1.014ZM21 2h-5v2h5V2Zm-5.868.504-4 7 1.736.992 4-7-1.736-.992Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMedal;
