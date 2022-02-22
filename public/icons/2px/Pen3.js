import * as React from "react";

const SvgPen3 = ({ title, titleId, ...props }) => (
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
      id="Pen_3_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M0 0h6.029l11.899 11.9 1.4-1.4L8.827 0H24v24H0V0Z" fill="#fff" />
    </mask>
    <g mask="url(#Pen_3_svg__a)">
      <mask id="Pen_3_svg__b" fill="#fff">
        <path d="M3 17.25 15.25 5l1.293-1.293a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414L19 8.75 6.75 21H3v-3.75Z" />
      </mask>
      <path
        d="m14.543 5.707 3.75 3.75 1.414-1.414-3.75-3.75-1.414 1.414ZM3 17.25l-1.414-1.414-.586.586v.828h2ZM6.75 21v2h.828l.586-.586L6.75 21ZM3 21H1v2h2v-2ZM19 8.75l-1.414-1.414L19 8.75Zm1.293-2.707 1.414-1.414-1.414 1.414Zm-3.75-2.336-1.414-1.414 1.414 1.414Zm5.164.922-2.336-2.336-2.828 2.828 2.336 2.336 2.828-2.828ZM6.75 19H3v4h3.75v-4ZM5 21v-3.75H1V21h4ZM15.129 2.293l-1.293 1.293 2.828 2.828 1.293-1.293-2.828-2.828Zm-1.293 1.293-12.25 12.25 2.828 2.828 12.25-12.25-2.828-2.828ZM8.164 22.414l12.25-12.25-2.828-2.828-12.25 12.25 2.828 2.828Zm12.25-12.25 1.293-1.293-2.828-2.828-1.293 1.293 2.828 2.828ZM18.88 7.457a1 1 0 0 1 0-1.414l2.828 2.828a3 3 0 0 0 0-4.242L18.88 7.457Zm.492-5.164a3 3 0 0 0-4.242 0l2.828 2.828a1 1 0 0 1-1.414 0l2.828-2.828Z"
        fill="#555770"
        mask="url(#Pen_3_svg__b)"
      />
    </g>
  </svg>
);

export default SvgPen3;
