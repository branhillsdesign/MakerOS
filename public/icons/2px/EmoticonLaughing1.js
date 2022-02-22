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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="m16.303 15 .757.652A1 1 0 0 0 16.303 14v1Zm-8.605 0v-1a1 1 0 0 0-.758 1.652L7.698 15Zm7.847-.652C14.665 15.369 13.399 16 12 16v2c2.02 0 3.826-.915 5.06-2.348l-1.515-1.304ZM12 16c-1.399 0-2.664-.63-3.544-1.652L6.94 15.652C8.174 17.087 9.98 18 12 18v-2Zm4.303-2H7.698v2h8.605v-2Z"
      fill="#555770"
    />
    <path
      d="M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonLaughing1;
