import * as React from "react";

const SvgRaft = ({ title, titleId, ...props }) => (
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
      d="M5.857.486a1 1 0 1 0-1.714 1.028L5.857.486Zm6 0a1 1 0 0 0-1.714 1.028L11.857.486Zm-7.714 22a1 1 0 0 0 1.714 1.029l-1.714-1.03Zm6 0a1 1 0 0 0 1.714 1.029l-1.714-1.03Zm-1.286-17-3-5-1.714 1.028 3 5 1.714-1.029Zm6 0-3-5-1.714 1.028 3 5 1.714-1.029Zm-7.714 12-3 5 1.714 1.029 3-5-1.714-1.03Zm6 0-3 5 1.714 1.029 3-5-1.714-1.03Z"
      fill="currentColor"
    />
    <path
      d="M1 9a3 3 0 0 1 3-3h11.515a6 6 0 0 1 4.242 1.757L21.88 9.88a3 3 0 0 1 0 4.242l-2.122 2.122A6 6 0 0 1 15.515 18H4a3 3 0 0 1-3-3V9Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M5 10a1 1 0 0 1 1-1h7.916a4 4 0 0 1 2.539.91l.664.544a2 2 0 0 1 0 3.091l-.664.546a4 4 0 0 1-2.54.909H6a1 1 0 0 1-1-1v-4Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgRaft;
