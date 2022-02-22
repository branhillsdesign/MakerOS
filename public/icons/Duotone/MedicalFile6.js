import * as React from "react";

const SvgMedicalFile6 = ({ title, titleId, ...props }) => (
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
      d="M12 10v3m0 0v3m0-3H9m3 0h3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 21v1-1Zm12 0v-1 1ZM5 4H4h1Zm0 16h1-1Zm14 0h-1 1Zm0-12h1a1 1 0 0 0-.293-.707L19 8Zm-5-5 .707-.707A1 1 0 0 0 14 2v1ZM6 3V2v1Zm8 5h-1v1h1V8ZM6 22h12v-2H6v2ZM4 4v16h2V4H4Zm16 16V8h-2v12h2ZM14 2H6v2h8V2Zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414ZM13 3v5h2V3h-2Zm1 6h5V7h-5v2Zm4 13a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMedicalFile6;
