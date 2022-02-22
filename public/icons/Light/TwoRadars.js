import * as React from "react";

const SvgTwoRadars = ({ title, titleId, ...props }) => (
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
      id="Two_Radars_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={10}
      y={10}
      width={10}
      height={10}
    >
      <path d="M10 10h10v10H10V10Z" fill="#fff" />
    </mask>
    <g mask="url(#Two_Radars_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={20} cy={20} r={9.4} transform="rotate(-180 20 20)" />
      <circle cx={20} cy={20} r={5.4} transform="rotate(-180 20 20)" />
      <circle cx={20} cy={20} r={1.4} transform="rotate(-180 20 20)" />
    </g>
    <mask
      id="Two_Radars_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={4}
      y={4}
      width={10}
      height={10}
    >
      <path d="M14 14H4V4h10v10Z" fill="#fff" />
    </mask>
    <g mask="url(#Two_Radars_svg__b)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={4} cy={4} r={9.4} />
      <circle cx={4} cy={4} r={5.4} />
      <circle cx={4} cy={4} r={1.4} />
    </g>
  </svg>
);

export default SvgTwoRadars;