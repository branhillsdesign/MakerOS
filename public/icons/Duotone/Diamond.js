import * as React from "react";

const SvgDiamond = ({ title, titleId, ...props }) => (
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
      d="M2 9.333 6.545 4H12M2 9.333 12 20M2 9.333h6M12 20 22 9.333M12 20 8 9.333M12 20l4-10.667m6 0L17.454 4H12m10 5.333h-6M12 4 8 9.333M12 4l4 5.333m-8 0h8"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2 9.333 6.545 4H17.454L22 9.333 12 20 2 9.333Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDiamond;
