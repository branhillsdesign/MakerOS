import * as React from "react";

const SvgDropCrossed = ({ title, titleId, ...props }) => (
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
      id="Drop_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Drop_Crossed_svg__a)">
      <path
        d="M19 15a7 7 0 1 1-14 0c0-3.866 7-12 7-12s7 8.134 7 12Z"
        stroke="currentColor"
        strokeWidth={2}
      />
      <mask
        id="Drop_Crossed_svg__b"
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
      <g mask="url(#Drop_Crossed_svg__b)">
        <path
          d="M19 15a7 7 0 1 1-14 0c0-3.866 7-12 7-12s7 8.134 7 12Z"
          stroke="#555770"
          strokeWidth={2}
        />
      </g>
      <path d="M2.583 4 21 22.417" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgDropCrossed;
