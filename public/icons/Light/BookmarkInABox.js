import * as React from "react";

const SvgBookmarkinaBox = ({ title, titleId, ...props }) => (
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
      d="M2 3a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <mask id="Bookmark_in_a_Box_svg__a" fill="#fff">
      <path d="M5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10.107a1 1 0 0 1-1.564.826L10 14.588l-3.436 2.345A1 1 0 0 1 5 16.107V6Z" />
    </mask>
    <path
      d="m10 14.588.676-.99-.676-.462-.676.461.676.992Zm-3.436 2.345.676.991-.676-.99ZM6 6.2h8V3.8H6v2.4Zm7.8-.2v10.107h2.4V6h-2.4ZM6.2 16.107V6H3.8v10.107h2.4Zm7.913-.165-3.437-2.345-1.352 1.983 3.436 2.344 1.353-1.982Zm-4.79-2.345-3.436 2.345 1.353 1.982 3.436-2.344-1.352-1.983ZM6 3.8A2.2 2.2 0 0 0 3.8 6h2.4a.2.2 0 0 1-.2.2V3.8Zm8 2.4a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 14 3.8v2.4Zm-.2 9.907a.2.2 0 0 1 .313-.165l-1.353 1.982c1.46.997 3.44-.049 3.44-1.817h-2.4Zm-10 0c0 1.768 1.98 2.814 3.44 1.817l-1.353-1.982a.2.2 0 0 1 .313.165H3.8Z"
      fill="#555770"
      mask="url(#Bookmark_in_a_Box_svg__a)"
    />
  </svg>
);

export default SvgBookmarkinaBox;
