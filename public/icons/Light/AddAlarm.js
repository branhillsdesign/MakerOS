import * as React from "react";

const SvgAddAlarm = ({ title, titleId, ...props }) => (
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
      d="M11.4 13.6V18h1.2v-4.4H17v-1.2h-4.4V8h-1.2v4.4H7v1.2h4.4Zm9-.6a8.4 8.4 0 1 1-16.8 0 8.4 8.4 0 0 1 16.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <mask
      id="Add_Alarm_svg__a"
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
    <g mask="url(#Add_Alarm_svg__a)">
      <path
        d="M8.4 6a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Zm14 0a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgAddAlarm;
