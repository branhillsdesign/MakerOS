import * as React from "react";

const SvgAlertRinging = ({ title, titleId, ...props }) => (
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
    <mask id="Alert_Ringing_svg__a" fill="#fff">
      <path d="M14 19a2 2 0 1 1-4 0h4Z" />
    </mask>
    <path
      d="M14 19h2v-2h-2v2Zm-4 0v-2H8v2h2Zm2 0v4a4 4 0 0 0 4-4h-4Zm0 0H8a4 4 0 0 0 4 4v-4Zm-2 2H14v-4H10v4Z"
      fill="currentColor"
      mask="url(#Alert_Ringing_svg__a)"
    />
    <path
      d="M19 17v1a1 1 0 0 0 .832-1.555L19 17Zm-2-3h-1a1 1 0 0 0 .168.555L17 14ZM7 14l.832.555A1 1 0 0 0 8 14H7Zm-2 3-.832-.555A1 1 0 0 0 5 18v-1Zm3-7a4 4 0 0 1 4-4V4a6 6 0 0 0-6 6h2Zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6v2ZM7 18h10v-2H7v2Zm10 0h2v-2h-2v2Zm1-4v-4h-2v4h2Zm1.832 2.445-2-3-1.664 1.11 2 3 1.664-1.11ZM6 10v4h2v-4H6Zm.168 3.445-2 3 1.664 1.11 2-3-1.664-1.11ZM5 18h2v-2H5v2Zm8-13V2h-2v3h2Z"
      fill="#555770"
    />
    <path
      d="M17 3.125A8.508 8.508 0 0 1 20.264 8M7 3.125A8.507 8.507 0 0 0 3.737 8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAlertRinging;
