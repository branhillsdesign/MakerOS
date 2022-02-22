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
      d="M12 14h-1a1 1 0 0 0 1.514.857L12 14Zm2.5-1.5.514-.857-.514-.31-.514.31.514.857ZM17 14l-.515.857A1 1 0 0 0 18 14h-1Zm-6-8v8h2V6h-2Zm1.514 8.857 2.5-1.5-1.028-1.714-2.5 1.5 1.028 1.714Zm1.472-1.5 2.5 1.5 1.029-1.714-2.5-1.5-1.03 1.714ZM18 14V6h-2v8h2ZM9 4l1.414-1.414L9.828 2H9v2Zm2 2L9.586 7.414l.586.586H11V6ZM4 22h16v-4H4v4ZM9 2H4v4h5V2ZM0 6v1h4V6H0Zm24 12V7h-4v11h4ZM0 7v11h4V7H0Zm21-3h-4v4h4V4Zm-4 0h-5v4h5V4Zm-5 0h-1v4h1V4Zm.414.586-2-2-2.828 2.828 2 2 2.828-2.828ZM24 7a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4Zm-4 15a4 4 0 0 0 4-4h-4v4ZM4 18H0a4 4 0 0 0 4 4v-4ZM4 2a4 4 0 0 0-4 4h4V2Z"
      fill="#555770"
      mask="url(#Bookmark_Folder_svg__a)"
    />
  </svg>
);

export default SvgBookmarkFolder;
