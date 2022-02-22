import * as React from "react";

const SvgMessageCrossed = ({ title, titleId, ...props }) => (
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
      id="Message_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Message_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="m17.25 17 .375-.468-.165-.132h-.21v.6Zm3.587 2.87-.374.468.374-.468ZM20 3.4H4v1.2h16V3.4ZM2.4 5v11h1.2V5H2.4Zm19.2 11V5h-1.2v11h1.2Zm0 3.792V16h-1.2v3.792h1.2Zm-4.725-2.324 3.588 2.87.75-.937-3.588-2.87-.75.938Zm.375-1.068H4v1.2h13.25v-1.2Zm3.15 3.392a.5.5 0 0 1 .812-.39l-.75.936a.7.7 0 0 0 1.138-.546h-1.2ZM4 3.4A1.6 1.6 0 0 0 2.4 5h1.2c0-.22.18-.4.4-.4V3.4Zm16 1.2c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 20 3.4v1.2ZM2.4 16A1.6 1.6 0 0 0 4 17.6v-1.2a.4.4 0 0 1-.4-.4H2.4Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgMessageCrossed;
