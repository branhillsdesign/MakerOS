import * as React from "react";

const SvgLinkCrossed = ({ title, titleId, ...props }) => (
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
      id="Link_Crossed_svg__a"
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
    <g mask="url(#Link_Crossed_svg__a)">
      <path d="M3.5 4 20 20.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="m18.647 10.162-2.829 2.828.849.848 2.828-2.828-.848-.848Zm-7.637-1.98 2.829-2.829-.849-.848-2.828 2.828.848.849Zm0 11.313 2.829-2.828-.849-.849-2.828 2.829.848.848Zm-3.677-9.334L4.505 12.99l.848.848 2.829-2.828-.849-.848Zm7.778-2.12-7.07 7.07.848.849 7.07-7.071-.848-.849ZM5.353 18.646a3.4 3.4 0 0 1 0-4.809l-.848-.848a4.6 4.6 0 0 0 0 6.505l.848-.848ZM18.647 5.353a3.4 3.4 0 0 1 0 4.809l.848.848a4.6 4.6 0 0 0 0-6.505l-.848.848ZM4.505 19.495a4.6 4.6 0 0 0 6.505 0l-.848-.848a3.4 3.4 0 0 1-4.809 0l-.848.848Zm14.99-14.99a4.6 4.6 0 0 0-6.505 0l.848.848a3.4 3.4 0 0 1 4.809 0l.848-.848Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgLinkCrossed;
