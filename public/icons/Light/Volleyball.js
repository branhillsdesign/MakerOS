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
      d="M12 3c-1.85 0-3.57.558-5 1.516M12 3v3m0-3a9 9 0 0 1 8.97 8.264M12 12l5 2.813M12 12l-5 2.886M12 12V6M4.204 16.5A8.959 8.959 0 0 1 3 12c0-3.12 1.588-5.87 4-7.484M4.204 16.5A9.04 9.04 0 0 0 8 20.064M4.204 16.5 7 14.886M20 16.5l-3-1.688m0 0-9 5.252m0 0a9 9 0 0 0 12.97-8.801M7 14.887V4.516M12 6l8.97 5.264"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgVolleyball;
