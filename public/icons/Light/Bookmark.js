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
      d="m12 17.014.696-.977L12 15.54l-.696.496.696.977ZM6 3V1.8 3Zm12 0v1.2V3Zm-.58 17.875-.696.977.696-.977Zm-10.84 0-.696-.978.696.978ZM6 4.2h12V1.8H6v2.4ZM17.8 4v16.06h2.4V4h-2.4ZM6.2 20.06V4H3.8v16.06h2.4Zm11.916-.163-5.42-3.86-1.392 1.954 5.42 3.86 1.392-1.954Zm-6.812-3.86-5.42 3.86 1.392 1.955 5.42-3.86-1.392-1.955ZM6 1.8A2.2 2.2 0 0 0 3.8 4h2.4a.2.2 0 0 1-.2.2V1.8Zm12 2.4a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 18 1.8v2.4Zm-.2 15.86a.2.2 0 0 1 .316-.163l-1.392 1.955c1.456 1.037 3.476-.004 3.476-1.792h-2.4Zm-14 0c0 1.788 2.02 2.83 3.476 1.792l-1.392-1.955a.2.2 0 0 1 .316.163H3.8Z"
      fill="#555770"
      mask="url(#Bookmark_svg__a)"
    />
  </svg>
);

export default SvgBookmark;
