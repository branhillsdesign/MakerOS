import * as React from "react";

const SvgRecord = ({ title, titleId, ...props }) => (
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
    <mask id="Record_svg__a" fill="#fff">
      <path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" />
    </mask>
    <path
      d="M22 12c0-5.523-4.477-10-10-10v4a6 6 0 0 1 6 6h4ZM12 22c5.523 0 10-4.477 10-10h-4a6 6 0 0 1-6 6v4ZM2 12c0 5.523 4.477 10 10 10v-4a6 6 0 0 1-6-6H2Zm4 0a6 6 0 0 1 6-6V2C6.477 2 2 6.477 2 12h4Z"
      fill="#555770"
      mask="url(#Record_svg__a)"
    />
  </svg>
);

export default SvgRecord;
