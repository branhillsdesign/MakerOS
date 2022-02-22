import * as React from "react";

const SvgBurstMode = ({ title, titleId, ...props }) => (
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
      d="M1 5v14h2V5H1Zm4 0v14h2V5H5Zm4 1.1v11.8h2V6.1H9ZM10.1 19h11.8v-2H10.1v2ZM23 17.9V6.1h-2v11.8h2ZM21.9 5H10.1v2h11.8V5ZM23 6.1A1.1 1.1 0 0 0 21.9 5v2a.9.9 0 0 1-.9-.9h2ZM21.9 19a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2ZM9 17.9a1.1 1.1 0 0 0 1.1 1.1v-2a.9.9 0 0 1 .9.9H9Zm2-11.8a.9.9 0 0 1-.9.9V5A1.1 1.1 0 0 0 9 6.1h2ZM12 16l3.2-4 1.943 2.546.857-1.091L20 16h-8Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBurstMode;
