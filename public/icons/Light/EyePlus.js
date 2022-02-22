import * as React from "react";

const SvgEyePlus = ({ title, titleId, ...props }) => (
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
      d="M12 18.4c-4.762 0-8.782-2.685-10.352-6.4C3.218 8.286 7.238 5.6 12 5.6c4.762 0 8.782 2.686 10.352 6.4-1.57 3.714-5.59 6.4-10.352 6.4ZM12 8v8m-4-4h8"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEyePlus;
