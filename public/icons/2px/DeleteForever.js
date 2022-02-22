import * as React from "react";

const SvgDeleteForever = ({ title, titleId, ...props }) => (
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
    <mask id="Delete_Forever_svg__a" fill="#fff">
      <path d="M7 22a2 2 0 0 1-2-2V8h14v12a2 2 0 0 1-2 2H7ZM5 4a1 1 0 0 0-1 1v1h16V5a1 1 0 0 0-1-1h-3l-.447-.894A2 2 0 0 0 13.763 2h-3.527a2 2 0 0 0-1.789 1.106L8 4H5Z" />
    </mask>
    <path
      d="M8 5h8V3H8v2ZM5 8V6H3v2h2Zm14 0h2V6h-2v2ZM4 6H2v2h2V6Zm16 0v2h2V6h-2ZM8 4v2h1.236l.553-1.106L8 4Zm8 0-1.789.894L14.764 6H16V4ZM3 8v12h4V8H3Zm4 16h10v-4H7v4Zm14-4V8h-4v12h4ZM19 6H5v4h14V6ZM6 6V5H2v1h4Zm12-1v1h4V5h-4Zm2-1H4v4h16V4ZM5 6h3V2H5v4Zm4.789-1.106L10.236 4 6.658 2.211l-.447.895L9.79 4.894ZM10.236 4h3.528V0h-3.528v4ZM16 6h3V2h-3v4Zm-2.236-2 .447.894 3.578-1.788-.447-.895L13.764 4Zm0 0 3.578-1.789A4 4 0 0 0 13.764 0v4Zm-3.528 0V0a4 4 0 0 0-3.578 2.211L10.236 4ZM6 5a1 1 0 0 1-1 1V2a3 3 0 0 0-3 3h4Zm11 19a4 4 0 0 0 4-4h-4v4Zm5-19a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4ZM3 20a4 4 0 0 0 4 4v-4H3Z"
      fill="#555770"
      mask="url(#Delete_Forever_svg__a)"
    />
    <path
      d="m14.293 11.293-3 3 1.414 1.414 3-3-1.414-1.414Zm-3 3-3 3 1.414 1.414 3-3-1.414-1.414Zm0 1.414 3 3 1.414-1.414-3-3-1.414 1.414Zm1.414-1.414-3-3-1.414 1.414 3 3 1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDeleteForever;
