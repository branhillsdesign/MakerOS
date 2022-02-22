import * as React from "react";

const SvgWifi04 = ({ title, titleId, ...props }) => (
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
      d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l9-15.737A18.916 18.916 0 0 0 12 3Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M12 7c-2.53 0-4.903.671-6.951 1.845L12 21l6.951-12.155A13.936 13.936 0 0 0 12 7Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWifi04;
