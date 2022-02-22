import * as React from "react";

const SvgBluetooth = ({ title, titleId, ...props }) => (
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
      id="Bluetooth_svg__a"
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
    <g mask="url(#Bluetooth_svg__a)" strokeWidth={2}>
      <path d="m6 6.5 6 5.429v.142L6 17.5" stroke="currentColor" />
      <path
        d="M12 12.071 16.5 8 12 4v7.929m0 .142V20l4.5-4-4.5-4.071m0 .142v-.142"
        stroke="#555770"
      />
    </g>
  </svg>
);

export default SvgBluetooth;
