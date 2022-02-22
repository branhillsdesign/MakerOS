import * as React from "react";

const SvgCake = ({ title, titleId, ...props }) => (
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
      d="m10 5 .23-.554-.225-.094-.228.09L10 5ZM2 8.2l-.223-.557-.377.15V8.2H2ZM22 10h.6v-.4l-.37-.154L22 10ZM2 17.2h-.6v.548l.546.05L2 17.2ZM22 19l-.054.598.654.058V19H22ZM9.777 4.443l-8 3.2.446 1.114 8-3.2-.446-1.114Zm-7.83 4.355 20 1.8.107-1.196-20-1.8-.108 1.196Zm20.284.648-12-5-.462 1.108 12 5 .462-1.108ZM1.946 12.998l20 1.8.108-1.196-20-1.8-.108 1.196Zm0 4.8 20 1.8.108-1.196-20-1.8-.108 1.196ZM21.4 10v4.2h1.2V10h-1.2Zm0 4.2V19h1.2v-4.8h-1.2Zm-20-6v4.2h1.2V8.2H1.4Zm0 4.2v4.8h1.2v-4.8H1.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCake;
