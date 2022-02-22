import * as React from "react";

const SvgWifiQuestion = ({ title, titleId, ...props }) => (
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
      d="m19.57 17.403-.446-.402.445.402Zm-2.97-2.652c0-1.236 1.023-2.151 2.189-2.151v-1.2c-1.77 0-3.389 1.396-3.389 3.35h1.2Zm2.189-2.151c1.149 0 2.129.899 2.129 2.15h1.2a3.316 3.316 0 0 0-3.33-3.35v1.2Zm2.129 2.15c0 .405-.15.669-.454.982-.166.17-.357.334-.595.545-.23.205-.488.44-.745.723l.89.805c.21-.232.43-.433.652-.63.215-.19.453-.396.657-.606.436-.448.795-.995.795-1.818h-1.2ZM19.124 17c-.64.71-.935 1.583-.935 2.5h1.2c0-.65.204-1.229.625-1.695l-.89-.805Zm-.935 3.5v1.502h1.2V20.5h-1.2Z"
      fill="#555770"
    />
    <mask
      id="Wifi_Question_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M16 0H0v24h13.5V9.5H24V0h-8Z" fill="#fff" />
    </mask>
    <g mask="url(#Wifi_Question_svg__a)">
      <path
        d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l9-15.737A18.916 18.916 0 0 0 12 3Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <path
        d="M12 7c-2.53 0-4.903.671-6.951 1.845L12 21l6.951-12.155A13.936 13.936 0 0 0 12 7Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgWifiQuestion;
