import * as React from "react";

const SvgSunRising = ({ title, titleId, ...props }) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.778 9.31h.497l.352-.35L12 6.585l2.373 2.373.352.352H18.578V13.164l.352.352 2.373 2.373-2.022 2.022h-2.033c-.243.436-.538.839-.878 1.2h3.408l2.373-2.373.849-.849-.849-.848-2.373-2.374V8.111h-4.556l-2.373-2.373L12 4.889l-.848.849L8.777 8.11H4.222v4.556L1.849 15.04 1 15.89l.849.849 2.373 2.373H7.63a6.02 6.02 0 0 1-.878-1.2H4.72l-2.022-2.022 2.373-2.373.352-.352V9.311h3.356Z"
      fill="#555770"
    />
    <path
      d="M2 18.5h20M12 17v-5m0 0-1 1h2l-1-1Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgSunRising;
