import * as React from "react";

const SvgPainting = ({ title, titleId, ...props }) => (
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
      d="M12 2v3M4 23v-1l2.353-5M12 5H4v12h2.353M12 5h8v12h-2.353M12 5v1m8 17v-1l-2.353-5M6.353 17H12m5.647 0H12m0 0v6m0-17h-2m2 0h2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPainting;
