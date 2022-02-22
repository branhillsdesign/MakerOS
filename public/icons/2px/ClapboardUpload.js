import * as React from "react";

const SvgClapboardUpload = ({ title, titleId, ...props }) => (
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
      id="Clapboard_Upload_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={4}
      width={20}
      height={16}
    >
      <path
        d="M2 6a2 2 0 0 1 2-2h18v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Clapboard_Upload_svg__a)">
      <path
        d="M21 2.5h1v-1h-1v1Zm-18 0v-1H2v1h1Zm3.217 5.974-.88.474.88-.474ZM20 18H4v2h16v-2ZM4 18V5H2v13h2ZM4 5V2.5H2V5h2ZM2.12 2.974l3.216 5.974L7.097 8 3.88 2.026l-1.76.948ZM20 9v9h2V9h-2ZM7.097 10H11.5V8H7.097v2Zm.495-7.08 3 6.5 1.816-.84-3-6.5-1.816.84Zm.908.58h5v-2h-5v2Zm3 6.5h5V8h-5v2Zm5 0H21V8h-4.5v2Zm-3.908-7.08 3 6.5 1.816-.84-3-6.5-1.816.84Zm.908.58h5v-2h-5v2Zm6.5-1V8h2V2.5h-2ZM20 8v1h2V8h-2Zm-2.41-5.086 2.5 5.5 1.82-.828-2.5-5.5-1.82.828ZM3 3.5h5.5v-2H3v2Zm18-2h-2.5v2H21v-2ZM5.336 8.948A2 2 0 0 0 7.097 10V8l-1.76.948ZM4 18H2a2 2 0 0 0 2 2v-2Zm16 2a2 2 0 0 0 2-2h-2v2Z"
        fill="#555770"
      />
      <path d="M12 12v5m0-5 1 1h-2l1-1Z" stroke="#555770" strokeWidth={2} />
    </g>
  </svg>
);

export default SvgClapboardUpload;
