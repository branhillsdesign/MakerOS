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
      d="m3.06 9.15.437-.144.175-.426a9.003 9.003 0 0 1 16.656 0l.175.426.437.144a3.002 3.002 0 0 1 0 5.7l-.437.144-.175.426A9.003 9.003 0 0 1 12 21a9.003 9.003 0 0 1-8.328-5.58l-.175-.426-.437-.144a3.002 3.002 0 0 1 0-5.7Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonBaby;
