import * as React from "react";

const SvgCarWashing = ({ title, titleId, ...props }) => (
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
      d="m4.333 14 1.553-4.658A.5.5 0 0 1 6.36 9h11.28a.5.5 0 0 1 .474.342L19.667 14M4.333 14 4 15v7.8c0 .11.09.2.2.2h.6a.2.2 0 0 0 .2-.2V21h14v1.8c0 .11.09.2.2.2h.6a.2.2 0 0 0 .2-.2V15l-.333-1M4.333 14h15.334"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="currentColor"
    />
    <path
      d="M7.667 4.263c0 .407-.298.737-.666.737-.369 0-.667-.33-.667-.737S7.001 3 7.001 3s.666.856.666 1.263ZM12.667 4.263c0 .407-.299.737-.667.737-.368 0-.666-.33-.666-.737S12 3 12 3s.667.856.667 1.263ZM17.668 4.263c0 .407-.298.737-.666.737-.368 0-.667-.33-.667-.737S17.002 3 17.002 3s.666.856.666 1.263Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCarWashing;
