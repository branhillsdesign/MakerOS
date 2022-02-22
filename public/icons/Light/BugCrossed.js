import * as React from "react";

const SvgBugCrossed = ({ title, titleId, ...props }) => (
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
    <mask
      id="Bug_Crossed_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path
        d="M21.503 21.5.003 0 0 24h24V0H5.698v3.576l16.947 16.947-1.142.977Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Bug_Crossed_svg__a)">
      <path d="M2.5 3 21 21.5" stroke="#555770" strokeWidth={1.5} />
      <path
        d="m8.876 3.876.313.512-.313-.512Zm6.248 0-.313.512.313-.512ZM12 22.4A5.4 5.4 0 0 1 6.6 17H5.4a6.6 6.6 0 0 0 6.6 6.6v-1.2Zm5.4-5.4a5.4 5.4 0 0 1-5.4 5.4v1.2a6.6 6.6 0 0 0 6.6-6.6h-1.2Zm.6-3.4h4v-1.2h-4v1.2ZM17.4 9v4h1.2V9h-1.2Zm0 4v4h1.2v-4h-1.2ZM2 13.6h4v-1.2H2v1.2ZM6.6 17v-4H5.4v4h1.2Zm0-4V9H5.4v4h1.2ZM18 17.6h4v-1.2h-4v1.2ZM6 16.4H2v1.2h4v-1.2Zm0-8H2v1.2h4V8.4Zm12 1.2h4V8.4h-4v1.2ZM5.576 1.424l2.876 2.877.849-.849L6.424.576l-.848.848ZM12 2.4a6.572 6.572 0 0 0-3.437.964l.626 1.024c.819-.5 1.78-.788 2.811-.788V2.4Zm-3.437.964A6.596 6.596 0 0 0 5.4 9h1.2a5.396 5.396 0 0 1 2.59-4.612l-.627-1.024Zm6.985.937 2.876-2.877-.848-.848-2.877 2.876.849.849ZM12 3.6c1.03 0 1.992.288 2.81.788l.627-1.024A6.572 6.572 0 0 0 12 2.4v1.2Zm2.81.788A5.397 5.397 0 0 1 17.4 9h1.2a6.596 6.596 0 0 0-3.164-5.636l-.625 1.024Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgBugCrossed;
