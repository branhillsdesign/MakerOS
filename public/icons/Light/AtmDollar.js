import * as React from "react";

const SvgAtmDollar = ({ title, titleId, ...props }) => (
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
      d="M4 5.6h16V4.4H4v1.2Zm16.4.4v12h1.2V6h-1.2Zm-.394 12.4H3.997v1.2H20.006v-1.2ZM3.6 18V6H2.4v12h1.2Zm7.8-11v2h1.2V7h-1.2Zm1.2 10v-2h-1.2v2h1.2Zm-3.202-1.4H13.9v-1.2H9.398v1.2Zm5.202-.7v-2.8h-1.2v2.8h1.2Zm-.7-3.5h-3.8v1.2h3.8v-1.2Zm-3.3.5V9.1H9.4v2.8h1.2Zm-.5-2.3h4.505V8.4H10.1v1.2Zm4.5 2.5a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-.7 3.5a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm-9.903 2.8A.397.397 0 0 1 3.6 18H2.4c0 .881.71 1.6 1.597 1.6v-1.2ZM20.4 18c0 .226-.178.4-.394.4v1.2c.889 0 1.594-.721 1.594-1.6h-1.2Zm-9.8-8.9a.5.5 0 0 1-.5.5V8.4a.7.7 0 0 0-.7.7h1.2ZM20 5.6c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 20 4.4v1.2Zm-9.9 5.8a.5.5 0 0 1 .5.5H9.4a.7.7 0 0 0 .7.7v-1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAtmDollar;
