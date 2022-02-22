import * as React from "react";

const SvgPrint = ({ title, titleId, ...props }) => (
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
    <path d="M6 7V3h12v4M6 21h12v-8H6v8Z" stroke="#555770" strokeWidth={1.2} />
    <path
      d="M22 16v.6h.6V16H22ZM2 16h-.6v.6H2V16Zm2-8.4h16V6.4H4v1.2ZM21.4 9v7h1.2V9h-1.2ZM2.6 16V9H1.4v7h1.2Zm3.4-.6H2v1.2h4v-1.2Zm16 0h-4v1.2h4v-1.2Zm-2-7.8A1.4 1.4 0 0 1 21.4 9h1.2A2.6 2.6 0 0 0 20 6.4v1.2ZM4 6.4A2.6 2.6 0 0 0 1.4 9h1.2A1.4 1.4 0 0 1 4 7.6V6.4Z"
      fill="#555770"
    />
    <circle cx={19} cy={10} r={1} fill="#555770" />
  </svg>
);

export default SvgPrint;
