import * as React from "react";

const SvgLeaf = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Leaf_svg__a)">
      <path
        d="M15.182 19.218A7.001 7.001 0 0 1 4.656 18.5a7.001 7.001 0 0 1 .627-9.182c2.733-2.734 13.435-3.535 13.435-3.535s-.802 10.7-3.536 13.434Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <path
        d="M4.656 18.5A7.058 7.058 0 0 0 6 19.845C7.5 17 10.5 13.5 14.5 9.5c-5.2 2.974-8 6.5-9.844 9Z"
        fill="#555770"
      />
    </g>
    <defs>
      <clipPath id="Leaf_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgLeaf;
