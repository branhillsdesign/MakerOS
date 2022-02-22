import * as React from "react";

const SvgBookmark = ({ title, titleId, ...props }) => (
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
    <mask id="Bookmark_svg__a" fill="#fff">
      <path d="M5 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16.06a1 1 0 0 1-1.58.815L12 17.014l-5.42 3.86A1 1 0 0 1 5 20.06V4Z" />
    </mask>
    <path
      d="m12 17.014 1.16-1.629-1.16-.826-1.16.826L12 17.014ZM6 3V1v2Zm12 0v2-2Zm-.58 17.875-1.16 1.628 1.16-1.628Zm-10.84 0-1.16-1.63 1.16 1.63ZM6 5h12V1H6v4Zm11-1v16.06h4V4h-4ZM7 20.06V4H3v16.06h4Zm11.58-.814-5.42-3.861-2.32 3.258 5.42 3.86 2.32-3.258Zm-7.74-3.861-5.42 3.86 2.32 3.258 5.42-3.86-2.32-3.258ZM6 1a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1V1Zm12 4a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-1 15.06a1 1 0 0 1 1.58-.814l-2.32 3.258c1.985 1.414 4.74-.006 4.74-2.444h-4Zm-14 0c0 2.438 2.754 3.858 4.74 2.444l-2.32-3.259A1 1 0 0 1 7 20.06H3Z"
      fill="#555770"
      mask="url(#Bookmark_svg__a)"
    />
  </svg>
);

export default SvgBookmark;
