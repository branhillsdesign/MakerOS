import * as React from "react";

const SvgImage = ({ title, titleId, ...props }) => (
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
      d="M12 17H3l7.2-9 4.371 5.727M12 17h9l-4.5-5.727-1.929 2.454M12 17l2.571-3.273"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgImage;
