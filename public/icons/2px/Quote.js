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
      d="M6 8V7H5v1h1Zm0 4.444H5v1h1v-1Zm4.364 0 .93.366.07-.176v-.19h-1Zm0-4.444h1V7h-1v1Zm3.272 0V7h-1v1h1Zm0 4.444h-1v1h1v-1Zm4.364 0 .93.366.07-.176v-.19h-1ZM18 8h1V7h-1v1ZM5 8v4.444h2V8H5Zm1 5.444h4.364v-2H6v2Zm5.364-1V8h-2v4.444h2Zm-1-5.444H6v2h4.364V7Zm-.931 5.079L7.25 17.634l1.862.732 2.181-5.556-1.861-.731ZM12.636 8v4.444h2V8h-2Zm1 5.444H18v-2h-4.364v2Zm5.364-1V8h-2v4.444h2ZM18 7h-4.364v2H18V7Zm-.93 5.079-2.183 5.555 1.862.732 2.182-5.556-1.862-.731Z"
      fill="#555770"
    />
  </svg>
);

export default SvgQuote;
