import * as React from "react";

const SvgSnowwithThunder = ({ title, titleId, ...props }) => (
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
      id="Snow_with_Thunder_svg__a"
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
    <g mask="url(#Snow_with_Thunder_svg__a)">
      <path
        d="M8.5 18a6.5 6.5 0 1 1 5.9-9.232c.248.535.87.778 1.414.558l-.371-.917.37.917A4.5 4.5 0 1 1 17.5 18H8.501Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
    <path
      d="m11.5 15.313-6 4.374m0-4.375 6 4.376M8.5 14v7"
      stroke="#555770"
      strokeWidth={1.5}
    />
    <path
      d="M16.737 3v-.75a.75.75 0 0 0-.69.456l.69.294ZM14 9.429l-.69-.294a.75.75 0 0 0 .69 1.044v-.75Zm2.754 0 .694.284a.75.75 0 0 0-.694-1.034v.75ZM14.474 15l-.694-.284a.75.75 0 0 0 1.23.808L14.475 15ZM22 7.286l.537.523A.75.75 0 0 0 22 6.536v.75Zm-3.877 0-.632-.404a.75.75 0 0 0 .632 1.154v-.75ZM20.86 3l.632.404a.75.75 0 0 0-.632-1.154V3Zm-4.813-.294L13.31 9.135l1.38.587 2.737-6.428-1.38-.588ZM14 10.18h2.754v-1.5H14v1.5Zm2.06-1.035-2.28 5.572 1.388.568 2.28-5.571-1.388-.569Zm-1.05 6.38 7.527-7.715-1.074-1.047-7.526 7.714 1.074 1.048ZM22 6.536h-3.877v1.5H22v-1.5Zm-3.245 1.153 2.737-4.285-1.265-.808-2.736 4.286 1.264.807ZM20.86 2.25h-4.123v1.5h4.123v-1.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSnowwithThunder;
