import * as React from "react";

const SvgVoicemail = ({ title, titleId, ...props }) => (
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
    <path d="M5.746 15.503h12.5" stroke="#555770" strokeWidth={2} />
    <path
      d="M9.496 11.752a3.75 3.75 0 1 1-7.501.001 3.75 3.75 0 0 1 7.501-.002ZM21.996 11.752A3.75 3.75 0 1 1 18.246 8a3.75 3.75 0 0 1 3.75 3.752Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVoicemail;
