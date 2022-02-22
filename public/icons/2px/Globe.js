import * as React from "react";

const SvgGlobe = ({ title, titleId, ...props }) => (
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
    <mask id="Globe_svg__a" fill="#fff">
      <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z" />
    </mask>
    <path
      d="m22 12 .625.78.976-.78-.976-.78L22 12ZM12 22l-.78.625.78.976.78-.976L12 22ZM2 12l-.625-.78L.4 12l.976.78L2 12ZM12 2l.78-.625L12 .4l-.78.976L12 2Zm.78 20.625a17.008 17.008 0 0 0 0-21.25l-1.56 1.25a15.008 15.008 0 0 1 0 18.75l1.56 1.25Zm-1.56-21.25a17.008 17.008 0 0 0 0 21.25l1.56-1.25a15.008 15.008 0 0 1 0-18.75l-1.56-1.25Zm10.155 9.844a15.008 15.008 0 0 1-18.75 0l-1.25 1.562a17.008 17.008 0 0 0 21.25 0l-1.25-1.562Zm-18.75 1.562a15.008 15.008 0 0 1 18.75 0l1.25-1.562a17.008 17.008 0 0 0-21.25 0l1.25 1.562ZM20 12a8 8 0 0 1-8 8v4c6.627 0 12-5.373 12-12h-4Zm-8 8a8 8 0 0 1-8-8H0c0 6.627 5.373 12 12 12v-4Zm-8-8a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Zm8-8a8 8 0 0 1 8 8h4c0-6.627-5.373-12-12-12v4Z"
      fill="#555770"
      mask="url(#Globe_svg__a)"
    />
  </svg>
);

export default SvgGlobe;
