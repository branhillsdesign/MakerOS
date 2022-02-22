import * as React from "react";

const SvgBackward = ({ title, titleId, ...props }) => (
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
      d="M10 5h1a1 1 0 0 0-1.707-.707L10 5Zm0 4H9v1h1V9Zm11 11-.8.6a1 1 0 0 0 1.786-.764L21 20Zm-11-5v-1H9v1h1Zm0 4-.707.707A1 1 0 0 0 11 19h-1Zm-7-7-.707-.707-.707.707.707.707L3 12Zm6-7v4h2V5H9Zm1 5c3.478 0 8.888 3.413 10.014 10.164l1.972-.328C20.712 12.187 14.522 8 10 8v2Zm11.8 9.4c-.771-1.028-1.867-2.407-3.728-3.51C16.206 14.784 13.65 14 10 14v2c3.35 0 5.544.716 7.053 1.61 1.514.898 2.418 2.018 3.147 2.99l1.6-1.2ZM9 15v4h2v-4H9Zm1.707 3.293-7-7-1.414 1.414 7 7 1.414-1.414Zm-7-5.586 7-7-1.414-1.414-7 7 1.414 1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBackward;
