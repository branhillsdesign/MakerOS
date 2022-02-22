import * as React from "react";

const SvgSearchDocument = ({ title, titleId, ...props }) => (
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
      d="M19 8h1a1 1 0 0 0-.293-.707L19 8Zm-5-5 .707-.707A1 1 0 0 0 14 2v1Zm0 5h-1v1h1V8ZM4 4v16h2V4H4Zm10-2H6v2h8V2Zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414ZM13 3v5h2V3h-2Zm1 6h5V7h-5v2Zm6 1.5V8h-2v2.5h2ZM6 22h4v-2H6v2Zm-2-2a2 2 0 0 0 2 2v-2H4ZM6 4V2a2 2 0 0 0-2 2h2ZM17.178 19.592l4.115 4.115 1.414-1.414-4.115-4.115-1.414 1.414Zm.889-3.559a3.033 3.033 0 0 1-3.034 3.034v2a5.033 5.033 0 0 0 5.034-5.034h-2Zm-3.034 3.034A3.033 3.033 0 0 1 12 16.033h-2a5.033 5.033 0 0 0 5.033 5.034v-2ZM12 16.033A3.033 3.033 0 0 1 15.033 13v-2A5.033 5.033 0 0 0 10 16.033h2ZM15.033 13a3.033 3.033 0 0 1 3.034 3.033h2A5.033 5.033 0 0 0 15.033 11v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSearchDocument;
