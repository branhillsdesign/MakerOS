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
      d="M4 7h12M4 11h12M4 15h8m2.596 0v3.904L18.016 17l-3.42-2Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPlayPlaylist;
