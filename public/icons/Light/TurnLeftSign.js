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
      d="m10.869 21.717-8.586-8.586.848-.848 8.586 8.586-.848.848ZM2.283 10.87l8.586-8.586.848.848-8.586 8.586-.848-.848Zm19.434 2.262-8.586 8.586-.848-.848 8.586-8.586.848.848ZM13.131 2.283l8.586 8.586-.848.848-8.586-8.586.848-.848Zm-2.262 0a1.6 1.6 0 0 1 2.262 0l-.848.848a.4.4 0 0 0-.566 0l-.848-.848ZM2.283 13.13a1.6 1.6 0 0 1 0-2.262l.848.848a.4.4 0 0 0 0 .566l-.848.848Zm9.434 7.738a.4.4 0 0 0 .566 0l.848.848a1.6 1.6 0 0 1-2.262 0l.848-.848Zm9.152-8.586a.4.4 0 0 0 0-.566l.848-.848a1.6 1.6 0 0 1 0 2.262l-.848-.848ZM9 10.4h5v1.2H9v-1.2Zm6.6 1.6v3h-1.2v-3h1.2ZM14 10.4a1.6 1.6 0 0 1 1.6 1.6h-1.2a.4.4 0 0 0-.4-.4v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTurnLeftSign;
