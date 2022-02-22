import * as React from "react";

const SvgPalm = ({ title, titleId, ...props }) => (
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
      d="M10.5 23V9.485L12 8l1.5 1.485V23M6 23h12"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M12 8 4.929 1h2.357C9.889 1 12 3.09 12 5.667M12 8V5.667M12 8H9.643c-2.604 0-4.714 2.09-4.714 4.667V15L10.5 9.485 12 8Zm0 0H2l1.667-1.65a4.748 4.748 0 0 1 6.666 0L12 8Zm0 0 7.071-7h-2.357C14.111 1 12 3.09 12 5.667M12 8h2.357c2.604 0 4.714 2.09 4.714 4.667V15L13.5 9.485 12 8Zm0 0h10l-1.667-1.65a4.748 4.748 0 0 0-6.666 0L12 8Z"
      stroke="#555770"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgPalm;
