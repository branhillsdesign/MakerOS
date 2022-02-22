import * as React from "react";

const SvgThunder = ({ title, titleId, ...props }) => (
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
      d="M10.105 2V1a1 1 0 0 0-.934.642l.934.358ZM6 12.714l-.934-.357A1 1 0 0 0 6 13.713v-1Zm4.132 0 .938.346a1 1 0 0 0-.938-1.346v1ZM6.71 22l-.939-.346a1 1 0 0 0 1.69 1.006L6.711 22ZM18 9.143l.751.66A1 1 0 0 0 18 8.143v1Zm-5.816 0-.867-.498a1 1 0 0 0 .867 1.498v-1ZM16.29 2l.867.498A1 1 0 0 0 16.29 1v1ZM9.17 1.642 5.066 12.357l1.868.715 4.105-10.714-1.868-.716ZM6 13.714h4.132v-2H6v2Zm3.193-1.345-3.42 9.285 1.876.692 3.42-9.286-1.876-.691Zm-1.731 10.29 11.29-12.856-1.503-1.32L5.959 21.34l1.503 1.32ZM18 8.144h-5.816v2H18v-2ZM13.051 9.64l4.106-7.143-1.735-.996-4.105 7.143 1.734.996ZM16.29 1h-6.185v2h6.184V1Z"
      fill="#555770"
    />
  </svg>
);

export default SvgThunder;
