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
      d="M21.2 12A9.2 9.2 0 0 0 12 2.8v2.4a6.8 6.8 0 0 1 6.8 6.8h2.4ZM12 21.2a9.2 9.2 0 0 0 9.2-9.2h-2.4a6.8 6.8 0 0 1-6.8 6.8v2.4ZM2.8 12a9.2 9.2 0 0 0 9.2 9.2v-2.4A6.8 6.8 0 0 1 5.2 12H2.8Zm2.4 0A6.8 6.8 0 0 1 12 5.2V2.8A9.2 9.2 0 0 0 2.8 12h2.4Z"
      fill="#555770"
      mask="url(#Record_svg__a)"
    />
  </svg>
);

export default SvgRecord;
