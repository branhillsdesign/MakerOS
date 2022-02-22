import * as React from "react";

const SvgDart = ({ title, titleId, ...props }) => (
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
      d="M3.99 17.024h1.685l3.368-3.981H3.99a1.99 1.99 0 0 0 0 3.98ZM6.976 20.01v-1.685l3.981-3.368v5.052a1.99 1.99 0 1 1-3.98 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="m21 3-4 4" stroke="currentColor" />
    <path
      d="m3.99 19.014 1.684-1.99 3.369-3.981 4.531-5.355a1.943 1.943 0 1 1 2.738 2.738l-5.355 4.53-3.981 3.37-1.99 1.683-.996-.995Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgDart;
