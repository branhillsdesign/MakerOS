import * as React from "react";

const SvgBikiniTop = ({ title, titleId, ...props }) => (
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
      d="M8 5c-.518.712-1.192 1.928-1.753 3.5m0 0C7.331 9.167 9.7 11.4 10.5 15M6.247 8.5C4.165 10 .7 14 3.5 18c1.5.167 5-.2 7-3m0 0c.166.167.7.5 1.5.5s1.333-.333 1.5-.5M16 5c.518.712 1.192 1.928 1.752 3.5m0 0c-1.084.667-3.452 2.9-4.252 6.5m4.252-6.5C19.835 10 23.3 14 20.5 18c-1.5.167-5-.2-7-3"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Bikini_Top_svg__a"
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
    <g mask="url(#Bikini_Top_svg__a)">
      <path
        d="M8 5c-.518.712-1.192 1.928-1.753 3.5m0 0C7.331 9.167 9.7 11.4 10.5 15M6.247 8.5C4.165 10 .7 14 3.5 18c1.5.167 5-.2 7-3m0 0c.166.167.7.5 1.5.5s1.333-.333 1.5-.5M16 5c.518.712 1.192 1.928 1.752 3.5m0 0c-1.084.667-3.452 2.9-4.252 6.5m4.252-6.5C19.835 10 23.3 14 20.5 18c-1.5.167-5-.2-7-3"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBikiniTop;
