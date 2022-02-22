import * as React from "react";

const SvgPaint = ({ title, titleId, ...props }) => (
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
      d="M12 3h-1.4a.1.1 0 0 0-.1.1V6H12m0-3h1.4a.1.1 0 0 1 .1.1V6H12m0-3v3m-5.389 9 .556-5h9.667l.555 5H6.611Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M6 20.5v.5h12v-.5m-12 0 .611-5.5.556-5 .262-2.364a1 1 0 0 1 .678-.838L10.5 6h3l2.393.798a1 1 0 0 1 .678.838L16.833 10l.556 5L18 20.5m-12 0h12"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPaint;
