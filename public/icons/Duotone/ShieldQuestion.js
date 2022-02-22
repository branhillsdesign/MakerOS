import * as React from "react";

const SvgShieldQuestion = ({ title, titleId, ...props }) => (
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
    <mask id="Shield_Question_svg__a" fill="#fff">
      <path d="M4 6.82a1 1 0 0 1 .804-.98l.036-.008a14.013 14.013 0 0 0 6.428-3.15 1.122 1.122 0 0 1 1.464 0 14.013 14.013 0 0 0 6.428 3.15l.036.007a1 1 0 0 1 .804.98v3.949c0 5.304-3.14 10.106-8 12.232-4.86-2.126-8-6.928-8-12.232V6.82Z" />
    </mask>
    <path
      d="m12 23-.802 1.832.802.351.802-.35L12 23Zm7.16-17.168.392-1.961-.392 1.961Zm-14.32 0-.392-1.961.392 1.961Zm7.892-3.15-1.31 1.51 1.31-1.51ZM4.804 5.838l-.392-1.96.392 1.96ZM18 6.82v3.949h4V6.82h-4ZM6 10.769V6.82H2v3.948h4Zm-4 0c0 6.099 3.61 11.62 9.198 14.064l1.604-3.664A11.352 11.352 0 0 1 6 10.768H2Zm16 0c0 4.51-2.67 8.592-6.802 10.4l1.604 3.664A15.351 15.351 0 0 0 22 10.768h-4ZM5.196 7.8l.036-.007-.784-3.922-.036.007.784 3.922Zm13.572-.007.036.007.784-3.922-.036-.007-.784 3.922Zm-7.346-3.6a16.012 16.012 0 0 0 7.346 3.6l.784-3.922a12.013 12.013 0 0 1-5.51-2.701l-2.62 3.023Zm-6.19 3.6a16.012 16.012 0 0 0 7.346-3.6L9.958 1.17a12.013 12.013 0 0 1-5.51 2.7l.784 3.923ZM22 6.82a3 3 0 0 0-2.412-2.942L18.804 7.8A1 1 0 0 1 18 6.82h4Zm-7.959-5.65a3.123 3.123 0 0 0-4.083 0l2.62 3.023a.877.877 0 0 1-1.156 0l2.62-3.023ZM6 6.82a1 1 0 0 1-.804.98l-.784-3.922A3 3 0 0 0 2 6.82h4Z"
      fill="#555770"
      mask="url(#Shield_Question_svg__a)"
    />
    <path
      d="M9.241 10.75c0-1.594 1.32-2.75 2.789-2.75a2.716 2.716 0 0 1 2.729 2.75c0 1.229-1.015 1.621-1.949 2.653-.53.587-.78 1.506-.78 1.916m0 1.016v1.667"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgShieldQuestion;
