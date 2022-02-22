import * as React from "react";

const SvgEmoticonLaughing1 = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={1.2} />
    <path
      d="m16.302 15 .455.392a.6.6 0 0 0-.455-.992v.6Zm-8.604 0v-.6a.6.6 0 0 0-.455.992L7.698 15Zm8.15-.392C14.792 15.835 13.706 16.9 12 16.9v1.2c2.294 0 3.7-1.48 4.757-2.709l-.91-.783ZM12 16.9c-1.706 0-2.792-1.065-3.848-2.291l-.91.783C8.302 16.62 9.707 18.1 12 18.1v-1.2Zm4.302-2.5H7.698v1.2h8.604v-1.2Z"
      fill="#555770"
    />
    <path
      d="M9 11.4a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Zm6 0a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgEmoticonLaughing1;
