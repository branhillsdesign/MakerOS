import * as React from "react";

const SvgGrid04 = ({ title, titleId, ...props }) => (
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
    <mask id="Grid_04_svg__a" fill="#fff">
      <path d="M2 11a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2ZM2 21a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2Z" />
    </mask>
    <path
      d="M23 14h1.2H23Zm0 6h1.2H23Zm-1-9V9.8 11ZM2 11v1.2V11ZM-.2 4v6h2.4V4H-.2ZM2 12.2h20V9.8H2v2.4ZM24.2 10V4h-2.4v6h2.4ZM22 1.8H2v2.4h20V1.8ZM-.2 14v6h2.4v-6H-.2ZM2 22.2h20v-2.4H2v2.4ZM24.2 20v-6h-2.4v6h2.4ZM22 11.8H2v2.4h20v-2.4Zm2.2 2.2a2.2 2.2 0 0 0-2.2-2.2v2.4a.2.2 0 0 1-.2-.2h2.4ZM22 22.2a2.2 2.2 0 0 0 2.2-2.2h-2.4c0-.11.09-.2.2-.2v2.4ZM-.2 20A2.2 2.2 0 0 0 2 22.2v-2.4c.11 0 .2.09.2.2H-.2Zm2.4-6a.2.2 0 0 1-.2.2v-2.4A2.2 2.2 0 0 0-.2 14h2.4Zm22-10A2.2 2.2 0 0 0 22 1.8v2.4a.2.2 0 0 1-.2-.2h2.4ZM22 12.2a2.2 2.2 0 0 0 2.2-2.2h-2.4c0-.11.09-.2.2-.2v2.4ZM-.2 10A2.2 2.2 0 0 0 2 12.2V9.8c.11 0 .2.09.2.2H-.2Zm2.4-6a.2.2 0 0 1-.2.2V1.8A2.2 2.2 0 0 0-.2 4h2.4Z"
      fill="#555770"
      mask="url(#Grid_04_svg__a)"
    />
  </svg>
);

export default SvgGrid04;
