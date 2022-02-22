import * as React from "react";

const SvgPhoneCrossed = ({ title, titleId, ...props }) => (
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
      id="Phone_Crossed_svg__a"
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
        d="M19.784 19.78 4 3.998H0V24h24V0H5.698v2.866l15.5 15.5-1.414 1.415Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Phone_Crossed_svg__a)" strokeWidth={2}>
      <path
        d="M17.815 12.08a10.093 10.093 0 0 0-.158-7.858l-3.366-.067a.1.1 0 0 0-.102.1l-.028 4.128a.1.1 0 0 0 .029.072l3.625 3.625Zm0 0a10.223 10.223 0 0 1-2.28 3.456c-1.02 1.02-2.199 1.779-3.456 2.279m0 0a10.093 10.093 0 0 1-7.857-.158l-.067-3.366a.1.1 0 0 1 .1-.102l4.128-.028a.1.1 0 0 1 .072.029l3.624 3.625Z"
        stroke="currentColor"
      />
      <path d="m3.524 4.942 15.5 15.5" stroke="#555770" />
    </g>
  </svg>
);

export default SvgPhoneCrossed;
