import * as React from "react";

const SvgCamera = ({ title, titleId, ...props }) => (
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
      d="m21.83 7.17.424.425-.425-.424ZM3 6.6h13V5.4H3v1.2Zm13 10.8H3v1.2h13v-1.2ZM2.6 17V7H1.4v10h1.2ZM16.4 7v5h1.2V7h-1.2Zm0 5v5h1.2v-5h-1.2Zm1.024.424 4.83-4.829-.849-.849-4.83 4.83.85.848ZM21.4 7.241v9.518h1.2V7.24h-1.2Zm.854 9.164-4.83-4.83-.848.85 4.829 4.829.849-.849Zm-.854.354a.5.5 0 0 1 .854-.354l-.849.849a.7.7 0 0 0 1.195-.495h-1.2ZM3 17.4a.4.4 0 0 1-.4-.4H1.4A1.6 1.6 0 0 0 3 18.6v-1.2Zm13 1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2Zm0-12c.22 0 .4.18.4.4h1.2A1.6 1.6 0 0 0 16 5.4v1.2Zm6.254.995a.5.5 0 0 1-.854-.354h1.2a.7.7 0 0 0-1.195-.495l.849.849ZM3 5.4A1.6 1.6 0 0 0 1.4 7h1.2c0-.22.18-.4.4-.4V5.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCamera;
