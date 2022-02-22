import * as React from "react";

const SvgFastFood = ({ title, titleId, ...props }) => (
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
      id="Fast_Food_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={0}
      width={15}
      height={24}
    >
      <path d="M9 8.323V0h15v24h-6V8.323H9Z" fill="#fff" />
    </mask>
    <g mask="url(#Fast_Food_svg__a)">
      <path
        d="m22 6 .595.074.085-.674H22V6ZM12 6v-.6h-.68l.085.674L12 6Zm1.89 15.124-.595.075.595-.075Zm6.22 0-.596-.074.596.074ZM16.4 1v5h1.2V1h-1.2ZM22 5.4h-5v1.2h5V5.4Zm-.595.526-1.89 15.124 1.19.148 1.89-15.124-1.19-.148ZM12 6.6h5V5.4h-5v1.2Zm-.595-.526 1.89 15.124 1.19-.148-1.89-15.124-1.19.148ZM19.117 21.4h-4.234v1.2h4.234v-1.2Zm-5.822-.201c.1.8.78 1.401 1.588 1.401v-1.2a.4.4 0 0 1-.397-.35l-1.19.148Zm6.22-.15a.4.4 0 0 1-.398.351v1.2a1.6 1.6 0 0 0 1.588-1.402l-1.19-.148Z"
        fill="#555770"
      />
    </g>
    <mask
      id="Fast_Food_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={8}
      width={17}
      height={16}
    >
      <path
        d="M17 8H0v16h17v-2.594H.5v-2.803H17v-1.2H.5v-2.805H17V8Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Fast_Food_svg__b)">
      <path
        d="M14.9 21.4H2.1v1.2h12.8v-1.2ZM8.5 10.6c1.642 0 3.155.47 4.242 1.157 1.114.704 1.658 1.545 1.658 2.243h1.2c0-1.302-.956-2.461-2.217-3.257C12.095 9.929 10.358 9.4 8.5 9.4v1.2ZM2.6 14c0-.698.544-1.539 1.658-2.243C5.345 11.07 6.858 10.6 8.5 10.6V9.4c-1.858 0-3.595.53-4.883 1.343C2.357 11.539 1.4 12.698 1.4 14h1.2Zm-.6.6h13v-1.2H2v1.2Zm.6 7.3V18H1.4v3.9h1.2Zm0-3.9v-4H1.4v4h1.2Zm11.8-4v4h1.2v-4h-1.2Zm0 4v3.9h1.2V18h-1.2ZM2 18.6h13v-1.2H2v1.2Zm12.9 4a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2ZM2.1 21.4a.5.5 0 0 1 .5.5H1.4a.7.7 0 0 0 .7.7v-1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgFastFood;
