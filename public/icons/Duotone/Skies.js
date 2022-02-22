import * as React from "react";

const SvgSkies = ({ title, titleId, ...props }) => (
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
      d="M1.437 8.512a1.49 1.49 0 0 1 2.107-2.108l14.052 14.052a1.49 1.49 0 0 1-2.108 2.108L1.437 8.512ZM6.404 3.544a1.49 1.49 0 0 1 2.108-2.107l14.052 14.05a1.49 1.49 0 0 1-2.108 2.109L6.404 3.544Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m14.228 10.506-.734-.734a1.038 1.038 0 0 1 1.468-1.468l.734.734a1.038 1.038 0 0 1-1.468 1.468ZM9.038 15.696l-.734-.734a1.038 1.038 0 0 1 1.468-1.468l.734.734a1.038 1.038 0 0 1-1.468 1.468Z"
      fill="currentColor"
    />
    <path
      d="m14.228 10.506-.734-.734a1.038 1.038 0 0 1 1.468-1.468l.734.734a1.038 1.038 0 0 1-1.468 1.468ZM9.038 15.696l-.734-.734a1.038 1.038 0 0 1 1.468-1.468l.734.734a1.038 1.038 0 0 1-1.468 1.468Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSkies;
