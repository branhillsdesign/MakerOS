import * as React from "react";

const SvgBread = ({ title, titleId, ...props }) => (
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
      d="M8.486 14.378c-1.417-1.417-3.32-1.93-5.089-1.396 1.343-3.11 4.544-6.284 7.63-8.219 1.912-.416 4.048.311 5.473 1.737M5.23 9.883c2.21-2.21 5.44-1.925 7.502.137"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M2.413 16.412c-.341 1.693-.278 3.626 1.05 4.728 1.037.86 3.006 1.147 4.152 0L21.14 7.615c1.146-1.146.86-3.115 0-4.151-.914-1.102-2.406-1.386-3.813-1.123-2.21.414-4.193 1.1-6.3 2.422-3.087 1.935-6.288 5.109-7.63 8.219-.4.929-.734 2.185-.984 3.43Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBread;
