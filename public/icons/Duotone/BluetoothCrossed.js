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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Bluetooth_Crossed_svg__a)">
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
      <g mask="url(#Bluetooth_Crossed_svg__b)" strokeWidth={2}>
        <path d="m6 6.5 6 5.429v.142L6 17.5" stroke="currentColor" />
        <path
          d="M12 12.071 16.5 8 12 4v7.929m0 .142V20l4.5-4-4.5-4.071m0 .142v-.142"
          stroke="#555770"
        />
      </g>
      <path d="m3.524 4.941 15.5 15.5" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgBluetoothCrossed;
