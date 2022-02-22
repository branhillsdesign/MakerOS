import * as React from "react";

const SvgBookmarkFolder = ({ title, titleId, ...props }) => (
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
    <mask id="Bookmark_Folder_svg__a" fill="#fff">
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 2h10a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2Z" />
    </mask>
    <path
      d="M13.323 14h-.6a.6.6 0 0 0 .909.514L13.323 14Zm2.5-1.5.309-.514-.309-.186-.309.185.309.515Zm2.5 1.5-.309.514a.6.6 0 0 0 .909-.514h-.6Zm-5.6-8v8h1.2V6h-1.2Zm.909 8.514 2.5-1.5-.618-1.028-2.5 1.5.618 1.028Zm1.882-1.5 2.5 1.5.618-1.028-2.5-1.5-.618 1.028Zm3.409.986V6h-1.2v8h1.2ZM9 4l.849-.849-.352-.351H9V4Zm2 2-.848.849.35.351H11V6ZM4 21.2h16v-2.4H4v2.4ZM9 2.8H4v2.4h5V2.8ZM.8 6v1h2.4V6H.8Zm22.4 12V7h-2.4v11h2.4ZM.8 7v11h2.4V7H.8ZM21 4.8h-2.677v2.4H21V4.8Zm-2.677 0h-5v2.4h5V4.8Zm-5 0H11v2.4h2.323V4.8Zm-1.475.351-2-2L8.152 4.85l2 2 1.697-1.698ZM23.2 7A2.2 2.2 0 0 0 21 4.8v2.4a.2.2 0 0 1-.2-.2h2.4ZM20 21.2a3.2 3.2 0 0 0 3.2-3.2h-2.4a.8.8 0 0 1-.8.8v2.4ZM4 18.8a.8.8 0 0 1-.8-.8H.8A3.2 3.2 0 0 0 4 21.2v-2.4Zm0-16A3.2 3.2 0 0 0 .8 6h2.4a.8.8 0 0 1 .8-.8V2.8Z"
      fill="#555770"
      mask="url(#Bookmark_Folder_svg__a)"
    />
  </svg>
);

export default SvgBookmarkFolder;
