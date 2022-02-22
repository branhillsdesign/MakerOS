import * as React from "react";

const SvgCompass = ({ title, titleId, ...props }) => (
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
      d="M22 12a9.966 9.966 0 0 1-2.929 7.071A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12a9.966 9.966 0 0 1 2.929-7.071A9.966 9.966 0 0 1 12 2c5.523 0 10 4.477 10 10Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m10.461 10.564-3.844 6.407c-.16.268.144.572.412.412l6.407-3.844a.3.3 0 0 0 .103-.103l3.844-6.407c.16-.268-.144-.572-.412-.412l-6.407 3.844a.302.302 0 0 0-.103.103Zm2.246 2.143a1 1 0 1 0-1.414-1.414 1 1 0 0 0 1.414 1.414Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgCompass;
