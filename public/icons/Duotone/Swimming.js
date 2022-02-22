import * as React from "react";

const SvgSwimming = ({ title, titleId, ...props }) => (
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
      d="M2 15.5c.316 0 .731-.15 1.152-.354 1.166-.567 2.565-.634 3.62.12a2.99 2.99 0 0 0 3.467-.008 3.045 3.045 0 0 1 3.522 0 2.99 2.99 0 0 0 3.468.007c1.054-.753 2.453-.686 3.619-.12.42.205.836.355 1.152.355M2 19.803c.316 0 .731-.15 1.152-.354 1.166-.567 2.565-.634 3.62.12a2.99 2.99 0 0 0 3.467-.008 3.045 3.045 0 0 1 3.522 0 2.99 2.99 0 0 0 3.468.007c1.054-.753 2.453-.686 3.619-.12.42.206.836.355 1.152.355"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Swimming_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={20}
      height={12}
    >
      <path
        d="M3.152 11.449c-.42.204-.836.354-1.152.354V1h20v10.803c-.316 0-.731-.15-1.152-.354-1.166-.567-2.565-.634-3.62.12a2.99 2.99 0 0 1-3.467-.008 3.045 3.045 0 0 0-3.522 0 2.99 2.99 0 0 1-3.468.007c-1.054-.753-2.453-.686-3.619-.12Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Swimming_svg__a)">
      <path
        d="m12 8-1.85-1.85a7 7 0 0 0-2.802-1.713C6.594 4.194 5.792 4.17 5 4.17M12 8l-2.25 2M12 8l2 2m-4.25 0L7.5 12H16l-2-2m-4.25 0H14"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path d="M19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="#555770" />
  </svg>
);

export default SvgSwimming;
