import * as React from "react";

const SvgBluetoothCrossed = ({ title, titleId, ...props }) => (
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
      id="Bluetooth_Crossed_svg__a"
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
    <g mask="url(#Bluetooth_Crossed_svg__a)">
      <path d="M3.5 4 20 20.5" stroke="#555770" strokeWidth={1.5} />
      <mask
        id="Bluetooth_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={3}
        width={24}
        height={18}
      >
        <path fill="#fff" d="M0 3h24v18H0z" />
      </mask>
      <g mask="url(#Bluetooth_Crossed_svg__b)">
        <path
          d="M6 6.5 16.5 16 12 20V4l4.5 4L6 17.5"
          stroke="#555770"
          strokeWidth={1.2}
        />
      </g>
    </g>
  </svg>
);

export default SvgBluetoothCrossed;
