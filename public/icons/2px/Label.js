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
      d="m21 12 .8.6.45-.6-.45-.6-.8.6Zm-4.2-5.6.8-.6-.8.6Zm0 11.2.8.6-.8-.6ZM3 7v10h2V7H3Zm2 12h11v-2H5v2Zm12.6-.8 4.2-5.6-1.6-1.2L16 17l1.6 1.2Zm4.2-6.8-4.2-5.6L16 7l4.2 5.6 1.6-1.2ZM16 5H5v2h11V5Zm1.6.8A2 2 0 0 0 16 5v2l1.6-1.2ZM16 19a2 2 0 0 0 1.6-.8L16 17v2ZM3 17a2 2 0 0 0 2 2v-2H3ZM5 7V5a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLabel;
