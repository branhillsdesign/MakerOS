import * as React from "react";

const SvgPanoramaHorizontal = ({ title, titleId, ...props }) => (
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
      d="m3 5 .362-.932A1 1 0 0 0 2 5h1Zm0 14H2a1 1 0 0 0 1.362.932L3 19Zm18 0-.362.932A1 1 0 0 0 22 19h-1Zm0-14h1a1 1 0 0 0-1.362-.932L21 5Zm-1.389.54-.362-.932.362.932Zm-15.222 0 .362-.932-.362.932Zm0 12.92.362.932-.362-.932Zm15.222 0-.362.932.362-.932ZM2 5v14h2V5H2Zm20 14V5h-2v14h2ZM20.638 4.068l-1.39.54.726 1.864 1.388-.54-.724-1.864Zm-15.887.54-1.389-.54-.724 1.864 1.388.54.725-1.864ZM3.362 19.932l1.39-.54-.726-1.864-1.388.54.724 1.864Zm15.887-.54 1.389.54.724-1.864-1.388-.54-.725 1.864Zm-14.498 0a20 20 0 0 1 14.498 0l.725-1.864a22 22 0 0 0-15.948 0l.725 1.864ZM19.25 4.608a20 20 0 0 1-14.498 0l-.725 1.864a22 22 0 0 0 15.948 0l-.725-1.864Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPanoramaHorizontal;