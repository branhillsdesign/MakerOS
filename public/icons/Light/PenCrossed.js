import * as React from "react";

const SvgPenCrossed = ({ title, titleId, ...props }) => (
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
      id="Pen_Crossed_svg__a"
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
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Pen_Crossed_svg__a)">
      <path d="M3.5 4 20 20.5" stroke="#555770" strokeWidth={1.5} />
      <mask id="Pen_Crossed_svg__b" fill="#fff">
        <path d="M3 17.25 16.543 3.707a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414L6.75 21H3v-3.75Z" />
      </mask>
      <path
        d="m3 17.25-.849-.849-.351.352v.497H3ZM6.75 21v1.2h.497l.352-.351L6.75 21ZM3 21H1.8v1.2H3V21ZM20.293 7.457l.848.849-.848-.849Zm0-1.414.848-.849-.848.849Zm-4.599-3.184L2.151 16.4 3.85 18.1 17.39 4.556l-1.697-1.697ZM7.6 21.849 21.14 8.306l-1.697-1.697L5.901 20.15 7.6 21.85ZM21.14 5.194 18.806 2.86l-1.697 1.697 2.335 2.335 1.697-1.697ZM6.75 19.8H3v2.4h3.75v-2.4ZM4.2 21v-3.75H1.8V21h2.4ZM21.141 8.306a2.2 2.2 0 0 0 0-3.112l-1.697 1.697a.2.2 0 0 1 0-.282l1.697 1.697Zm-3.75-3.75a.2.2 0 0 1-.282 0l1.697-1.697a2.2 2.2 0 0 0-3.112 0l1.697 1.697Z"
        fill="#555770"
        mask="url(#Pen_Crossed_svg__b)"
      />
    </g>
  </svg>
);

export default SvgPenCrossed;
