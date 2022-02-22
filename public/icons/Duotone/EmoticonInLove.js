import * as React from "react";

const SvgEmoticoninLove = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M10.025 8c.649 0 1.175.527 1.175 1.176 0 .265-.018.587-.319.939C10.581 10.466 8.85 12 8.85 12s-1.73-1.534-2.031-1.885c-.301-.352-.319-.674-.319-.939a1.176 1.176 0 1 1 2.35 0c0-.65.526-1.176 1.175-1.176ZM16.325 8c.649 0 1.175.527 1.175 1.176 0 .265-.018.587-.319.939-.3.351-2.031 1.885-2.031 1.885s-1.73-1.534-2.031-1.885c-.301-.352-.319-.674-.319-.939a1.176 1.176 0 1 1 2.35 0c0-.65.526-1.176 1.175-1.176Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgEmoticoninLove;
