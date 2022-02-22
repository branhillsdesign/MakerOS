import * as React from "react";

const SvgHanger = ({ title, titleId, ...props }) => (
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
      d="M12 11.5v-1c0-.552-.475-.98-.959-1.244A2 2 0 1 1 14 7.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M3.188 14.972 12 11.5l8.812 3.472A2 2 0 0 1 22 16.8V18H2v-1.2a2 2 0 0 1 1.188-1.828Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgHanger;
