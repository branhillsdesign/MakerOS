import * as React from "react";

const SvgFolder = ({ title, titleId, ...props }) => (
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
    <mask id="Folder_svg__a" fill="#fff">
      <path d="M2 18V6a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
    </mask>
    <path
      d="M11 6 9.586 7.414l.586.586H11V6ZM9 4l1.414-1.414L9.828 2H9v2ZM0 6v12h4V6H0Zm4 16h16v-4H4v4Zm20-4V8h-4v10h4ZM20 4h-9v4h9V4Zm-7.586.586-2-2-2.828 2.828 2 2 2.828-2.828ZM9 2H4v4h5V2Zm15 6a4 4 0 0 0-4-4v4h4Zm-4 14a4 4 0 0 0 4-4h-4v4ZM0 18a4 4 0 0 0 4 4v-4H0ZM4 6V2a4 4 0 0 0-4 4h4Z"
      fill="#555770"
      mask="url(#Folder_svg__a)"
    />
  </svg>
);

export default SvgFolder;
