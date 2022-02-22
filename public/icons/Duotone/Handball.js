import * as React from "react";

const SvgHandball = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Handball_svg__a)">
      <path
        d="M16.38 18.415a5.5 5.5 0 0 0-1.592-7.244m-4.783-9.715A6 6 0 0 0 12.2 9.652l.866.5m-7.232 8.526 2.25-3.897m3.292-5.7-3.292 5.7M7.8 23.276l3.75-6.495m3.239-5.61a5.57 5.57 0 0 0-.422-.27l-1.299-.75m1.721 1.02-3.239 5.61m-3.464-2 1.732 1m1.732 1-1.732-1m0 0 3.25-5.63"
        stroke="#555770"
        strokeWidth={2}
      />
      <circle
        cx={15.5}
        cy={6.938}
        r={2}
        transform="rotate(30 15.5 6.938)"
        fill="#555770"
      />
      <circle
        cx={12.853}
        cy={2.523}
        r={1.5}
        transform="rotate(30 12.853 2.523)"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Handball_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHandball;
