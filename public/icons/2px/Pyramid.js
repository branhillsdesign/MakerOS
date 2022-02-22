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
      d="M12 4 9.5 6.5M12 4v4m0-4 2.5 2.5M12 20 2 14l7.5-7.5M12 20l10-6-7.5-7.5M12 20V8M9.5 6.5 12 8m0 0 2.5-1.5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPyramid;
