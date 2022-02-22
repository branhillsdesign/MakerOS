import * as React from "react";

const SvgDashboard = ({ title, titleId, ...props }) => (
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
    <mask
      id="Dashboard_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={18}
    >
      <path d="M0 0h24v18H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Dashboard_svg__a)">
      <path
        d="M1.6 16C1.6 10.256 6.256 5.6 12 5.6c5.744 0 10.4 4.656 10.4 10.4 0 2.406-.817 4.62-2.188 6.383H3.788A10.352 10.352 0 0 1 1.6 16Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M12 18.4a1.4 1.4 0 0 1-.822-2.533l5.018-3.063-3.062 5.017c-.255.352-.668.579-1.134.579Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgDashboard;
