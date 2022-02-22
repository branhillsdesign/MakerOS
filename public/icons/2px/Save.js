import * as React from "react";

const SvgSave = ({ title, titleId, ...props }) => (
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
      d="M20 7.5h1v-.414l-.293-.293L20 7.5ZM16.5 4l.707-.707L16.914 3H16.5v1ZM8 8V7H7v1h1Zm0 1H7v1h1V9Zm6 0v1h1V9h-1Zm0-1h1V7h-1v1ZM3 5v14h2V5H3Zm2 16h14v-2H5v2Zm16-2V7.5h-2V19h2Zm-.293-12.207-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414ZM16.5 3H5v2h11.5V3ZM7 8v1h2V8H7Zm1 2h6V8H8v2Zm7-1V8h-2v1h2Zm-1-2H8v2h6V7Zm5 14a2 2 0 0 0 2-2h-2v2ZM3 19a2 2 0 0 0 2 2v-2H3ZM5 5V3a2 2 0 0 0-2 2h2Zm8 10a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSave;
