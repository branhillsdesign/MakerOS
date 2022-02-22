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
      strokeWidth={2}
    />
    <mask id="Bookmark_in_a_Box_svg__a" fill="#fff">
      <path d="M5 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10.107a1 1 0 0 1-1.564.826L10 14.588l-3.436 2.345A1 1 0 0 1 5 16.107V6Z" />
    </mask>
    <path
      d="m10 14.588 1.127-1.651-1.127-.77-1.127.77L10 14.588Zm-3.436 2.345 1.127 1.652-1.127-1.652ZM6 7h8V3H6v4Zm7-1v10.107h4V6h-4ZM7 16.107V6H3v10.107h4Zm7.564-.826-3.437-2.345-2.254 3.305 3.436 2.344 2.255-3.304Zm-5.691-2.345-3.437 2.345 2.255 3.304 3.436-2.344-2.254-3.304ZM6 3a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1V3Zm8 4a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-1 9.107a1 1 0 0 1 1.564-.826l-2.255 3.304C14.301 19.944 17 18.518 17 16.107h-4Zm-10 0c0 2.41 2.7 3.837 4.69 2.478l-2.254-3.304A1 1 0 0 1 7 16.107H3Z"
      fill="#555770"
      mask="url(#Bookmark_in_a_Box_svg__a)"
    />
  </svg>
);

export default SvgBookmarkinaBox;
