import * as React from "react";

const SvgAddImage = ({ title, titleId, ...props }) => (
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
      d="M12 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="m5 17 5.6-7 3.4 4.454 1.5-1.909L19 17H5Z" fill="currentColor" />
    <path d="M6 2v8m4-4H2" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgAddImage;
