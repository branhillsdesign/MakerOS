import * as React from "react";

const SvgPower = ({ title, titleId, ...props }) => (
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
      d="M8.6 2a.6.6 0 0 0-1.2 0h1.2ZM5 14h-.6v.248l.176.176L5 14Zm5 5h.6v-.248l-.176-.176L10 19Zm0 3h-.6v.6h.6V22Zm6.6-20a.6.6 0 1 0-1.2 0h1.2ZM19 14l.424.424.176-.175V14H19Zm-5 5-.424-.424-.176.175V19h.6Zm0 3v.6h.6V22H14ZM7.4 2v6h1.2V2H7.4ZM8 7.4H6v1.2h2V7.4ZM4.4 9v5h1.2V9H4.4Zm.176 5.424 5 5 .848-.848-5-5-.848.848ZM9.4 19v3h1.2v-3H9.4Zm6-17v6h1.2V2h-1.2Zm.6 6.6h2V7.4h-2v1.2Zm2.4.4v5h1.2V9h-1.2Zm.176 4.576-5 5 .848.848 5-5-.848-.848ZM13.4 19v3h1.2v-3h-1.2ZM8 8.6h8V7.4H8v1.2Zm2 14h4v-1.2h-4v1.2Zm8-14c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 18 7.4v1.2ZM6 7.4A1.6 1.6 0 0 0 4.4 9h1.2c0-.22.18-.4.4-.4V7.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPower;
