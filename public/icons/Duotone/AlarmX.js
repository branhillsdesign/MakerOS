import * as React from "react";

const SvgAlarmX = ({ title, titleId, ...props }) => (
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
      d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m12 13 3-3m-3 3-3 3m3-3 3 3m-3-3-3-3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Alarm_X_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={1}
      width={24}
      height={12}
    >
      <path
        d="M12 2C5.925 2 1 6.925 1 13H0V1h24v12h-1c0-6.075-4.925-11-11-11Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Alarm_X_svg__a)" fill="currentColor">
      <path d="M9 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </g>
  </svg>
);

export default SvgAlarmX;
