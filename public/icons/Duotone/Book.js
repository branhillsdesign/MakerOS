import * as React from "react";

const SvgBook = ({ title, titleId, ...props }) => (
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
      d="M12 5.646A11.72 11.72 0 0 1 18 4c1.402 0 2.749.247 4 .7v14.354a11.715 11.715 0 0 0-4-.7c-2.186 0-4.235.6-6 1.646m0-14.354V20m0-14.354A11.72 11.72 0 0 0 6 4c-1.403 0-2.749.247-4 .7v14.354c1.251-.453 2.597-.7 4-.7 2.186 0 4.235.6 6 1.646"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Book_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Book_svg__a)">
      <path
        d="M12 5.646A11.72 11.72 0 0 1 18 4c1.402 0 2.749.247 4 .7v14.354a11.715 11.715 0 0 0-4-.7c-2.186 0-4.235.6-6 1.646m0-14.354V20m0-14.354A11.72 11.72 0 0 0 6 4c-1.403 0-2.749.247-4 .7v14.354c1.251-.453 2.597-.7 4-.7 2.186 0 4.235.6 6 1.646"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBook;
