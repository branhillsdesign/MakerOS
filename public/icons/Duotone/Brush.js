import * as React from "react";

const SvgBrush = ({ title, titleId, ...props }) => (
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
    <path d="M7 3v6h10V3H7Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M11.008 19.375A1.496 1.496 0 0 0 10.5 20.5a1.5 1.5 0 1 0 2.492-1.125m-1.984 0c.264-.233.612-.375.992-.375s.728.142.992.375m-1.984 0c.134-.12.318-.332.492-.62v-5.263C7.833 13.375 6 12 6 12V9.1a.1.1 0 0 1 .1-.1h11.8a.1.1 0 0 1 .1.1V12s-.933 1.399-5.5 1.495v5.26c.174.288.358.5.492.62"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBrush;
