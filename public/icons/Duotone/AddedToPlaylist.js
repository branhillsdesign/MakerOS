import * as React from "react";

const SvgAddedtoPlaylist = ({ title, titleId, ...props }) => (
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
    <path d="M2 7h12M2 11h12M2 15h8" stroke="#555770" strokeWidth={2} />
    <path d="m12.5 15 3.5 3.5 6-6" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgAddedtoPlaylist;
