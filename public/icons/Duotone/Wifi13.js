import * as React from "react";

const SvgWifi13 = ({ title, titleId, ...props }) => (
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
      d="M12 9a9.954 9.954 0 0 0-5.802 1.854L12 21l5.802-10.146A9.954 9.954 0 0 0 12 9Z"
      fill="currentColor"
    />
    <path
      d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l9-15.737A18.916 18.916 0 0 0 12 3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWifi13;
