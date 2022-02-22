import * as React from "react";

const SvgPyramid = ({ title, titleId, ...props }) => (
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
      d="M12 4 8.5 7.5M12 4v5.5M12 4l3.5 3.5M12 20 2 14l6.5-6.5M12 20l10-6-6.5-6.5M12 20V9.5m-3.5-2 3.5 2m0 0 3.5-2"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPyramid;
