import * as React from "react";

const SvgScreenImage = ({ title, titleId, ...props }) => (
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
      d="M22 16V6h-2v10h2ZM20 4H4v2h16V4ZM2 6v10h2V6H2Zm5 15h5v-2H7v2Zm5 0h5v-2h-5v2Zm-8-3h8v-2H4v2Zm8 0h8v-2h-8v2Zm1 2v-3h-2v3h2ZM4 4a2 2 0 0 0-2 2h2V4Zm18 2a2 2 0 0 0-2-2v2h2Zm-2 10v2a2 2 0 0 0 2-2h-2ZM2 16a2 2 0 0 0 2 2v-2H2ZM5 14l5.6-7 3.4 4.454 1.5-1.909L19 14H5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgScreenImage;
