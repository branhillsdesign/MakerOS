import * as React from "react";

const SvgHeartwithArrow = ({ title, titleId, ...props }) => (
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
      d="m22 2-1.5.5.5.5m1-1-.5 1.5L21 3m1-1-1 1m0 0-2.472 2.472M4 20l-1 1m1-1H3l2-2h1m-2 2 2-2m-2 2v1l2-2v-1m0 0 1.75-1.75"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7.5 5C5.015 5 3 6.975 3 9.412c0 .993.068 2.199 1.221 3.518.492.563 1.982 1.934 3.528 3.32C9.824 18.112 12 20 12 20s6.626-5.751 7.779-7.07C20.932 11.61 21 10.405 21 9.412c0-1.722-1.006-3.213-2.472-3.94A4.554 4.554 0 0 0 16.5 5C14.015 5 12 6.975 12 9.412 12 6.975 9.985 5 7.5 5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHeartwithArrow;
