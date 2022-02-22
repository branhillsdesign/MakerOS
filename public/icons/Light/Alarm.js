import * as React from "react";

const SvgAlarm = ({ title, titleId, ...props }) => (
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
      d="M11.4 13v.248l.176.176 3.272 3.273.849-.848L12.6 12.75V8h-1.2v5Zm9 0a8.4 8.4 0 1 1-16.8 0 8.4 8.4 0 0 1 16.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <mask
      id="Alarm_svg__a"
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
    <g mask="url(#Alarm_svg__a)">
      <mask id="Alarm_svg__b" fill="#fff">
        <path d="M9 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      </mask>
      <path
        d="m1.535 8-1.039.6 1.04-.6ZM7 2.535l.6-1.039-.6 1.04ZM7.8 6A2.8 2.8 0 0 1 5 8.8v2.4A5.2 5.2 0 0 0 10.2 6H7.8ZM2.2 6A2.8 2.8 0 0 1 5 3.2V.8A5.2 5.2 0 0 0-.2 6h2.4Zm19.6 0A2.8 2.8 0 0 1 19 8.8v2.4A5.2 5.2 0 0 0 24.2 6h-2.4ZM19 8.8A2.8 2.8 0 0 1 16.2 6h-2.4a5.2 5.2 0 0 0 5.2 5.2V8.8ZM16.2 6A2.8 2.8 0 0 1 19 3.2V.8A5.2 5.2 0 0 0 13.8 6h2.4ZM19 3.2A2.8 2.8 0 0 1 21.8 6h2.4A5.2 5.2 0 0 0 19 .8v2.4ZM5 8.8c-1.035 0-1.94-.56-2.426-1.4L.496 8.6A5.198 5.198 0 0 0 5 11.2V8.8ZM2.574 7.4A2.782 2.782 0 0 1 2.2 6H-.2c0 .945.253 1.835.696 2.6l2.078-1.2ZM5 3.2c.512 0 .989.136 1.4.374l1.2-2.078A5.182 5.182 0 0 0 5 .8v2.4Zm1.4.374C7.24 4.06 7.8 4.965 7.8 6h2.4a5.198 5.198 0 0 0-2.6-4.504L6.4 3.574Z"
        fill="#555770"
        mask="url(#Alarm_svg__b)"
      />
    </g>
  </svg>
);

export default SvgAlarm;
