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
    <g clipPath="url(#Handball_svg__a)" fill="#555770">
      <path d="M9.139.956a7 7 0 0 0 2.562 9.562l1-1.732a5 5 0 0 1-1.83-6.83l-1.732-1Zm4.727 10.812c.12.07.236.143.346.221l1.152-1.635a6.53 6.53 0 0 0-.498-.318l-1 1.732Zm.346.221a4.5 4.5 0 0 1 1.301 5.926l1.732 1a6.5 6.5 0 0 0-1.881-8.561l-1.152 1.635Zm-7.51 7.19 2.25-3.898-1.733-1-2.25 3.897 1.732 1Zm2.25-3.898 3.29-5.7-1.731-1-3.292 5.7 1.732 1Zm-.287 8.495 3.75-6.495-1.732-1-3.75 6.495 1.732 1Zm3.75-6.495 3.239-5.61-1.732-1-3.239 5.61 1.732 1Zm-4.83-1.634 1.732 1 1-1.732-1.732-1-1 1.732Zm1.732 1 1.732 1 1-1.732-1.732-1-1 1.732Zm2.384-6.13.866.5 1-1.731-.866-.5-1 1.732Zm.866.5 1.3.75 1-1.731-1.3-.75-1 1.732Zm-1.884 5.264 3.25-5.63-1.732-1-3.25 5.63 1.732 1Z" />
      <circle cx={15.5} cy={6.938} r={2} transform="rotate(30 15.5 6.938)" />
      <circle
        cx={12.853}
        cy={2.523}
        r={1.5}
        transform="rotate(30 12.853 2.523)"
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
