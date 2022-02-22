import * as React from "react";

const SvgAtm = ({ title, titleId, ...props }) => (
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
      d="M12.25 14.75v-5.5h-1.5v5.5h1.5ZM11.5 8.5h-3V10h3V8.5Zm0 1.5h3V8.5h-3V10ZM6 8.5H3V10h3V8.5ZM1.75 9.75v2.5h1.5v-2.5h-1.5Zm0 2.5v2.5h1.5v-2.5h-1.5Zm5.5 2.5v-2.5h-1.5v2.5h1.5Zm0-2.5v-2.5h-1.5v2.5h1.5ZM2.5 13h4v-1.5h-4V13Zm14.75 1.75v-5h-1.5v5h1.5Zm3.5-5v5h1.5v-5h-1.5ZM17 10h2V8.5h-2V10Zm2 0h2V8.5h-2V10Zm-.75-.75v4.5h1.5v-4.5h-1.5Zm4 .5c0-.69-.56-1.25-1.25-1.25V10a.25.25 0 0 1-.25-.25h1.5Zm-5 0A.25.25 0 0 1 17 10V8.5c-.69 0-1.25.56-1.25 1.25h1.5ZM3 8.5c-.69 0-1.25.56-1.25 1.25h1.5A.25.25 0 0 1 3 10V8.5ZM6 10a.25.25 0 0 1-.25-.25h1.5c0-.69-.56-1.25-1.25-1.25V10Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAtm;
