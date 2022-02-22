import * as React from "react";

const SvgScreen = ({ title, titleId, ...props }) => (
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
      d="M21.6 16V6h-1.2v10h1.2ZM20 4.4H4v1.2h16V4.4ZM2.4 6v10h1.2V6H2.4ZM7 20.6h5v-1.2H7v1.2Zm5 0h5v-1.2h-5v1.2Zm-8-3h8v-1.2H4v1.2Zm8 0h8v-1.2h-8v1.2Zm.6 2.4v-3h-1.2v3h1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4ZM21.6 6A1.6 1.6 0 0 0 20 4.4v1.2c.22 0 .4.18.4.4h1.2Zm-1.2 10a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm-18 0A1.6 1.6 0 0 0 4 17.6v-1.2a.4.4 0 0 1-.4-.4H2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgScreen;
