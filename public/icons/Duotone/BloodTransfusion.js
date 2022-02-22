import * as React from "react";

const SvgBloodTransfusion = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Blood_Transfusion_svg__a)" strokeWidth={2}>
      <path
        d="M9.4 4.119H3.8a.79.79 0 0 0-.8.78v3.118m6.4-3.898H15c.442 0 .8.349.8.78v3.118M9.4 4.119V1m0 19.491h4c1.325 0 2.4-1.047 2.4-2.338V8.017M9.4 20.49h-4c-1.325 0-2.4-1.047-2.4-2.338V8.017M9.4 20.49V24M3 8.017h12.8"
        stroke="#555770"
      />
      <path
        d="M4.6 1H16a5 5 0 0 1 5 5v18m-9.2-8.966c0 1.292-1.075 2.339-2.4 2.339-1.326 0-2.4-1.047-2.4-2.34 0-1.29 2.4-3.897 2.4-3.897s2.4 2.606 2.4 3.898Z"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Blood_Transfusion_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgBloodTransfusion;
