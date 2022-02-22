import * as React from "react";

const SvgUserLocked = ({ title, titleId, ...props }) => (
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
      d="m3 22-.959-.284A1 1 0 0 0 3 23v-1Zm18 0v1a1 1 0 0 0 .959-1.284L21 22Zm-9-11a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6v-2ZM8 7a4 4 0 0 1 4-4V1a6 6 0 0 0-6 6h2ZM3.959 22.284C5.049 18.607 8.265 16 12 16v-2c-4.711 0-8.644 3.28-9.959 7.716l1.918.568ZM12 16c3.735 0 6.952 2.607 8.041 6.284l1.918-.568C20.645 17.279 16.71 14 12 14v2Zm-9 7h18v-2H3v2Zm9-20c.73 0 1.412.195 2 .535l1-1.732A5.977 5.977 0 0 0 12 1v2ZM21.125 5.625V8h2V5.625h-2Zm1 1.375h-5.25v2h5.25V7Zm-4.25 1V5.625h-2V8h2Zm-1-1H16.1v2h.775V7ZM15 8.1V12h2V8.1h-2Zm2 5.9h5v-2h-5v2Zm7-2V8.1h-2V12h2Zm-1.1-5h-.775v2h.775V7ZM24 8.1A1.1 1.1 0 0 0 22.9 7v2a.9.9 0 0 1-.9-.9h2ZM16.1 7A1.1 1.1 0 0 0 15 8.1h2a.9.9 0 0 1-.9.9V7Zm5.9 7a2 2 0 0 0 2-2h-2v2ZM19.5 4c.898 0 1.625.728 1.625 1.625h2A3.625 3.625 0 0 0 19.5 2v2ZM15 12a2 2 0 0 0 2 2v-2h-2Zm4.5-10a3.625 3.625 0 0 0-3.625 3.625h2c0-.897.727-1.625 1.625-1.625V2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUserLocked;
