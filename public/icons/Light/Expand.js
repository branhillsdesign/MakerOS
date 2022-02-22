import * as React from "react";

const SvgExpand = ({ title, titleId, ...props }) => (
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
    <path d="M12 4v16m-8-8h16" stroke="#555770" strokeWidth={1.2} />
    <path
      d="m15 4-3-3-3 3h6ZM20 15l3-3-3-3v6ZM15 20l-3 3-3-3h6ZM4 15l-3-3 3-3v6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgExpand;
