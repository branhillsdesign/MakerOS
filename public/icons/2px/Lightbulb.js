import * as React from "react";

const SvgLightbulb = ({ title, titleId, ...props }) => (
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
      d="M9 20H8v1h1v-1Zm6 0v1h1v-1h-1ZM7 10a5 5 0 0 1 5-5V3a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm-2.5 9.332A4.998 4.998 0 0 1 7 10H5a6.998 6.998 0 0 0 3.5 6.063l1-1.731Zm-1.5.865V20h2v-4.803H8ZM12 20a1 1 0 0 1-.867-.5l-1.731 1A3 3 0 0 0 12 22v-2Zm-3 1h1.268v-2H9v2Zm3.867-1.5A1 1 0 0 1 12 20v2a3 3 0 0 0 2.598-1.5l-1.731-1Zm.865 1.5H15v-2h-1.268v2ZM17 10a4.998 4.998 0 0 1-2.5 4.332l1 1.73A6.998 6.998 0 0 0 19 10h-2Zm-1 10v-4.803h-2V20h2Zm-5.732 1h3.464v-2h-3.464v2ZM9 16.197h6v-2H9v2Z"
      fill="#555770"
    />
    <path
      d="M9 18h6v-1H9v1Zm3.5-3v-4h-1v4h1Zm-.146-4.354-2-2-.708.708 2 2 .708-.708Zm0 .708 2-2-.708-.708-2 2 .708.708Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLightbulb;
