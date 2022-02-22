import * as React from "react";

const SvgUpload = ({ title, titleId, ...props }) => (
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
      id="Upload_svg__a"
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
    <g mask="url(#Upload_svg__a)">
      <path
        d="M8.5 18.4a6.9 6.9 0 1 1 6.263-9.8c.158.34.555.495.9.356l-.224-.557.225.557A4.9 4.9 0 1 1 17.5 18.4h-9Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
    </g>
    <path d="M12 15v8" stroke="#555770" strokeWidth={1.2} />
    <mask id="Upload_svg__b" fill="#fff">
      <path d="m9 15 3-3 3 3H9Z" />
    </mask>
    <path
      d="m12 12 .92-.92-.92-.918-.92.919L12 12Zm-3 3-.92-.92-2.218 2.22H9V15Zm6 0v1.3h3.139l-2.22-2.22L15 15Zm-3.92-3.92-3 3 1.84 1.84 3-3-1.84-1.84ZM9 16.3h6v-2.6H9v2.6Zm6.92-2.22-3-3-1.84 1.84 3 3 1.84-1.84Z"
      fill="#555770"
      mask="url(#Upload_svg__b)"
    />
  </svg>
);

export default SvgUpload;
