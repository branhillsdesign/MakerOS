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
      d="M4 23v-1l2.353-5M20 23v-1l-2.353-5M12 17v6"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M20 17V5H4v12h16Z" stroke="currentColor" strokeWidth={2} />
    <path d="M12 2v4m0 0h-2m2 0h2" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgPainting;
