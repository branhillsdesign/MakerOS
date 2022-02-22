import * as React from "react";

const SvgTurnLeftSign = ({ title, titleId, ...props }) => (
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
      d="M10.586 22 2 13.414 3.414 12 12 20.586 10.586 22ZM2 10.586 10.586 2 12 3.414 3.414 12 2 10.586Zm20 2.828L13.414 22 12 20.586 20.586 12 22 13.414ZM13.414 2 22 10.586 20.586 12 12 3.414 13.414 2Zm-2.828 0a2 2 0 0 1 2.828 0L12 3.414 10.586 2ZM2 13.414a2 2 0 0 1 0-2.828L3.414 12 2 13.414Zm10 7.172L13.414 22a2 2 0 0 1-2.828 0L12 20.586ZM20.586 12 22 10.586a2 2 0 0 1 0 2.828L20.586 12ZM9 10h5v2H9v-2Zm7 2v3h-2v-3h2Zm-2-2a2 2 0 0 1 2 2h-2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTurnLeftSign;
