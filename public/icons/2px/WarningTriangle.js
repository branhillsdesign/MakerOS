import * as React from "react";

const SvgWarningTriangle = ({ title, titleId, ...props }) => (
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
    <g
      clipPath="url(#Warning_Triangle_svg__a)"
      stroke="#555770"
      strokeWidth={2}
    >
      <path d="M12 3.944 22.234 21H1.766L12 3.944ZM12 10v5m0 3v-1.5" />
    </g>
    <defs>
      <clipPath id="Warning_Triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgWarningTriangle;
