import * as React from "react";

const SvgParagraph = ({ title, titleId, ...props }) => (
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
    <path
      d="M18 6h-2.4m0 0v14m0-14H12m0 0h-1.8C7.88 6 6 7.828 6 10.083s1.88 4.084 4.2 4.084H12M12 6v8.167M12 20v-5.833"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Paragraph_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={11}
      y={1}
      width={8}
      height={22}
    >
      <path transform="matrix(-1 0 0 1 19 1)" fill="#000" d="M0 0h8v22H0z" />
    </mask>
    <g mask="url(#Paragraph_svg__a)">
      <path
        d="M18 6h-2.4m0 0v14m0-14H12m0 0h-1.8C7.88 6 6 7.828 6 10.083s1.88 4.084 4.2 4.084H12M12 6v8.167M12 20v-5.833"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgParagraph;
