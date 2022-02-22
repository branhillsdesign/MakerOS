import * as React from "react";

const SvgMagicHat = ({ title, titleId, ...props }) => (
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
      d="M1 22h4v-2H1v2Zm4.1-12h8.8V8H5.1v2ZM5 22h9v-2H5v2Zm9 0h4v-2h-4v2ZM13 9.1V17h2V9.1h-2Zm0 7.9v4h2v-4h-2Zm-7 4v-4H4v4h2Zm0-4V9.1H4V17h2Zm8-1H5v2h9v-2Zm1.092-12.58.923 2 1.816-.84-.923-2-1.816.84Zm1.552 3.362 4.448 9.637 1.816-.838-4.448-9.637-1.816.838ZM13.9 10a.9.9 0 0 1-.9-.9h2A1.1 1.1 0 0 0 13.9 8v2ZM5.1 8A1.1 1.1 0 0 0 4 9.1h2a.9.9 0 0 1-.9.9V8Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMagicHat;
