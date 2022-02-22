import * as React from "react";

const SvgPin1 = ({ title, titleId, ...props }) => (
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
      d="m8 12 .333.5.267-.179V12H8Zm8 0h-.6v.321l.267.178L16 12ZM5.29 13.807l.333.499-.333-.5ZM6 4.6h2V3.4H6v1.2ZM7.4 4v8h1.2V4H7.4Zm.267 7.5-2.71 1.807.666.999 2.71-1.807-.666-.998Zm11.376 1.807-2.71-1.806-.666.998 2.71 1.807.666-.999ZM8 4.6h8V3.4H8v1.2Zm8 0h2V3.4h-2v1.2Zm.6 7.4V4h-1.2v8h1.2ZM5.651 15.6H12v-1.2H5.651v1.2Zm6.349 0h6.349v-1.2H12v1.2Zm-.6-.6v7h1.2v-7h-1.2Zm8.2-.651c0-.419-.21-.81-.557-1.042l-.666.999c.014.01.023.025.023.043h1.2Zm-1.2 0a.051.051 0 0 1-.051.051v1.2c.69 0 1.251-.56 1.251-1.251h-1.2Zm-14 0c0 .69.56 1.251 1.251 1.251v-1.2a.051.051 0 0 1-.051-.051H4.4Zm.557-1.042A1.251 1.251 0 0 0 4.4 14.35h1.2c0-.018.009-.034.023-.043l-.666-.999Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPin1;
