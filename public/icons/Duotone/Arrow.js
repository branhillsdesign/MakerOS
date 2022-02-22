import * as React from "react";

const SvgArrow = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Arrow_svg__a)">
      <path
        d="m10.97 13.758-.145-.583-.582-.145-5.183-1.296L18.03 5.97l-5.764 12.97-1.296-5.183Z"
        stroke="#555770"
        strokeWidth={2}
      />
      <mask
        id="Arrow_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={7}
        y={4}
        width={13}
        height={18}
      >
        <path
          d="M19.015 4.97 7.104 16.881l4.157 4.157h8.657V5.873l-.903-.903Z"
          fill="#000"
        />
      </mask>
      <g mask="url(#Arrow_svg__b)">
        <path
          d="m10.97 13.758-.145-.583-.582-.145-5.183-1.296L18.03 5.97l-5.764 12.97-1.296-5.183Z"
          stroke="currentColor"
          strokeWidth={2}
        />
      </g>
    </g>
    <defs>
      <clipPath id="Arrow_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgArrow;
