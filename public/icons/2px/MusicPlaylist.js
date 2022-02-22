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
      d="M18 17.5V9.276m0 0V7.759L22 7v1.517l-4 .759ZM15 7H3m0 4h12m-4 4H3"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M19 17.5c0 1.38-1.567 2.5-3.5 2.5S12 18.88 12 17.5s1.567-2.5 3.5-2.5 3.5 1.12 3.5 2.5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMusicPlaylist;
