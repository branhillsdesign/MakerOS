import * as React from "react";

const SvgSledges = ({ title, titleId, ...props }) => (
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
      d="M3 14v-1H2v1h1Zm17-4V9h-1v1h1Zm1 0h1V9h-1v1ZM3 15H2v1h1v-1Zm13 0c.827 0 2.044-.24 3.084-.989C20.175 13.226 21 11.927 21 10h-2c0 1.274-.509 1.974-1.084 2.389-.627.45-1.41.611-1.916.611v2Zm4-4h1V9h-1v2Zm0-1c0 .673-.21 1.706-.811 2.54C18.623 13.326 17.674 14 16 14v2c2.326 0 3.876-.992 4.811-2.29C21.711 12.46 22 10.992 22 10h-2Zm-4 4H3v2H16v-2ZM4 15v-1H2v1h2Zm8 0h4v-2h-4v2Zm1-1V9h-2v5h2ZM3 15h3v-2H3v2Zm3 0h6v-2H6v2Zm1-1V9H5v5h2Zm-5-4h14V8H2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSledges;
