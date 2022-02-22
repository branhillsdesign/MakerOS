import * as React from "react";

const SvgMedal = ({ title, titleId, ...props }) => (
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
      d="m12 10-1.757 1.757H7.757v2.486L6 16l1.757 1.757v2.486h2.486L12 22l1.757-1.757h2.486v-2.486L18 16l-1.757-1.757v-2.486h-2.486L12 10Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M3 3v-.6H1.951l.532.904L3 3Zm5 0 .52-.298-.172-.302H8V3Zm4 7-.52.298a.6.6 0 0 0 1.04 0L12 10Zm9-7 .517.304.532-.904H21V3Zm-5 0v-.6h-.348l-.173.302L16 3Zm-7.483 8.196-5-8.5-1.034.608 5 8.5 1.034-.608ZM3 3.6h5V2.4H3v1.2Zm4.479-.302 4 7 1.042-.596-4-7-1.042.596Zm9.038 8.506 5-8.5-1.034-.608-5 8.5 1.034.608ZM21 2.4h-5v1.2h5V2.4Zm-5.52.302-4 7 1.04.596 4-7-1.04-.596Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMedal;
