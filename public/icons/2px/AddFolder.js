import * as React from "react";

const SvgAddFolder = ({ title, titleId, ...props }) => (
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
    <mask id="Add_Folder_svg__a" fill="#fff">
      <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 2h10a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2Z" />
    </mask>
    <path
      d="M11 6 9.586 7.414l.586.586H11V6ZM9 4l1.414-1.414L9.828 2H9v2ZM4 22h16v-4H4v4ZM21 4H11v4h10V4Zm-8.586.586-2-2-2.828 2.828 2 2 2.828-2.828ZM9 2H4v4h5V2ZM0 6v1h4V6H0Zm24 12V7h-4v11h4ZM0 7v11h4V7H0Zm21 1a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4Zm-1 14a4 4 0 0 0 4-4h-4v4ZM4 18H0a4 4 0 0 0 4 4v-4ZM4 2a4 4 0 0 0-4 4h4V2Z"
      fill="#555770"
      mask="url(#Add_Folder_svg__a)"
    />
    <path d="M15 10v6m3-3h-6" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgAddFolder;
