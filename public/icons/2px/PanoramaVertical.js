import * as React from "react";

const SvgPanoramaVertical = ({ title, titleId, ...props }) => (
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
      d="m19 3 .932.362A1 1 0 0 0 19 2v1ZM5 3V2a1 1 0 0 0-.932 1.362L5 3Zm0 18-.932-.362A1 1 0 0 0 5 22v-1Zm14 0v1a1 1 0 0 0 .932-1.362L19 21Zm-.54-1.389.932-.362-.932.362Zm0-15.222.932.362-.932-.362Zm-12.92 0-.932.362.932-.362Zm0 15.222-.932-.362.932.362ZM19 2H5v2h14V2ZM5 22h14v-2H5v2Zm14.932-1.362-.54-1.39-1.864.726.54 1.388 1.864-.724Zm-.54-15.887.54-1.389-1.864-.724-.54 1.388 1.864.725ZM4.068 3.362l.54 1.39 1.864-.726-.54-1.388-1.864.724Zm.54 15.887-.54 1.389 1.864.724.54-1.388-1.864-.725Zm0-14.498a20 20 0 0 1 0 14.498l1.864.725a22 22 0 0 0 0-15.948l-1.864.725ZM19.392 19.25a20 20 0 0 1 0-14.498l-1.864-.725a22 22 0 0 0 0 15.948l1.864-.725Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPanoramaVertical;
