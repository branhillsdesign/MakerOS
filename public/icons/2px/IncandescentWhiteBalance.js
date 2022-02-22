import * as React from "react";

const SvgIncandescentWhiteBalance = ({ title, titleId, ...props }) => (
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
      d="m10 7.416.4.916.6-.262v-.654h-1ZM10 3V2H9v1h1Zm4 0h1V2h-1v1Zm0 4.416h-1v.654l.6.262.4-.916ZM4 11H1v2h3v-2Zm7 9v3h2v-3h-2Zm9-7h3v-2h-3v2Zm-2.707 5.707 2 2 1.414-1.414-2-2-1.414 1.414Zm-12-1.414-2 2 1.414 1.414 2-2-1.414-1.414ZM16 12a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6v-2Zm-4-4c0-1.639.986-3.05 2.4-3.668L9.6 6.5A6.001 6.001 0 0 0 6 12h2Zm3-4.584V3H9v4.416h2ZM10 4h4V2h-4v2Zm3.6 4.332A4.001 4.001 0 0 1 16 12h2a6.001 6.001 0 0 0-3.6-5.5l-.8 1.832ZM13 3v4.416h2V3h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIncandescentWhiteBalance;
