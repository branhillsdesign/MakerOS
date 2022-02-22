import * as React from "react";

const SvgCricket = ({ title, titleId, ...props }) => (
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
      d="m6.07 5.07.425-.424-.424.425Zm8.36 8.36-.425.424.424-.425Zm-3 3-.425.424.424-.425ZM3.07 8.07l-.424.425.425-.424Zm0-.14-.424-.425.425.424Zm2.86-2.86-.425-.424.424.425Zm-.284.425 8.359 8.359.848-.849-8.358-8.359-.849.849Zm8.359 7.651-2.859 2.859.849.849 2.859-2.859-.849-.849Zm-2.152 2.859L3.495 7.646l-.849.849 8.359 8.359.848-.849ZM3.495 8.354l2.859-2.859-.849-.849-2.859 2.859.849.849ZM21.6 5.5a3.1 3.1 0 0 0-3.1-3.1v1.2c1.05 0 1.9.85 1.9 1.9h1.2Zm-3.1 3.1a3.1 3.1 0 0 0 3.1-3.1h-1.2a1.9 1.9 0 0 1-1.9 1.9v1.2Zm-3.1-3.1a3.1 3.1 0 0 0 3.1 3.1V7.4a1.9 1.9 0 0 1-1.9-1.9h-1.2Zm1.2 0c0-1.05.85-1.9 1.9-1.9V2.4a3.1 3.1 0 0 0-3.1 3.1h1.2ZM3.495 7.646a.5.5 0 0 1 0 .708l-.849-.849a.7.7 0 0 0 0 .99l.849-.849Zm7.651 8.359a.5.5 0 0 1 .707 0l-.848.849a.7.7 0 0 0 .99 0l-.849-.849Zm2.859-2.151a.5.5 0 0 1 0-.708l.848.849a.7.7 0 0 0 0-.99l-.848.849Zm-7.51-9.208a.7.7 0 0 0-.99 0l.849.849a.5.5 0 0 1-.708 0l.849-.849Zm8.08 12.778 4.5 4.5.85-.848-4.5-4.5-.85.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCricket;