import * as React from "react";

const SvgScreenProfile = ({ title, titleId, ...props }) => (
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
      d="M13.222 10.2c0 .652-.537 1.198-1.222 1.198v2c1.77 0 3.222-1.422 3.222-3.199h-2ZM12 11.397a1.21 1.21 0 0 1-1.223-1.199h-2c0 1.777 1.453 3.2 3.223 3.2v-2ZM10.777 10.2C10.777 9.547 11.316 9 12 9V7c-1.77 0-3.222 1.422-3.222 3.2h2ZM12 9a1.21 1.21 0 0 1 1.222 1.2h2C15.222 8.421 13.77 7 12 7v2Zm0 7c1.157 0 2.146.572 2.702 1.51l1.72-1.02C15.5 14.932 13.85 14 12 14v2Zm-2.702 1.51C9.854 16.572 10.842 16 12 16v-2c-1.85 0-3.5.932-4.423 2.49l1.72 1.02Z"
      fill="currentColor"
    />
    <path
      d="M7 20h5m5 0h-5m0 0v-3"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M21 6v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgScreenProfile;
