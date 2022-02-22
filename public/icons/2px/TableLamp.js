import * as React from "react";

const SvgTableLamp = ({ title, titleId, ...props }) => (
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
      d="M7 2V1h-.82l-.16.804L7 2ZM5 12l-.98-.196L3.78 13H5v-1Zm2.5 3v-1h-1v1h1Zm0 1h-1v1h1v-1ZM9 22l-.986.164.139.836H9v-1Zm8-20 .98-.196L17.82 1H17v1Zm2 10v1h1.22l-.24-1.196L19 12Zm-2.5 3h1v-1h-1v1Zm0 1v1h1v-1h-1ZM15 22v1h.847l.14-.836L15 22ZM6.02 1.804l-2 10 1.96.392 2-10-1.96-.392ZM5 13h7v-2H5v2Zm6-1v3h2v-3h-2Zm1 2H7.5v2H12v-2Zm-5.5 1v1h2v-1h-2Zm1 2H8v-2h-.5v2Zm-.486-.836 1 6 1.972-.328-1-6-1.972.328Zm9.005-13.968 2 10 1.962-.392-2-10-1.962.392ZM19 11h-7v2h7v-2Zm-7 5h4.5v-2H12v2Zm3.5-1v1h2v-1h-2Zm1 0H16v2h.5v-2Zm-1.486.836-1 6 1.972.328 1-6-1.972-.328ZM8 17h8v-2H8v2Zm1 6h6v-2H9v2ZM7 3h10V1H7v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTableLamp;
