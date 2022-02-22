import * as React from "react";

const SvgBackpack = ({ title, titleId, ...props }) => (
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
      d="M10 2.5v1.812h4V2.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m18.395 9.88.6 9.94c.104 1.726-1.303 3.18-3.075 3.18H8.08c-1.772 0-3.179-1.454-3.075-3.18l.6-9.94m12.79 0c-.144-2.385-1.67-4.48-3.931-5.4A6.518 6.518 0 0 0 14 4.313h-4a6.51 6.51 0 0 0-.464.169c-2.261.918-3.787 3.014-3.93 5.399m12.789 0C15 13 9 13 5.605 9.88"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 10.5V14m-1.5 6h3a2 2 0 0 0 2-2v-.9a.1.1 0 0 0-.1-.1H8.6a.1.1 0 0 0-.1.1v.9a2 2 0 0 0 2 2Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBackpack;
