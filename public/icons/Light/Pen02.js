import * as React from "react";

const SvgPen02 = ({ title, titleId, ...props }) => (
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
      id="Pen_02_svg__a"
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
        d="M0 24V0h7.007l11.41 11.41 1.198-1.198L9.403 0H24v24H0Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Pen_02_svg__a)">
      <mask id="Pen_02_svg__b" fill="#fff">
        <path d="M3 17.25 15.25 5l1.293-1.293a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414L19 8.75 6.75 21H3v-3.75Z" />
      </mask>
      <path
        d="m14.826 5.424 3.75 3.75.848-.848-3.75-3.75-.848.848ZM3 17.25l-.849-.849-.351.352v.497H3ZM6.75 21v1.2h.497l.352-.351L6.75 21ZM3 21H1.8v1.2H3V21ZM19 8.75l-.849-.849.849.849Zm1.293-2.707.848-.849-.848.849Zm-3.75-2.336-.849-.848.849.848Zm4.598 1.487L18.806 2.86l-1.697 1.697 2.335 2.335 1.697-1.697ZM6.75 19.8H3v2.4h3.75v-2.4ZM4.2 21v-3.75H1.8V21h2.4ZM15.694 2.859 14.401 4.15 16.1 5.85l1.292-1.293-1.697-1.697ZM14.401 4.15l-12.25 12.25L3.85 18.1l12.25-12.25-1.697-1.698ZM7.6 21.85l12.25-12.25L18.15 7.9l-12.25 12.25L7.6 21.85Zm12.25-12.25 1.292-1.293-1.697-1.697L18.151 7.9 19.85 9.6Zm-.405-2.708a.2.2 0 0 1 0-.282l1.697 1.697a2.2 2.2 0 0 0 0-3.112l-1.697 1.697Zm-.638-4.032a2.2 2.2 0 0 0-3.112 0l1.697 1.697a.2.2 0 0 1-.282 0l1.697-1.697Z"
        fill="#555770"
        mask="url(#Pen_02_svg__b)"
      />
    </g>
  </svg>
);

export default SvgPen02;
