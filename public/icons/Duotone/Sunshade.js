import * as React from "react";

const SvgSunshade = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Sunshade_svg__a)" strokeWidth={2}>
      <path
        d="M6.282 6.782a9 9 0 0 0-.344 12.365l2.819-2.819M6.282 6.782a9 9 0 0 1 12.365-.343l-2.819 2.818M6.282 6.782c-.354 2.004-.354 6.718 2.475 9.546M6.282 6.782C8.286 6.43 13 6.43 15.828 9.257m-7.071 7.071 7.071-7.07"
        stroke="#555770"
      />
      <path d="m19.717 20.218-5.656-5.657" stroke="currentColor" />
    </g>
    <defs>
      <clipPath id="Sunshade_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSunshade;
