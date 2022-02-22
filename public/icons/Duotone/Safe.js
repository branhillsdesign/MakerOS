import * as React from "react";

const SvgSafe = ({ title, titleId, ...props }) => (
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
      d="M6 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2M6 21v2m0-2h12m0 0h2a1 1 0 0 0 1-1v-2m-3 3v2m3-17h-.9a.1.1 0 0 0-.1.1v2.8a.1.1 0 0 0 .1.1h.9m0-3v3m0 0v6m0 0h-.9a.1.1 0 0 0-.1.1v2.8a.1.1 0 0 0 .1.1h.9m0-3v3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M7.43 8.5A4.984 4.984 0 0 0 6 12c0 1.399.574 2.663 1.5 3.57M7.43 8.5A4.985 4.985 0 0 1 11 7c1.399 0 2.663.574 3.57 1.5m-7.14 0 2.828 2.83m4.242 4.24A4.985 4.985 0 0 0 16 12a4.984 4.984 0 0 0-1.43-3.5m-.07 7.07A4.984 4.984 0 0 1 11 17a4.984 4.984 0 0 1-3.5-1.43m7 0-2.83-2.828m2.9-4.242-2.828 2.83M7.5 15.57l2.83-2.828m1.412-1.413a.998.998 0 0 0-1.484 0m1.484 0a.996.996 0 0 1-.071 1.413m-1.413-1.413a.996.996 0 0 0 .071 1.413m0 0a.996.996 0 0 0 1.342 0"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSafe;
