import * as React from "react";

const SvgArrowsVertical = ({ title, titleId, ...props }) => (
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
    <path d="M12 4v16" stroke="#555770" strokeWidth={2} />
    <path d="m15 4-3-3-3 3h6ZM15 20l-3 3-3-3h6Z" fill="#555770" />
  </svg>
);

export default SvgArrowsVertical;
