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
    <path
      d="M12 7V6h-1v1h1Zm0 7h-1a1 1 0 0 0 1.514.857L12 14Zm2.5-1.5.514-.857-.514-.31-.514.31.514.857ZM17 14l-.515.857A1 1 0 0 0 18 14h-1Zm0-7h1V6h-1v1Zm-6 0v7h2V7h-2Zm1.514 7.857 2.5-1.5-1.028-1.714-2.5 1.5 1.028 1.714Zm1.472-1.5 2.5 1.5 1.029-1.714-2.5-1.5-1.03 1.714ZM17 6h-5v2h5V6Zm1 8V7h-2v7h2Z"
      fill="#555770"
    />
    <path
      d="m10.293 6.707.293.293H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.586l1.707 1.707Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Bookmark_Folder_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={8}
      width={22}
      height={14}
    >
      <path transform="rotate(-90 1 22)" fill="#000" d="M1 22h14v22H1z" />
    </mask>
    <g mask="url(#Bookmark_Folder_svg__a)">
      <path
        d="m10.293 6.707.293.293H20a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4.586l1.707 1.707Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgBookmarkFolder;
