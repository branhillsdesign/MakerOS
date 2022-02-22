import * as React from "react";

const SvgPan = ({ title, titleId, ...props }) => (
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
      d="M7.6 6a.6.6 0 0 0-1.2 0h1.2ZM1.424 8.738l-.29-.525.29.525ZM12 17.4H2v1.2h10v-1.2Zm.4-4.9V17h1.2v-4.5h-1.2Zm1.024.424 2-2-.848-.848-2 2 .848.848ZM12.4 9.5v1h1.2v-1h-1.2Zm0 1v2h1.2v-2h-1.2Zm2.6-.6h-2v1.2h2V9.9Zm0 1.2h9V9.9h-9v1.2ZM1.713 9.264C2.418 8.876 4.178 8.1 7 8.1V6.9c-3.051 0-5.009.841-5.865 1.313l.578 1.051ZM7 8.1c2.822 0 4.582.776 5.287 1.164l.578-1.051C12.01 7.74 10.052 6.9 7 6.9v1.2ZM1.6 17v-6.5H.4V17h1.2Zm0-6.5v-1H.4v1h1.2ZM13 9.9H1v1.2h12V9.9ZM7.6 7.5V6H6.4v1.5h1.2ZM2 17.4a.4.4 0 0 1-.4-.4H.4A1.6 1.6 0 0 0 2 18.6v-1.2Zm10 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm1.6-9.1c0-.498-.238-1.014-.735-1.287l-.578 1.051c.054.03.113.104.113.236h1.2ZM1.135 8.213C.638 8.486.4 9.003.4 9.5h1.2c0-.132.059-.206.113-.236l-.578-1.051Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPan;
