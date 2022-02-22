import * as React from "react";

const SvgFilmQuestion = ({ title, titleId, ...props }) => (
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
      d="M9.249 9.73c0-1.608 1.317-2.774 2.781-2.774 1.464 0 2.721 1.166 2.721 2.774 0 1.239-1.012 1.635-1.943 2.676-.53.592-.808 1.181-.808 1.594m0 1 .03 2.044M2 1v3m0 19v-3M22 1v3m0 19v-3M2 4h4v4M2 4v4m0 0h4M2 8v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4H2M22 4h-4v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4h4m0-4v4"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M6 2h12v20H6V2Z" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgFilmQuestion;
