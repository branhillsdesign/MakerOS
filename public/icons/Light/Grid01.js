import * as React from "react";

const SvgGrid01 = ({ title, titleId, ...props }) => (
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
      d="M2.6 11V3c0-.22.18-.4.4-.4h7c.22 0 .4.18.4.4v8a.4.4 0 0 1-.4.4H3a.4.4 0 0 1-.4-.4Zm11-5V3c0-.22.18-.4.4-.4h7c.22 0 .4.18.4.4v3a.4.4 0 0 1-.4.4h-7a.4.4 0 0 1-.4-.4Zm0 8v-4c0-.22.18-.4.4-.4h7c.22 0 .4.18.4.4v4a.4.4 0 0 1-.4.4h-7a.4.4 0 0 1-.4-.4Zm0 7v-3c0-.22.18-.4.4-.4h7c.22 0 .4.18.4.4v3a.4.4 0 0 1-.4.4h-7a.4.4 0 0 1-.4-.4Zm-3.2-6v6a.4.4 0 0 1-.4.4H3a.4.4 0 0 1-.4-.4v-6c0-.22.18-.4.4-.4h7c.22 0 .4.18.4.4Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgGrid01;
