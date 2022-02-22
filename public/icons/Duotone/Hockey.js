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
        d="M11.732 18.5h.933L6 4.144V3h17v18H1v-7h8.643l2.09 4.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Hockey_svg__a)" stroke="#555770" strokeWidth={2}>
      <path d="M15.5 5h1l-6.473 13.942a.1.1 0 0 1-.09.058H7v-2h3l5.5-12ZM3.5 19v-2h-.4a.1.1 0 0 0-.1.1V19h.5Z" />
    </g>
    <path
      d="M8.5 5h-1l6.473 13.942a.1.1 0 0 0 .09.058H17v-2h-3L8.5 5ZM20.5 19v-2h.4a.1.1 0 0 1 .1.1V19h-.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHockey;
