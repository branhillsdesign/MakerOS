import * as React from "react";

const SvgBeachBucket = ({ title, titleId, ...props }) => (
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
      d="M3 6V5H2v1h1Zm0 3H2v1h1V9Zm2 12-.997.083.077.917H5v-1Zm9 1h-1v1h1v-1Zm.5 0v1h1v-1h-1Zm0-.5v-1h-1v1h1Zm6 0h1v-1h-1v1Zm0 .5h-1v1h1v-1Zm.5 0v1h1v-1h-1ZM15.5 2.5v-1h-1v1h1Zm4 0h1v-1h-1v1ZM15.768 6l.865-.5-.865.5ZM3 10h1V8H3v2Zm.003-.917 1 12 1.994-.166-1-12-1.994.166ZM15 18a2.5 2.5 0 0 1 2.5-2.5v-2A4.5 4.5 0 0 0 13 18h2Zm2.5-2.5A2.5 2.5 0 0 1 20 18h2a4.5 4.5 0 0 0-4.5-4.5v2ZM14 23h.5v-2H14v2Zm1.5-1v-.5h-2v.5h2Zm-1 .5h6v-2h-6v2Zm5-1v.5h2v-.5h-2Zm1 1.5h.5v-2h-.5v2Zm1.5-1v-4h-2v4h2ZM16.5 5V2.5h-2V5h2Zm-1-1.5h4v-2h-4v2Zm3-1V5h2V2.5h-2Zm0 2.5a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2ZM2 6v3h2V6H2Zm11 12v3h2v-3h-2Zm0 3v1h2v-1h-2Zm-8 1h9v-2H5v2ZM17.5 6a1 1 0 0 1-.867-.5l-1.731 1A3 3 0 0 0 17.5 8V6Zm-.867-.5A.99.99 0 0 1 16.5 5h-2c0 .545.146 1.058.402 1.5l1.731-1Zm-.865-.5H3v2h12.768V5Zm2.732 9.5V9h-2v5.5h2Zm0-5.5V7h-2v2h2ZM4 10h13.5V8H4v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBeachBucket;
