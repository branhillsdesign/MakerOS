import * as React from "react";

const SvgTurnRightSign = ({ title, titleId, ...props }) => (
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
      d="M13.414 22 22 13.414 20.586 12 12 20.586 13.414 22ZM22 10.586 13.414 2 12 3.414 20.586 12 22 10.586ZM2 13.414 10.586 22 12 20.586 3.414 12 2 13.414ZM10.586 2 2 10.586 3.414 12 12 3.414 10.586 2Zm2.828 0a2 2 0 0 0-2.828 0L12 3.414 13.414 2ZM22 13.414a2 2 0 0 0 0-2.828L20.586 12 22 13.414Zm-10 7.172L10.586 22a2 2 0 0 0 2.828 0L12 20.586ZM3.414 12 2 10.586a2 2 0 0 0 0 2.828L3.414 12ZM15 10h-5v2h5v-2Zm-7 2v3h2v-3H8Zm2-2a2 2 0 0 0-2 2h2v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTurnRightSign;
