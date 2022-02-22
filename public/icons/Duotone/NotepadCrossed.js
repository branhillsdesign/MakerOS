import * as React from "react";

const SvgNotepadCrossed = ({ title, titleId, ...props }) => (
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
      id="Notepad_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v2.866L23 20.168 21.503 21.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Notepad_Crossed_svg__a)">
      <path d="M2.583 4 21 22.417" stroke="#555770" strokeWidth={2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4Zm-2 0v17H6V4h12Zm-6-.248a.752.752 0 1 0 0-1.504.752.752 0 0 0 0 1.503Z"
        fill="#555770"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2v4H8V2h2.268a2 2 0 0 1 3.464 0H16Zm-4 1.752a.752.752 0 1 0 0-1.504.752.752 0 0 0 0 1.503Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgNotepadCrossed;
