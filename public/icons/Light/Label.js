import * as React from "react";

const SvgLabel = ({ title, titleId, ...props }) => (
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
      d="m21 12 .48.36.27-.36-.27-.36L21 12Zm-4.2-5.6.48-.36-.48.36Zm0 11.2.48.36-.48-.36ZM3.4 7v10h1.2V7H3.4ZM5 18.6h11v-1.2H5v1.2Zm12.28-.64 4.2-5.6-.96-.72-4.2 5.6.96.72Zm4.2-6.32-4.2-5.6-.96.72 4.2 5.6.96-.72ZM16 5.4H5v1.2h11V5.4Zm1.28.64A1.6 1.6 0 0 0 16 5.4v1.2a.4.4 0 0 1 .32.16l.96-.72ZM16 18.6a1.6 1.6 0 0 0 1.28-.64l-.96-.72a.4.4 0 0 1-.32.16v1.2ZM3.4 17A1.6 1.6 0 0 0 5 18.6v-1.2a.4.4 0 0 1-.4-.4H3.4ZM4.6 7c0-.22.18-.4.4-.4V5.4A1.6 1.6 0 0 0 3.4 7h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLabel;
