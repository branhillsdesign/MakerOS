import * as React from "react";

const SvgPill = ({ title, titleId, ...props }) => (
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
    <mask id="Pill_svg__a" fill="#fff">
      <path d="M6 8a6 6 0 1 1 12 0v8a6 6 0 0 1-12 0V8Z" />
    </mask>
    <path
      d="M18 11.4H6v1.2h12v-1.2ZM16.8 8v4h2.4V8h-2.4Zm0 4v4h2.4v-4h-2.4Zm-9.6 4v-4H4.8v4h2.4Zm0-4V8H4.8v4h2.4Zm4.8 8.8A4.8 4.8 0 0 1 7.2 16H4.8a7.2 7.2 0 0 0 7.2 7.2v-2.4Zm0 2.4a7.2 7.2 0 0 0 7.2-7.2h-2.4a4.8 4.8 0 0 1-4.8 4.8v2.4Zm0-20A4.8 4.8 0 0 1 16.8 8h2.4A7.2 7.2 0 0 0 12 .8v2.4Zm0-2.4A7.2 7.2 0 0 0 4.8 8h2.4A4.8 4.8 0 0 1 12 3.2V.8Z"
      fill="#555770"
      mask="url(#Pill_svg__a)"
    />
    <path
      d="M12 6.6A1.4 1.4 0 0 0 10.6 8H9.4A2.6 2.6 0 0 1 12 5.4v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPill;
