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
      d="m11 6-.848.849.35.351H11V6ZM9 4l.849-.849-.352-.351H9V4ZM.8 6v12h2.4V6H.8ZM4 21.2h16v-2.4H4v2.4ZM23.2 18V8h-2.4v10h2.4ZM20 4.8h-9v2.4h9V4.8Zm-8.152.351-2-2L8.152 4.85l2 2 1.697-1.698ZM9 2.8H4v2.4h5V2.8ZM23.2 8A3.2 3.2 0 0 0 20 4.8v2.4a.8.8 0 0 1 .8.8h2.4ZM20 21.2a3.2 3.2 0 0 0 3.2-3.2h-2.4a.8.8 0 0 1-.8.8v2.4ZM.8 18A3.2 3.2 0 0 0 4 21.2v-2.4a.8.8 0 0 1-.8-.8H.8ZM3.2 6a.8.8 0 0 1 .8-.8V2.8A3.2 3.2 0 0 0 .8 6h2.4Z"
      fill="#555770"
      mask="url(#Folder_svg__a)"
    />
  </svg>
);

export default SvgFolder;
