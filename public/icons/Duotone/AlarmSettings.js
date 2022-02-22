import * as React from "react";

const SvgAlarmSettings = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.057 10.095.217-1.345h1.452l.217 1.345c.402.133.767.347 1.075.624l1.256-.48.726 1.273-1.033.854a3.087 3.087 0 0 1 0 1.268l1.033.854-.726 1.274-1.254-.483a3.025 3.025 0 0 1-1.077.626l-.217 1.345h-1.452l-.217-1.345a3.025 3.025 0 0 1-1.075-.624l-1.256.48L8 14.489l1.032-.854a3.09 3.09 0 0 1 0-1.268L8 11.512l.726-1.274 1.254.483a3.025 3.025 0 0 1 1.077-.626ZM12 14.417c.773 0 1.4-.635 1.4-1.417s-.627-1.417-1.4-1.417c-.773 0-1.4.635-1.4 1.417s.627 1.417 1.4 1.417Z"
      fill="currentColor"
    />
    <mask
      id="Alarm_Settings_svg__a"
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
    <g mask="url(#Alarm_Settings_svg__a)" fill="currentColor">
      <path d="M9 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
    </g>
  </svg>
);

export default SvgAlarmSettings;
