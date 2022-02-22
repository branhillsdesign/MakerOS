import * as React from "react";

const SvgPill = ({ title, titleId, ...props }) => (
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
    <path
      d="M7 8a5 5 0 0 1 10 0v8a5 5 0 0 1-10 0V8Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M12 6a2 2 0 0 0-2 2" stroke="currentColor" strokeWidth={2} />
    <mask
      id="Pill_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={22}
      height={11}
    >
      <path transform="rotate(-90 1 12)" fill="#000" d="M1 12h11v22H1z" />
    </mask>
    <g mask="url(#Pill_svg__a)">
      <path
        d="M7 8a5 5 0 0 1 10 0v8a5 5 0 0 1-10 0V8Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgPill;
