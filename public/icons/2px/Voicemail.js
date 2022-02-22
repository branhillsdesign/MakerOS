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
    <path
      d="M5.746 15.503a3.75 3.75 0 1 0-.001-7.501 3.75 3.75 0 0 0 .001 7.501Zm0 0h12.5m0 0a3.75 3.75 0 0 0 3.75-3.752 3.75 3.75 0 1 0-3.75 3.752Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVoicemail;
