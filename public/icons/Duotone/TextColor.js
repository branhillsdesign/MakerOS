import * as React from "react";

const SvgTextColor = ({ title, titleId, ...props }) => (
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
    <path d="M3 20h18" stroke="#555770" strokeWidth={2} />
    <path
      d="M5.257 2.926 8.37 4.772m0 0 8.462 5.019-3.972 6.695-8.462-5.019L8.37 4.772Z"
      stroke="#555770"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="m14.762 10.203-8.13.809 5.63 3.343 2.5-4.152ZM20.583 13.822a1.75 1.75 0 1 1-3.502 0c0-.967 1.751-2.898 1.751-2.898s1.751 1.93 1.751 2.898Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgTextColor;
