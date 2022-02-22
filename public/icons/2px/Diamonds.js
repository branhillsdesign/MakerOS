import * as React from "react";

const SvgDiamonds = ({ title, titleId, ...props }) => (
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
      d="m12 7.37.707-.708L12 5.955l-.707.707.707.707ZM7.37 12l-.708-.707-.707.707.707.707L7.37 12ZM12 16.63l-.707.708.707.707.707-.707L12 16.63ZM16.63 12l.708.707.707-.707-.707-.707-.707.707Zm-5.337-5.338-4.63 4.63 1.413 1.415 4.631-4.63-1.414-1.415Zm1.414 9.262-4.63-4.631-1.415 1.414 4.63 4.63 1.415-1.413Zm-1.414-7.848 4.63 4.631 1.415-1.414-4.63-4.63-1.415 1.413Zm4.63 3.217-4.63 4.63 1.414 1.415 4.63-4.63-1.413-1.415ZM5 2h14V0H5v2Zm14 0v20h2V2h-2Zm0 20H5v2h14v-2ZM5 22V2H3v20h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-20h2a2 2 0 0 0-2-2v2ZM5 0a2 2 0 0 0-2 2h2V0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDiamonds;
