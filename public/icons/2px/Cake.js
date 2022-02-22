import * as React from "react";

const SvgCake = ({ title, titleId, ...props }) => (
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
      d="m10 5 .385-.923-.377-.157-.38.152L10 5ZM2 8.2l-.371-.928L1 7.523V8.2h1ZM22 10h1v-.667l-.615-.256L22 10ZM2 17.2H1v.914l.91.082L2 17.2ZM22 19l-.09.996 1.09.098V19h-1ZM9.629 4.072l-8 3.2.742 1.856 8-3.2-.742-1.856ZM1.91 9.196l20 1.8.18-1.992-20-1.8-.18 1.992Zm20.475-.12-12-5-.77 1.847 12 5 .77-1.846ZM1.91 13.397l20 1.8.18-1.992-20-1.8-.18 1.992Zm0 4.8 20 1.8.18-1.992-20-1.8-.18 1.992ZM21 10v4.2h2V10h-2Zm0 4.2V19h2v-4.8h-2Zm-20-6v4.2h2V8.2H1Zm0 4.2v4.8h2v-4.8H1Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCake;
