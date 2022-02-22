import * as React from "react";

const SvgMusicPlaylist = ({ title, titleId, ...props }) => (
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
      d="M15 7H3m0 4h12m-4 4H3M17.581 18.297V9.935m0 0v-2.79l4.605-.384v2.79l-4.605.384ZM17.579 18.306c0 1.056-1.076 2.094-2.652 2.094-1.575 0-2.651-1.038-2.651-2.094 0-1.055 1.076-2.093 2.652-2.093 1.575 0 2.651 1.038 2.651 2.093Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgMusicPlaylist;
