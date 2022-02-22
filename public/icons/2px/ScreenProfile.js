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
      d="M22 16V6h-2v10h2ZM20 4H4v2h16V4ZM2 6v10h2V6H2Zm5 15h5v-2H7v2Zm5 0h5v-2h-5v2Zm-8-3h8v-2H4v2Zm8 0h8v-2h-8v2Zm1 2v-3h-2v3h2ZM4 4a2 2 0 0 0-2 2h2V4Zm18 2a2 2 0 0 0-2-2v2h2Zm-2 10v2a2 2 0 0 0 2-2h-2ZM2 16a2 2 0 0 0 2 2v-2H2Z"
      fill="#555770"
    />
    <path
      d="M13.222 10.2c0 .652-.537 1.198-1.222 1.198v2c1.77 0 3.222-1.422 3.222-3.199h-2ZM12 11.397a1.21 1.21 0 0 1-1.223-1.199h-2c0 1.777 1.453 3.2 3.223 3.2v-2ZM10.777 10.2C10.777 9.547 11.316 9 12 9V7c-1.77 0-3.222 1.422-3.222 3.2h2ZM12 9a1.21 1.21 0 0 1 1.222 1.2h2C15.222 8.421 13.77 7 12 7v2Zm0 7c1.157 0 2.146.572 2.702 1.51l1.72-1.02C15.5 14.932 13.85 14 12 14v2Zm-2.702 1.51C9.854 16.572 10.842 16 12 16v-2c-1.85 0-3.5.932-4.423 2.49l1.72 1.02Z"
      fill="#555770"
    />
  </svg>
);

export default SvgScreenProfile;
