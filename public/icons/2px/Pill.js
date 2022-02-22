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
      d="M18 11H6v2h12v-2Zm-2-3v4h4V8h-4Zm0 4v4h4v-4h-4Zm-8 4v-4H4v4h4Zm0-4V8H4v4h4Zm4 8a4 4 0 0 1-4-4H4a8 8 0 0 0 8 8v-4Zm0 4a8 8 0 0 0 8-8h-4a4 4 0 0 1-4 4v4Zm0-20a4 4 0 0 1 4 4h4a8 8 0 0 0-8-8v4Zm0-4a8 8 0 0 0-8 8h4a4 4 0 0 1 4-4V0Z"
      fill="#555770"
      mask="url(#Pill_svg__a)"
    />
    <path d="M12 7a1 1 0 0 0-1 1H9a3 3 0 0 1 3-3v2Z" fill="#555770" />
  </svg>
);

export default SvgPill;
