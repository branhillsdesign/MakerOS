import * as React from "react";

const SvgApple = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Apple_svg__a)" strokeWidth={2}>
      <path
        d="M12 6c1.342.329 2.903-.06 4.037-1.133 1.133-1.074 1.54-2.55 1.188-3.817-1.342-.328-2.904.06-4.037 1.134C12.055 3.257 11.648 4.734 12 6Z"
        stroke="currentColor"
      />
      <path
        d="M7.95 7c1.8 0 2.25.882 4.05.882 1.8 0 2.25-.882 4.05-.882C18.3 7 21 9.206 21 13.618 21 18.029 17.85 22 16.05 22c-1.8 0-2.7-.882-4.05-.882-1.35 0-2.25.882-4.05.882C6.15 22 3 18.03 3 13.618 3 9.206 5.7 7 7.95 7Z"
        stroke="#555770"
      />
    </g>
    <defs>
      <clipPath id="Apple_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgApple;
