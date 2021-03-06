import * as React from "react";

const SvgHandball = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Handball_svg__a)" fill="#555770">
      <path d="M12.2 9.652a6.04 6.04 0 0 1-.823-.572l-3.292 5.701 1.732 1 1.732 1 3.239-5.61a5.59 5.59 0 0 0-.422-.27l-1.299-.75-.866-.5Z" />
      <path d="m11.377 9.08.381-.463-.381.463Zm3.41 2.091.346-.49-.345.49ZM9.486 1.156a6.602 6.602 0 0 0 1.51 8.387l.763-.926a5.402 5.402 0 0 1-1.234-6.861l-1.039-.6Zm1.51 8.387c.28.23.582.441.906.629l.6-1.04a5.442 5.442 0 0 1-.743-.515l-.763.926Zm3.071 1.879c.13.075.256.155.377.24l.69-.981a6.202 6.202 0 0 0-.467-.299l-.6 1.04Zm.377.24a4.9 4.9 0 0 1 1.417 6.453l1.039.6a6.1 6.1 0 0 0-1.766-8.034l-.69.98Zm-8.088 7.316 2.25-3.897-1.04-.6-2.25 3.897 1.04.6Zm2.25-3.897 3.291-5.7-1.04-.6-3.29 5.7 1.039.6Zm-.286 8.495 3.75-6.495-1.04-.6-3.75 6.495 1.04.6Zm3.75-6.495 3.238-5.61-1.039-.6-3.239 5.61 1.04.6Zm-4.284-1.78 1.732 1 .6-1.04-1.732-1-.6 1.04Zm1.732 1 1.732 1 .6-1.04-1.732-1-.6 1.04Zm2.384-6.13.866.5.6-1.039-.866-.5-.6 1.04Zm.866.5 1.3.75.6-1.039-1.3-.75-.6 1.04Z" />
      <circle
        cx={15.5}
        cy={6.938}
        r={1.4}
        transform="rotate(30 15.5 6.938)"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <circle
        cx={12.853}
        cy={2.523}
        r={0.9}
        transform="rotate(30 12.853 2.523)"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <defs>
      <clipPath id="Handball_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHandball;
