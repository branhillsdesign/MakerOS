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
    <mask id="Alarm_X_svg__a" fill="#fff">
      <path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    </mask>
    <path
      d="m12.424 13.424 3-3-.848-.848-3 3 .848.848Zm-.848-.848-3 3 .848.848 3-3-.848-.848Zm0 .848 3 3 .848-.848-3-3-.848.848Zm.848-.848-3-3-.848.848 3 3 .848-.848ZM19.8 13a7.8 7.8 0 0 1-7.8 7.8v2.4c5.633 0 10.2-4.567 10.2-10.2h-2.4ZM12 20.8A7.8 7.8 0 0 1 4.2 13H1.8c0 5.633 4.567 10.2 10.2 10.2v-2.4ZM4.2 13A7.8 7.8 0 0 1 12 5.2V2.8C6.367 2.8 1.8 7.367 1.8 13h2.4ZM12 5.2a7.8 7.8 0 0 1 7.8 7.8h2.4c0-5.633-4.567-10.2-10.2-10.2v2.4Z"
      fill="#555770"
      mask="url(#Alarm_X_svg__a)"
    />
    <mask
      id="Alarm_X_svg__b"
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
    <g mask="url(#Alarm_X_svg__b)">
      <path
        d="M8.4 6a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Zm14 0a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgAlarmX;
