import * as React from "react";

const SvgRainwithThunder = ({ title, titleId, ...props }) => (
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
      id="Rain_with_Thunder_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={23}
    >
      <path
        d="M13.5 12H6L0 23V0h15l-5 11.5h4.5v5h2L24 9v14H13.5V12Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Rain_with_Thunder_svg__a)">
      <path
        d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path
      d="M11 18.421C11 19.845 9.88 21 8.5 21S6 19.845 6 18.421C6 16.997 8.5 14 8.5 14s2.5 2.997 2.5 4.421Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M16.737 3v-.6a.6.6 0 0 0-.552.365l.552.235ZM14 9.429l-.552-.235a.6.6 0 0 0 .552.835v-.6Zm2.754 0 .556.227a.6.6 0 0 0-.556-.827v.6ZM14.474 15l-.556-.227a.6.6 0 0 0 .985.646l-.43-.419ZM22 7.286l.43.419a.6.6 0 0 0-.43-1.02v.6Zm-3.877 0-.506-.323a.6.6 0 0 0 .506.923v-.6ZM20.86 3l.505.323a.6.6 0 0 0-.505-.923V3Zm-4.675-.235-2.737 6.429 1.104.47 2.737-6.429-1.104-.47ZM14 10.029h2.754v-1.2H14v1.2Zm2.2-.828-2.282 5.572 1.111.454 2.28-5.571L16.2 9.2Zm-1.297 6.218 7.527-7.714-.86-.838-7.526 7.714.86.838ZM22 6.686h-3.877v1.2H22v-1.2Zm-3.372.923 2.737-4.286-1.011-.646-2.737 4.286 1.011.646ZM20.86 2.4h-4.123v1.2h4.123V2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRainwithThunder;
