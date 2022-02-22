import * as React from "react";

const SvgAccessible = ({ title, titleId, ...props }) => (
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
      id="Accessible_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={12}
      width={12}
      height={10}
    >
      <path d="M3 12h6v6h6v4H3V12Z" fill="#fff" />
    </mask>
    <g mask="url(#Accessible_svg__a)">
      <circle cx={10} cy={17} r={4} stroke="#555770" strokeWidth={2} />
    </g>
    <mask id="Accessible_svg__b" fill="#fff">
      <path d="M14 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h5v5h2v-5.5a2 2 0 0 0-2-2h-3V11s.918.874 2 1.343c1.082.469 2.327.657 3 .657v-2s-1.524.136-3-.922-2.015-2.046-2.445-2.422C13.125 7.28 12.507 7 12 7Z" />
    </mask>
    <path
      d="M17 17h2v-2h-2v2Zm-3-2.5h-2v2h2v-2Zm0-3.5 1.379-1.449L12 6.335V11h2Zm5 2v2h2v-2h-2Zm0-2h2V8.813l-2.178.195L19 11Zm-2 11h-2v2h2v-2Zm2 0v2h2v-2h-2ZM12 4v4a4 4 0 0 0 4-4h-4Zm0 0H8a4 4 0 0 0 4 4V4Zm0 0V0a4 4 0 0 0-4 4h4Zm0 0h4a4 4 0 0 0-4-4v4Zm0 5V5a4 4 0 0 0-4 4h4Zm0 6H8a4 4 0 0 0 4 4v-4Zm5 1.5h4a4 4 0 0 0-4-4v4ZM8 9v6h4V9H8Zm9 3.5h-3v4h3v-4Zm-1 2V11h-4v3.5h4Zm5-1.5v-2h-4v2h4Zm-9-4c-.054 0-.076-.007-.064-.004a.946.946 0 0 1 .304.167l2.63-3.013C14.186 5.552 13.12 5 12 5v4Zm0 10h5v-4h-5v4Zm3-2v5h4v-5h-4Zm2 7h2v-4h-2v4Zm4-2v-5.5h-4V22h4Zm-2-11a252.578 252.578 0 0 1-.177-1.992h.005l.005-.001a2.006 2.006 0 0 1 .021-.002h.003-.073a2.99 2.99 0 0 1-1.619-.553l-2.33 3.252a6.988 6.988 0 0 0 3.858 1.3 5.235 5.235 0 0 0 .418-.007l.038-.002.016-.002h.012L19 11Zm-1.835-2.547a7.282 7.282 0 0 1-1.275-1.159c-.162-.185-.282-.335-.439-.525a5.321 5.321 0 0 0-.581-.62l-2.63 3.014c-.032-.027-.013-.016.13.157.112.134.3.368.51.608a11.273 11.273 0 0 0 1.955 1.775l2.33-3.25ZM14 11l-1.379 1.45h.002l.002.003a.254.254 0 0 1 .006.005l.016.015.047.043.156.14c.13.111.312.263.534.432a9.03 9.03 0 0 0 1.82 1.09l1.591-3.67a5.078 5.078 0 0 1-.99-.605 6.75 6.75 0 0 1-.43-.356c-.002 0-.002 0 0 0v.002h.002l.001.002L14 11Zm1.204 3.178c1.353.586 2.871.822 3.796.822v-4c-.422 0-1.393-.14-2.204-.492l-1.591 3.67Z"
      fill="#555770"
      mask="url(#Accessible_svg__b)"
    />
  </svg>
);

export default SvgAccessible;
