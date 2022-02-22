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
      d="m11 6-.848.849.35.351H11V6ZM9 4l.849-.849-.352-.351H9V4ZM4 21.2h16v-2.4H4v2.4ZM21 4.8H11v2.4h10V4.8Zm-9.152.351-2-2L8.152 4.85l2 2 1.697-1.698ZM9 2.8H4v2.4h5V2.8ZM.8 6v1h2.4V6H.8Zm22.4 12V7h-2.4v11h2.4ZM.8 7v11h2.4V7H.8Zm20.2.2a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 21 4.8v2.4Zm-1 14a3.2 3.2 0 0 0 3.2-3.2h-2.4a.8.8 0 0 1-.8.8v2.4ZM4 18.8a.8.8 0 0 1-.8-.8H.8A3.2 3.2 0 0 0 4 21.2v-2.4Zm0-16A3.2 3.2 0 0 0 .8 6h2.4a.8.8 0 0 1 .8-.8V2.8Z"
      fill="#555770"
      mask="url(#Add_Folder_svg__a)"
    />
    <path d="M15 10v6m3-3h-6" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgAddFolder;
