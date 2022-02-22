import * as React from "react";

const SvgPen4 = ({ title, titleId, ...props }) => (
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
    <mask id="Pen_4_svg__a" fill="#fff">
      <path d="M3 17.25 16.543 3.707a1 1 0 0 1 1.414 0l2.336 2.336a1 1 0 0 1 0 1.414L6.75 21H3v-3.75Z" />
    </mask>
    <path
      d="m3 17.25-1.414-1.414-.586.586v.828h2ZM6.75 21v2h.828l.586-.586L6.75 21ZM3 21H1v2h2v-2ZM20.293 7.457l1.414 1.414-1.414-1.414Zm0-1.414 1.414-1.414-1.414 1.414Zm-5.164-3.75L1.586 15.836l2.828 2.828L17.957 5.121 15.13 2.293ZM8.164 22.414 21.707 8.871 18.88 6.043 5.336 19.586l2.828 2.828ZM21.707 4.63l-2.336-2.336-2.828 2.828 2.336 2.336 2.828-2.828ZM6.75 19H3v4h3.75v-4ZM5 21v-3.75H1V21h4ZM21.707 8.871a3 3 0 0 0 0-4.242L18.88 7.457a1 1 0 0 1 0-1.414l2.828 2.828Zm-3.75-3.75a1 1 0 0 1-1.414 0l2.828-2.828a3 3 0 0 0-4.242 0l2.828 2.828Z"
      fill="#555770"
      mask="url(#Pen_4_svg__a)"
    />
  </svg>
);

export default SvgPen4;
