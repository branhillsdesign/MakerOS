import * as React from "react";

const SvgSmallArrowDown = ({ title, titleId, ...props }) => (
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
    <mask id="Small_Arrow_Down_svg__a" fill="#fff">
      <path d="m7 10.5 5 5 5-5H7Z" />
    </mask>
    <path
      d="m12 15.5-.848.849.848.848.848-.848L12 15.5Zm-5-5V9.3H4.103l2.048 2.048L7 10.5Zm10 0 .849.848L19.897 9.3H17v1.2Zm-4.152 4.152-5-5-1.697 1.697 5 5 1.697-1.697ZM7 11.7h10V9.3H7v2.4Zm9.151-2.049-5 5 1.697 1.698 5-5-1.697-1.698Z"
      fill="#555770"
      mask="url(#Small_Arrow_Down_svg__a)"
    />
  </svg>
);

export default SvgSmallArrowDown;
