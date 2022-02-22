import * as React from "react";

const SvgGift = ({ title, titleId, ...props }) => (
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
      d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 7.47v15.526M12.879 7.121A3 3 0 1 0 17.12 2.88 3 3 0 0 0 12.88 7.12Zm0 0L18 12.243M11.121 7.12A3 3 0 1 1 6.88 2.88 3 3 0 0 1 11.12 7.12Zm0 0L6 12.243"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGift;
