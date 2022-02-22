import * as React from "react";

const Svg361 = ({ title, titleId, ...props }) => (
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
      id="361_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={6}
      width={22}
      height={13}
    >
      <path d="M12 19v-5h4v5h7V6H1v13h11Z" fill="#fff" />
    </mask>
    <g mask="url(#361_svg__a)">
      <path
        d="M21 12c0 .798-.673 1.79-2.376 2.641C16.98 15.463 14.64 16 12 16c-2.64 0-4.98-.537-6.624-1.359C3.673 13.79 3 12.798 3 12s.673-1.79 2.376-2.641C7.02 8.537 9.36 8 12 8c2.64 0 4.98.537 6.624 1.359C20.327 10.21 21 11.202 21 12Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default Svg361;
