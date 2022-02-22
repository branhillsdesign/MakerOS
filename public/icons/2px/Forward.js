import * as React from "react";

const SvgForward = ({ title, titleId, ...props }) => (
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
      d="M14 5h-1a1 1 0 0 1 1.707-.707L14 5Zm0 4h1v1h-1V9ZM3 20l.8.6a1 1 0 0 1-1.786-.764L3 20Zm11-5v-1h1v1h-1Zm0 4 .707.707A1 1 0 0 1 13 19h1Zm7-7 .707-.707.707.707-.707.707L21 12Zm-6-7v4h-2V5h2Zm-1 5c-3.478 0-8.888 3.413-10.014 10.164l-1.972-.328C3.288 12.187 9.478 8 14 8v2ZM2.2 19.4c.771-1.028 1.867-2.407 3.728-3.51C7.794 14.784 10.35 14 14 14v2c-3.35 0-5.544.716-7.053 1.61-1.514.898-2.418 2.018-3.147 2.99l-1.6-1.2ZM15 15v4h-2v-4h2Zm-1.707 3.293 7-7 1.414 1.414-7 7-1.414-1.414Zm7-5.586-7-7 1.414-1.414 7 7-1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgForward;
