import * as React from "react";

const SvgPinCrossed = ({ title, titleId, ...props }) => (
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
      id="Pin_Crossed_svg__a"
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
    <g mask="url(#Pin_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="m12.697 20.261.441.407-.441-.407Zm-1.394 0-.441.407.441-.407ZM18.4 10c0 .647-.24 1.463-.678 2.389-.433.916-1.035 1.89-1.701 2.843-1.333 1.904-2.888 3.67-3.766 4.623l.883.813c.893-.97 2.49-2.78 3.866-4.748.688-.984 1.33-2.02 1.802-3.018.468-.99.794-1.994.794-2.902h-1.2Zm-6.655 9.855c-.878-.954-2.433-2.719-3.766-4.623-.666-.952-1.268-1.927-1.7-2.843C5.84 11.463 5.6 10.647 5.6 10H4.4c0 .908.326 1.913.793 2.902.473.999 1.115 2.034 1.803 3.018 1.377 1.968 2.973 3.778 3.866 4.748l.883-.813ZM5.6 10A6.4 6.4 0 0 1 12 3.6V2.4A7.6 7.6 0 0 0 4.4 10h1.2ZM12 3.6a6.4 6.4 0 0 1 6.4 6.4h1.2A7.6 7.6 0 0 0 12 2.4v1.2Zm.255 16.255a.34.34 0 0 1-.51 0l-.883.813c.617.67 1.66.67 2.276 0l-.883-.813ZM14.4 10a2.4 2.4 0 0 1-2.4 2.4v1.2a3.6 3.6 0 0 0 3.6-3.6h-1.2ZM12 12.4A2.4 2.4 0 0 1 9.6 10H8.4a3.6 3.6 0 0 0 3.6 3.6v-1.2ZM9.6 10A2.4 2.4 0 0 1 12 7.6V6.4A3.6 3.6 0 0 0 8.4 10h1.2ZM12 7.6a2.4 2.4 0 0 1 2.4 2.4h1.2A3.6 3.6 0 0 0 12 6.4v1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgPinCrossed;
