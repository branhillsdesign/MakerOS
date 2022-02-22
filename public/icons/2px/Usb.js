import * as React from "react";

const SvgUsb = ({ title, titleId, ...props }) => (
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
    <path d="M12 21V3" stroke="#555770" strokeWidth={2} />
    <path
      d="m12 17-.354.354.854.853V17H12Zm0-3.5-.325-.38-.175.15v.23h.5Zm-3.207.293-.354.353.354-.353ZM8 10v3.086h1V10H8Zm.44 4.146 3.206 3.208.708-.708-3.208-3.207-.707.707ZM12.5 17v-3.5h-1V17h1Zm-.175-3.12 3.151-2.701-.65-.76-3.151 2.701.65.76ZM16 10.04V7h-1v3.04h1Zm-.524 1.139A1.5 1.5 0 0 0 16 10.04h-1a.5.5 0 0 1-.175.38l.651.759ZM8 13.086c0 .398.158.78.44 1.06l.706-.707A.5.5 0 0 1 9 13.086H8ZM14 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      fill="#555770"
    />
    <path d="M10 9.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill="#555770" />
    <path d="M17 5h-3v3h3V5Z" fill="#424242" />
    <path d="M14 4h-4l2-3 2 3Z" fill="#555770" />
  </svg>
);

export default SvgUsb;
