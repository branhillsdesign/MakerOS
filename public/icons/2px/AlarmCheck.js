import * as React from "react";

const SvgAlarmCheck = ({ title, titleId, ...props }) => (
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
    <mask id="Alarm_Check_svg__a" fill="#fff">
      <path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </mask>
    <path
      d="m11 16-.707.707.707.707.707-.707L11 16Zm-3.707-2.293 3 3 1.414-1.414-3-3-1.414 1.414Zm4.414 3 5.5-5.5-1.414-1.414-5.5 5.5 1.414 1.414ZM19 13a7 7 0 0 1-7 7v4c6.075 0 11-4.925 11-11h-4Zm-7 7a7 7 0 0 1-7-7H1c0 6.075 4.925 11 11 11v-4Zm-7-7a7 7 0 0 1 7-7V2C5.925 2 1 6.925 1 13h4Zm7-7a7 7 0 0 1 7 7h4c0-6.075-4.925-11-11-11v4Z"
      fill="#555770"
      mask="url(#Alarm_Check_svg__a)"
    />
    <mask
      id="Alarm_Check_svg__b"
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
    <g mask="url(#Alarm_Check_svg__b)" fill="#555770">
      <path d="M9 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </g>
  </svg>
);

export default SvgAlarmCheck;
