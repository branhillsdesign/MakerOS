import * as React from "react";

const SvgTimelapse = ({ title, titleId, ...props }) => (
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
      d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 17a5 5 0 0 0 1-9.9V12l-4 4c.836.628 1.874 1 3 1Z"
      fill="#555770"
    />
    <path
      d="m13 7.1.2-.98-1.2-.243V7.1h1Zm0 4.9.707.707.293-.293V12h-1Zm-4 4-.707-.707-.815.815.921.692L9 16Zm6-8-.6.8.6-.8Zm1 4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4-4.9V12h2V7.1h-2Zm0 8.9a3.978 3.978 0 0 1-2.4-.8l-1.2 1.6A5.978 5.978 0 0 0 12 18v-2Zm.293-4.707-4 4 1.414 1.414 4-4-1.414-1.414Zm.508-3.213c.59.12 1.133.37 1.599.72l1.201-1.6A5.977 5.977 0 0 0 13.2 6.12l-.398 1.96Zm1.599.72A3.992 3.992 0 0 1 16 12h2a5.992 5.992 0 0 0-2.399-4.8L14.4 8.8Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTimelapse;
