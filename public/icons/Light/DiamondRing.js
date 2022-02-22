import * as React from "react";

const SvgDiamondRing = ({ title, titleId, ...props }) => (
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
      d="M10.364 2v-.6h-.245l-.175.171.42.429ZM9 3.333l-.42-.429-.46.45.481.428L9 3.333ZM13.636 2l.42-.429-.175-.171h-.245V2ZM15 3.333l.399.449.48-.428-.46-.45-.419.43ZM19.4 14a7.4 7.4 0 0 1-7.4 7.4v1.2a8.6 8.6 0 0 0 8.6-8.6h-1.2ZM12 21.4A7.4 7.4 0 0 1 4.6 14H3.4a8.6 8.6 0 0 0 8.6 8.6v-1.2ZM4.6 14A7.4 7.4 0 0 1 12 6.6V5.4A8.6 8.6 0 0 0 3.4 14h1.2ZM12 6.6a7.4 7.4 0 0 1 7.4 7.4h1.2A8.6 8.6 0 0 0 12 5.4v1.2ZM9.944 1.571 8.581 2.904l.838.858 1.364-1.333-.839-.858Zm-1.343 2.21 3 2.667.798-.896-3-2.667-.798.897Zm4.616-1.352 1.364 1.333.838-.858-1.363-1.333-.84.858Zm1.384.456-3 2.667.798.896 3-2.666-.798-.897ZM13.636 1.4h-3.272v1.2h3.272V1.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDiamondRing;
