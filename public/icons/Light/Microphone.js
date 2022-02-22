import * as React from "react";

const SvgMicrophone = ({ title, titleId, ...props }) => (
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
      d="M12.6 23v-3.454h-1.2V23h1.2ZM4.4 13c0 3.984 3.441 7.145 7.6 7.145v-1.2c-3.573 0-6.4-2.699-6.4-5.945H4.4Zm14 0c0 3.246-2.827 5.945-6.4 5.945v1.2c4.159 0 7.6-3.161 7.6-7.145h-1.2Z"
      fill="#555770"
    />
    <path
      d="M15.4 6v6a3.4 3.4 0 1 1-6.8 0V6a3.4 3.4 0 1 1 6.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMicrophone;
