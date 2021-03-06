import * as React from "react";

const SvgVectorCurve = ({ title, titleId, ...props }) => (
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
      d="M10.5 7v-.75h-.75V7h.75Zm3 0h.75v-.75h-.75V7Zm0 3v.75h.75V10h-.75Zm-3 0h-.75v.75h.75V10ZM4.25 8.5a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 5.75 8.5h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 1.25 8.5h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 3.5 6.25v1.5Zm17.75.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5a2.25 2.25 0 0 0 2.25 2.25v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5a2.25 2.25 0 0 0-2.25-2.25v1.5Zm-1.75 7.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 18 17.75v-1.5Zm0-1.5a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 18 13.25v1.5Zm-11.25.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25h-1.5Zm-.75.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 6 17.75v-1.5Zm-.75-.75a.75.75 0 0 1 .75-.75v-1.5a2.25 2.25 0 0 0-2.25 2.25h1.5Zm5.25-7.75h3v-1.5h-3v1.5Zm3 1.5h-3v1.5h3v-1.5Zm3.75 6.25c0-.41.33-.744.74-.75l-.02-1.5a2.25 2.25 0 0 0-2.22 2.25h1.5Zm.74-.75H18v-1.5h-.03l.02 1.5ZM6 14.75h.01l.02-1.5H6v1.5Zm.01 0c.41.006.74.34.74.75h1.5a2.25 2.25 0 0 0-2.22-2.25l-.02 1.5Zm5.24-6.25V7h-1.5v1.5h1.5Zm0 1.5V8.689h-1.5V10h1.5Zm0-1.311V8.5h-1.5v.189h1.5Zm-4.482 5.373a5.254 5.254 0 0 1 3.919-4.647l-.374-1.452a6.754 6.754 0 0 0-5.04 5.975l1.495.124Zm6.545-4.647a5.254 5.254 0 0 1 3.919 4.647l1.495-.123a6.754 6.754 0 0 0-5.04-5.976l-.374 1.452Zm-.563-.726V10h1.5V8.689h-1.5Zm0-1.689v1.5h1.5V7h-1.5Zm0 1.5v.189h1.5V8.5h-1.5ZM19 7.75h-5.5v1.5H19v-1.5Zm-8.5 0H5v1.5h5.5v-1.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgVectorCurve;
