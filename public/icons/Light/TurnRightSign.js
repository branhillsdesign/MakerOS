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
      d="m13.131 21.717 8.586-8.586-.848-.848-8.586 8.586.848.848Zm8.586-10.848-8.586-8.586-.848.848 8.586 8.586.848-.848ZM2.283 13.13l8.586 8.586.848-.848-8.586-8.586-.848.848Zm8.586-10.848-8.586 8.586.848.848 8.586-8.586-.848-.848Zm2.262 0a1.6 1.6 0 0 0-2.262 0l.848.848a.4.4 0 0 1 .566 0l.848-.848Zm8.586 10.848a1.6 1.6 0 0 0 0-2.262l-.848.848a.4.4 0 0 1 0 .566l.848.848Zm-9.434 7.738a.4.4 0 0 1-.566 0l-.848.848a1.6 1.6 0 0 0 2.262 0l-.848-.848ZM3.13 12.283a.4.4 0 0 1 0-.566l-.848-.848a1.6 1.6 0 0 0 0 2.262l.848-.848ZM15 10.4h-5v1.2h5v-1.2ZM8.4 12v3h1.2v-3H8.4Zm1.6-1.6A1.6 1.6 0 0 0 8.4 12h1.2c0-.22.18-.4.4-.4v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTurnRightSign;
