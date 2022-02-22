import * as React from "react";

const SvgAudioJacks = ({ title, titleId, ...props }) => (
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
      d="M12 8h1v9.586l-.707.707-.293.293-.293-.293-.707-.707V8h1Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M6 8h1v9.586l-.707.707-.293.293-.293-.293L5 17.586V8h1Zm12 0h1v9.586l-.707.707-.293.293-.293-.293-.707-.707V8h1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAudioJacks;
