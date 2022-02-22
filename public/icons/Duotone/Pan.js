import * as React from "react";

const SvgPan = ({ title, titleId, ...props }) => (
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
      d="m13.707 13.207 2-2-1.414-1.414-2 2 1.414 1.414ZM12 10.5v2h2v-2h-2Zm3-1h-2v2h2v-2Zm0 2h9v-2h-9v2Zm-2-2H1v2h12v-2Zm-1 3v1.195h2V12.5h-2Z"
      fill="currentColor"
    />
    <path
      d="m13.707 13.207 2-2-1.414-1.414-2 2 1.414 1.414ZM12 11.5v1h2v-1h-2Zm3-2h-1v2h1v-2Zm0 2h9v-2h-9v2Zm-3 1v1.195h2V12.5h-2Zm2-1v-2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <path
      d="M8 6a1 1 0 0 0-2 0h2ZM1.424 8.738l-.482-.876.482.876ZM12 17H2v2h10v-2Zm0-4.5V17h2v-4.5h-2Zm0-3v1h2v-1h-2Zm0 1v2h2v-2h-2ZM1.906 9.614C2.56 9.254 4.255 8.5 7 8.5v-2c-3.128 0-5.151.863-6.058 1.362l.964 1.752ZM7 8.5c2.745 0 4.44.754 5.094 1.114l.964-1.752C12.151 7.362 10.128 6.5 7 6.5v2ZM2 17v-6.5H0V17h2Zm0-6.5v-1H0v1h2Zm6-3V6H6v1.5h2ZM2 17H0a2 2 0 0 0 2 2v-2Zm10 2a2 2 0 0 0 2-2h-2v2Zm2-9.5c0-.62-.297-1.283-.942-1.638l-.964 1.752a.209.209 0 0 1-.082-.08C12 9.511 12 9.498 12 9.5h2ZM.942 7.862C.297 8.217 0 8.881 0 9.5h2c0-.002 0 .01-.012.034a.209.209 0 0 1-.082.08L.942 7.862Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPan;
