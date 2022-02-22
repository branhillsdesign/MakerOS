import * as React from "react";

const SvgBrightnessQuestion = ({ title, titleId, ...props }) => (
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
      d="M8.778 5.222h.414l.293-.293L12 2.414l2.515 2.515.293.293h3.97v3.97l.293.293L21.586 12l-2.515 2.515-.293.293v3.97h-3.97l-.293.293L12 21.586 9.485 19.07l-.293-.293h-3.97v-3.97l-.293-.293L2.414 12 4.93 9.485l.293-.293v-3.97h3.556Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9.241 10.484c0-1.595 1.32-2.75 2.789-2.75a2.716 2.716 0 0 1 2.729 2.75c0 1.228-1.015 1.62-1.949 2.652-.53.588-.78 1.507-.78 1.916m0 1.016v1.667"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBrightnessQuestion;
