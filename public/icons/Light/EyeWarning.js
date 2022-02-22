import * as React from "react";

const SvgEyeWarning = ({ title, titleId, ...props }) => (
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
    <path d="M19 8v8m0 3v-1.5" stroke="#555770" strokeWidth={1.2} />
    <mask
      id="Eye_Warning_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={17}
      height={24}
    >
      <path d="M0 0h17v24H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Eye_Warning_svg__a)" stroke="#555770" strokeWidth={1.2}>
      <circle cx={12} cy={12} r={3.4} />
      <path d="M12 18.4c-4.762 0-8.782-2.685-10.352-6.4C3.218 8.286 7.238 5.6 12 5.6c4.762 0 8.782 2.686 10.352 6.4-1.57 3.714-5.59 6.4-10.352 6.4Z" />
    </g>
  </svg>
);

export default SvgEyeWarning;
