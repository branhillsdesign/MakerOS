import * as React from "react";

const SvgDoubleCheck = ({ title, titleId, ...props }) => (
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
      d="m12.244 17-.716.698.716.734.716-.734-.716-.698Zm-4.878 0-.716.698.716.734.716-.734L7.366 17Zm-1.204-4.802 5.366 5.5 1.432-1.396-5.366-5.5-1.432 1.396Zm6.798 5.5 9.756-10-1.432-1.396-9.756 10 1.432 1.396Zm-11.676-5.5 5.366 5.5 1.432-1.396-5.366-5.5-1.432 1.396Zm6.798 5.5.691-.709-1.431-1.396-.692.709 1.432 1.396Zm4.182-4.287 5.574-5.713-1.432-1.396-5.573 5.713 1.431 1.396Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDoubleCheck;
