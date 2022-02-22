import * as React from "react";

const SvgPlayPlaylist = ({ title, titleId, ...props }) => (
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
      d="M4 7h12M4 11h12M4 15h8m3 .5v3l2.5-1.5-2.5-1.5Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPlayPlaylist;
