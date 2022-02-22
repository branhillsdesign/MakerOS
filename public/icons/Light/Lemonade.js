import * as React from "react";

const SvgLemonade = ({ title, titleId, ...props }) => (
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
      d="M16 21.4H8v1.2h8v-1.2ZM7.6 21V7H6.4v14h1.2Zm0-14V3H6.4v4h1.2Zm8.8-4v4h1.2V3h-1.2Zm0 4v14h1.2V7h-1.2ZM7 7.6h10V6.4H7v1.2ZM14.422.84l-5 18 1.156.32 5-18-1.156-.32ZM8 21.4a.4.4 0 0 1-.4-.4H6.4A1.6 1.6 0 0 0 8 22.6v-1.2Zm8 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLemonade;
