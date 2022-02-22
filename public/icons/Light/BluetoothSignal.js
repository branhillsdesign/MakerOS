import * as React from "react";

const SvgBluetoothSignal = ({ title, titleId, ...props }) => (
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
      id="Bluetooth_Signal_svg__a"
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
    <g mask="url(#Bluetooth_Signal_svg__a)">
      <path
        d="M6 6.5 16.5 16 12 20V4l4.5 4L6 17.5"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <mask
      id="Bluetooth_Signal_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={16}
      y={5}
      width={7}
      height={14}
    >
      <path d="m23 5-7 7 7 7V5Z" fill="#fff" />
    </mask>
    <g mask="url(#Bluetooth_Signal_svg__b)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={11} cy={12} r={11.4} />
      <circle cx={11} cy={12} r={7.4} />
    </g>
  </svg>
);

export default SvgBluetoothSignal;
