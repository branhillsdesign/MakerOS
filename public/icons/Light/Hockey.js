import * as React from "react";

const SvgHockey = ({ title, titleId, ...props }) => (
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
      id="Hockey_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={3}
      width={22}
      height={18}
    >
      <path
        d="M11.884 18.5h1.217L6.435 4.144 6 3h17v18H1v-7h8.795l2.089 4.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Hockey_svg__a)">
      <path
        d="M16.5 5v-.6h.94l-.396.853L16.5 5Zm-1 0-.545-.25.16-.35h.385V5ZM10 17l.545.25-.16.35H10V17Zm-3.892 0h-.6v-.6h.6v.6Zm0 2v.6h-.6V19h.6ZM3.5 17v-.6h.6v.6h-.6Zm0 2h.6v.6h-.6V19ZM3 19v.6h-.6V19H3Zm7.027-.058-.544-.253.544.253ZM16.5 5.6h-1V4.4h1v1.2Zm-.455-.35-5.5 12-1.09-.5 5.5-12 1.09.5ZM10 17.6H6.108v-1.2H10v1.2ZM6.708 17v2h-1.2v-2h1.2Zm-.6 1.4h3.828v1.2H6.108v-1.2Zm3.375.29 6.473-13.943 1.088.506-6.473 13.942-1.088-.506ZM4.1 17v2H2.9v-2h1.2Zm-.6 2.6H3v-1.2h.5v1.2ZM2.4 19v-1.9h1.2V19H2.4Zm.7-2.6h.4v1.2h-.4v-1.2Zm-.7.7a.7.7 0 0 1 .7-.7v1.2a.5.5 0 0 0 .5-.5H2.4Zm7.536 1.3a.5.5 0 0 0-.453.29l1.088.505a.7.7 0 0 1-.635.405v-1.2Z"
        fill="#555770"
      />
    </g>
    <path
      d="M7.5 5v-.6h-.94l.396.853L7.5 5Zm1 0 .545-.25-.16-.35H8.5V5ZM14 17l-.545.25.16.35H14V17Zm3.934 0h.6v-.6h-.6v.6Zm0 2v.6h.6V19h-.6Zm2.566-2v-.6h-.6v.6h.6Zm0 2h-.6v.6h.6V19Zm.5 0v.6h.6V19H21Zm-7.027-.058.544-.253-.544.253ZM7.5 5.6h1V4.4h-1v1.2Zm.455-.35 5.5 12 1.09-.5-5.5-12-1.09.5ZM14 17.6h3.934v-1.2H14v1.2Zm3.334-.6v2h1.2v-2h-1.2Zm.6 1.4h-3.87v1.2h3.87v-1.2Zm-3.417.29L8.044 4.746l-1.088.506 6.473 13.942 1.088-.506ZM19.9 17v2h1.2v-2h-1.2Zm.6 2.6h.5v-1.2h-.5v1.2Zm1.1-.6v-1.9h-1.2V19h1.2Zm-.7-2.6h-.4v1.2h.4v-1.2Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-7.536 1.3a.5.5 0 0 1 .453.29l-1.088.505a.7.7 0 0 0 .635.405v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHockey;
