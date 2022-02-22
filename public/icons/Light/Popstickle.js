import * as React from "react";

const SvgPopstickle = ({ title, titleId, ...props }) => (
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
      d="m7.732 3.175-.307-.515.307.515Zm8.536 0 .307-.515-.307.515ZM16.4 4.46v10.582h1.2V4.46h-1.2ZM7.6 15.042V4.46H6.4v10.582h1.2Zm3.9.394H8v1.2h3.5v-1.2Zm-.6.6v5.467h1.2v-5.467h-1.2Zm5.1-.6h-3.5v1.2H16v-1.2Zm-3.5 0h-1v1.2h1v-1.2Zm.6 6.067v-5.467h-1.2v5.467h1.2ZM12 22.6c.604 0 1.1-.488 1.1-1.097h-1.2c0-.06.048-.103.1-.103v1.2Zm-1.1-1.097c0 .61.496 1.097 1.1 1.097v-1.2c.052 0 .1.043.1.103h-1.2ZM8.04 3.69a7.738 7.738 0 0 1 7.92 0l.615-1.03a8.938 8.938 0 0 0-9.15 0l.615 1.03ZM6.4 15.042c0 .884.72 1.594 1.6 1.594v-1.2c-.224 0-.4-.18-.4-.394H6.4Zm10 0a.397.397 0 0 1-.4.394v1.2c.88 0 1.6-.71 1.6-1.594h-1.2ZM17.6 4.46c0-.739-.39-1.422-1.025-1.8l-.615 1.03c.274.164.44.456.44.77h1.2Zm-10 0c0-.314.166-.606.44-.77l-.615-1.03A2.097 2.097 0 0 0 6.4 4.46h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPopstickle;