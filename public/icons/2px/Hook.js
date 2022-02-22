import * as React from "react";

const SvgHook = ({ title, titleId, ...props }) => (
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
      d="m17 14 .707-.707L16 11.586V14h1Zm.5.5v1h2.414l-1.707-1.707-.707.707ZM9 4a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3H9ZM8 5a1 1 0 0 1-1-1H5a3 3 0 0 0 3 3V5ZM7 4a1 1 0 0 1 1-1V1a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2ZM7 6v11.5h2V6H7Zm9.293 8.707.5.5 1.414-1.414-.5-.5-1.414 1.414ZM16 14v.5h2V14h-2Zm1.5-.5H17v2h.5v-2Zm-1.5 1v3h2v-3h-2Zm0 3a3.5 3.5 0 0 1-3.5 3.5v2a5.5 5.5 0 0 0 5.5-5.5h-2Zm-9 0a5.5 5.5 0 0 0 5.5 5.5v-2A3.5 3.5 0 0 1 9 17.5H7Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHook;
