import * as React from "react";

const SvgLoading01 = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Loading_01_svg__a)">
      <mask
        id="Loading_01_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path d="M12 0v6h-2V0H0v24h12v-6h2v6h10V0H12Z" fill="#fff" />
      </mask>
      <g mask="url(#Loading_01_svg__b)" stroke="#555770" strokeWidth={1.2}>
        <path d="M12 20A8 8 0 0 1 6.784 5.934M12 4a8 8 0 0 1 5.152 14.12" />
        <path d="M14.6 20.4v-4.951l4.952 4.951H14.6ZM9.4 3.6v4.951L4.449 3.6H9.4Z" />
      </g>
    </g>
    <defs>
      <clipPath id="Loading_01_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLoading01;
