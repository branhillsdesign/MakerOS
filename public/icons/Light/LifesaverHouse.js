import * as React from "react";

const SvgLifesaverHouse = ({ title, titleId, ...props }) => (
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
    <path
      d="m12 3 .424-.424L12 2.15l-.424.425L12 3Zm5-1v-.6h-.6V2h.6Zm5 0h.6v-.6H22V2Zm0 3v.6h.6V5H22Zm-12 7v-.6h-.6v.6h.6Zm4 0h.6v-.6H14v.6Zm-2.424-9.424-7 7 .848.848 7-7-.848-.848Zm-7 7-3 3 .848.848 3-3-.848-.848ZM4.4 10v10h1.2V10H4.4Zm0 10v4h1.2v-4H4.4Zm14.176-9.576 3 3 .848-.848-3-3-.848.848ZM18.4 10v10h1.2V10h-1.2Zm0 10v4h1.2v-4h-1.2ZM11.576 3.424l5 5 .848-.848-5-5-.848.848Zm5 5 2 2 .848-.848-2-2-.848.848ZM17 2.6h5V1.4h-5v1.2Zm4.4-.6v3h1.2V2h-1.2Zm-3.8 6V5h-1.2v3h1.2Zm0-3V2h-1.2v3h1.2Zm4.4-.6h-5v1.2h5V4.4ZM5 20.6h5v-1.2H5v1.2Zm5.6-.6v-8H9.4v8h1.2Zm-.6-7.4h4v-1.2h-4v1.2Zm0 8h4v-1.2h-4v1.2Zm4 0h5v-1.2h-5v1.2Zm-.6-8.6v8h1.2v-8h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLifesaverHouse;
