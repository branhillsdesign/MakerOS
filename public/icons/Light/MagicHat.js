import * as React from "react";

const SvgMagicHat = ({ title, titleId, ...props }) => (
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
      d="M1 21.6h4v-1.2H1v1.2Zm4.1-12h8.8V8.4H5.1v1.2Zm-.1 12h9v-1.2H5v1.2Zm9 0h4v-1.2h-4v1.2Zm-.6-12.5V17h1.2V9.1h-1.2Zm0 7.9v4h1.2v-4h-1.2Zm-7.8 4v-4H4.4v4h1.2Zm0-4V9.1H4.4V17h1.2Zm8.4-.6H5v1.2h9v-1.2Zm1.455-13.149.923 2 1.09-.502-.923-2-1.09.502Zm1.553 3.364 4.447 9.636 1.09-.502-4.448-9.637-1.09.503ZM13.9 9.6a.5.5 0 0 1-.5-.5h1.2a.7.7 0 0 0-.7-.7v1.2ZM5.1 8.4a.7.7 0 0 0-.7.7h1.2a.5.5 0 0 1-.5.5V8.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMagicHat;
