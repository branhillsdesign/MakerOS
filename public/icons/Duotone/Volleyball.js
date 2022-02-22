import * as React from "react";

const SvgVolleyball = ({ title, titleId, ...props }) => (
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
      d="M12 3v3m0 6 5 2.813M12 12l-5 2.886M12 12V6M4.204 16.5 7 14.886M20 16.5l-3-1.688m0 0-9 5.252m-1-5.178V4.516M12 6l8.97 5.264"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgVolleyball;
