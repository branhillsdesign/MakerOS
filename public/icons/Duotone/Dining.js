import * as React from "react";

const SvgDining = ({ title, titleId, ...props }) => (
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
      d="m3.207 4.864 5.642 5.628-1.316 1.314-2.821-2.815C2.266 6.552 3.137 4.933 3.207 4.864Z"
      fill="#555770"
    />
    <path
      d="M11.67 13.307 19.383 21M8.849 10.492 3.207 4.864c-.07.069-.94 1.688 1.505 4.127l2.82 2.815 1.317-1.313Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M20.323 4.676c1.142 1.14.805 3.324-.753 4.878-1.558 1.555-3.747 1.89-4.89.75-1.142-1.139-.806-3.323.752-4.878 1.559-1.554 3.748-1.89 4.89-.75Z"
      fill="#555770"
    />
    <path
      d="M14.68 10.305c1.143 1.14 3.332.804 4.89-.75 1.558-1.555 1.895-3.74.753-4.88-1.143-1.139-3.332-.803-4.89.751-1.559 1.555-1.895 3.739-.753 4.879Zm0 0-3.01 3.002-7.523 7.505"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDining;
