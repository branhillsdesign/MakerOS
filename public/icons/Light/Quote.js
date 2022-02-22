import * as React from "react";

const SvgQuote = ({ title, titleId, ...props }) => (
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
      d="M6 8v-.6h-.6V8H6Zm0 4.444h-.6v.6H6v-.6Zm4.364 0 .558.22.042-.106v-.114h-.6Zm0-4.444h.6v-.6h-.6V8Zm3.272 0v-.6h-.6V8h.6Zm0 4.444h-.6v.6h.6v-.6Zm4.364 0 .558.22.042-.106v-.114H18ZM18 8h.6v-.6H18V8ZM5.4 8v4.444h1.2V8H5.4Zm.6 5.044h4.364v-1.2H6v1.2Zm4.964-.6V8h-1.2v4.444h1.2Zm-.6-5.044H6v1.2h4.364V7.4Zm-.559 4.825-2.182 5.556 1.117.438 2.182-5.555-1.117-.439ZM13.036 8v4.444h1.2V8h-1.2Zm.6 5.044H18v-1.2h-4.364v1.2Zm4.964-.6V8h-1.2v4.444h1.2ZM18 7.4h-4.364v1.2H18V7.4Zm-.558 4.825-2.182 5.556 1.117.438 2.181-5.555-1.116-.439Z"
      fill="#555770"
    />
  </svg>
);

export default SvgQuote;
