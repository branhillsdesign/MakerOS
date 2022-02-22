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
      d="M20.4 13a8.4 8.4 0 1 1-16.8 0 8.4 8.4 0 0 1 16.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      clipRule="evenodd"
      d="M10.88 9.583 11.137 8h1.726l.257 1.583a3.6 3.6 0 0 1 1.277.734l1.49-.566.863 1.498-1.226 1.005a3.602 3.602 0 0 1 0 1.492l1.226 1.005-.863 1.498-1.488-.568c-.367.327-.8.58-1.279.736L12.863 18h-1.726l-.257-1.583a3.6 3.6 0 0 1-1.277-.734l-1.49.566-.863-1.498 1.226-1.005a3.602 3.602 0 0 1 0-1.492L7.25 11.249l.862-1.498 1.49.568a3.6 3.6 0 0 1 1.278-.736ZM12 14.667c.918 0 1.662-.746 1.662-1.667 0-.92-.744-1.667-1.662-1.667-.918 0-1.662.746-1.662 1.667 0 .92.744 1.667 1.662 1.667Z"
      stroke="#555770"
      strokeWidth={1.2}
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
    <g mask="url(#Alarm_Settings_svg__a)">
      <path
        d="M8.4 6a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Zm14 0a3.4 3.4 0 1 1-6.8 0 3.4 3.4 0 0 1 6.8 0Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
  </svg>
);

export default SvgAlarmSettings;
