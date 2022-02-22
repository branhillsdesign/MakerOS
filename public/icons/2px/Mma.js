import * as React from "react";

const SvgMma = ({ title, titleId, ...props }) => (
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
      d="M19 8a1 1 0 1 0-2 0h2ZM8 18.5v-1H7v1h1Zm8 0h1v-1h-1v1ZM9 8V7H8v1h1Zm0 1H8v1h1V9Zm4 0v1h1V9h-1Zm0-1h1V7h-1v1Zm4.97 3.12-.97-.243.97.242Zm-11.94 0 .97-.243-.97.242Zm.951 3.804.97-.242-.97.242Zm.97-.242L7 10.877l-1.94.485.95 3.805 1.941-.485ZM7 10.877V5H5v5.877h2ZM7 5h8V3H7v2Zm8 0v5h2V5h-2Zm2 3v2.877h2V8h-2Zm0 2.877-.951 3.805 1.94.485.951-3.805-1.94-.485ZM16.922 14H7.078v2h9.844v-2ZM7 18.5v1.4h2v-1.4H7ZM8.1 21h7.8v-2H8.1v2Zm8.9-1.1v-1.4h-2v1.4h2Zm-1-2.4H8v2h8v-2ZM8 8v1h2V8H8Zm1 2h4V8H9v2Zm5-1V8h-2v1h2Zm-1-2H9v2h4V7Zm2.9 14a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2ZM7 19.9A1.1 1.1 0 0 0 8.1 21v-2a.9.9 0 0 1 .9.9H7Zm9.049-5.218a.9.9 0 0 1 .873-.682v2a1.1 1.1 0 0 0 1.067-.833l-1.94-.485ZM15 5h2a2 2 0 0 0-2-2v2ZM7 5V3a2 2 0 0 0-2 2h2Zm10 5.877 1.94.485c.04-.159.06-.322.06-.485h-2Zm-10 0H5a2 2 0 0 0 .06.485L7 10.877Zm-.99 4.29A1.1 1.1 0 0 0 7.079 16v-2a.9.9 0 0 1 .873.682l-1.94.485Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMma;
