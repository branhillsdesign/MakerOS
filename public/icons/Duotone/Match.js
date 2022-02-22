import * as React from "react";

const SvgMatch = ({ title, titleId, ...props }) => (
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
      d="M18.021 11.973A4.956 4.956 0 0 1 17.5 12c-2.485 0-4.5-1.847-4.5-4.125 0-1.476.728-3.146 2-3.875 0 .9.5 2 1.5 2 2.014 0 1.765-2.75 1.5-4 1.412.417 4 2.175 4 5.875 0 1.464-.832 2.75-2.087 3.482"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m2 22 16.143-9.719m0 0a1 1 0 1 0 1.713-1.03 1 1 0 0 0-1.713 1.03Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMatch;
