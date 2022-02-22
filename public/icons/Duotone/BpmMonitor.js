import * as React from "react";

const SvgBpmMonitor = ({ title, titleId, ...props }) => (
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
      d="M7 20h5m5 0h-5m0 0v-3m-7-4h1.943a.1.1 0 0 0 .086-.049l2.89-4.816a.1.1 0 0 1 .169-.004l3.844 5.768a.1.1 0 0 0 .154.015l2.885-2.885a.1.1 0 0 1 .07-.029H19"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBpmMonitor;
