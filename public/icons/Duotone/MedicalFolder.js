import * as React from "react";

const SvgMedicalFolder = ({ title, titleId, ...props }) => (
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
      d="m10.293 6.707.293.293H21v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.586l1.707 1.707Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M12 10v6m-3-3h6" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgMedicalFolder;
