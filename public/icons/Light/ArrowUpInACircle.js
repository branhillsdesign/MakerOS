import * as React from "react";

const SvgArrowUpInaCircle = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10.4} stroke="#555770" strokeWidth={1.2} />
    <mask id="Arrow_Up_In_a_Circle_svg__a" fill="#fff">
      <path d="m17 13.5-5-5-5 5h10Z" />
    </mask>
    <path
      d="m12 8.5.848-.849L12 6.803l-.848.848L12 8.5Zm5 5v1.2h2.897l-2.048-2.048L17 13.5Zm-10 0-.849-.848L4.103 14.7H7v-1.2Zm4.152-4.151 5 5 1.697-1.697-5-5-1.697 1.697ZM17 12.3H7v2.4h10v-2.4Zm-9.151 2.048 5-5-1.697-1.697-5 5 1.697 1.697Z"
      fill="#555770"
      mask="url(#Arrow_Up_In_a_Circle_svg__a)"
    />
  </svg>
);

export default SvgArrowUpInaCircle;
