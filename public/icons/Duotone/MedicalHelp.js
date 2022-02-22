import * as React from "react";

const SvgMedicalHelp = ({ title, titleId, ...props }) => (
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
      d="M12 11v3m0 3v-3m0 0H9m3 0h3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M8.5 7H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-4.5m-7 0V4l1-1h5l1 1v3m-7 0h7"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMedicalHelp;
