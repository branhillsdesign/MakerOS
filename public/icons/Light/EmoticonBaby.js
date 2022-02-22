import * as React from "react";

const SvgEmoticonBaby = ({ title, titleId, ...props }) => (
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
      d="m2.935 8.77.262-.086.105-.256A9.403 9.403 0 0 1 12 2.6a9.403 9.403 0 0 1 8.698 5.828l.105.256.262.086a3.402 3.402 0 0 1 0 6.46l-.262.086-.105.256A9.403 9.403 0 0 1 12 21.4a9.403 9.403 0 0 1-8.698-5.828l-.105-.256-.262-.086a3.402 3.402 0 0 1 0-6.46Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3M9 11.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm6 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonBaby;
