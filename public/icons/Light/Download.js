import * as React from "react";

const SvgDownload = ({ title, titleId, ...props }) => (
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
      id="Download_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M8 16v8H0V0h24v24h-8v-8H8Z" fill="#fff" />
    </mask>
    <g mask="url(#Download_svg__a)">
      <path
        d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path d="M12 20v-8" stroke="#555770" strokeWidth={1.2} />
    <mask id="Download_svg__b" fill="#fff">
      <path d="m15 20-3 3-3-3h6Z" />
    </mask>
    <path
      d="m12 23-.92.92.92.918.92-.919L12 23Zm3-3 .92.92 2.219-2.22H15V20Zm-6 0v-1.3H5.862l2.219 2.22L9 20Zm3.92 3.92 3-3-1.84-1.84-3 3 1.84 1.84ZM15 18.7H9v2.6h6v-2.6Zm-6.92 2.22 3 3 1.84-1.84-3-3-1.84 1.84Z"
      fill="#555770"
      mask="url(#Download_svg__b)"
    />
  </svg>
);

export default SvgDownload;
