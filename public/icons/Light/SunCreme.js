import * as React from "react";

const SvgSunCreme = ({ title, titleId, ...props }) => (
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
      d="M18 9h.6v-.6H18V9ZM6 9v-.6h-.6V9H6Zm2 0v.6h.6V9H8Zm0-3v-.6h-.6V6H8Zm8 3h-.6v.6h.6V9Zm0-3h.6v-.6H16V6Zm-5.5-4v-.6h-.6V2h.6Zm3 0h.6v-.6h-.6V2Zm-2.379 10.879v.6h.249l.176-.176-.425-.424ZM12 12l.424-.424L12 11.15l-.424.425L12 12Zm-2.121.879v-.6h-.6v.6h.6Zm3 0-.425.424.176.176h.249v-.6Zm1.242 0h.6v-.6h-.6v.6Zm0 1.242h-.6v.249l.176.176.424-.425ZM15 15l.424.424.425-.424-.425-.424L15 15Zm-.879.879-.424-.425-.176.176v.249h.6Zm0 1.242v.6h.6v-.6h-.6Zm-1.242 0v-.6h-.249l-.176.176.425.424ZM12 18l-.424.424.424.425.424-.425L12 18Zm-.879-.879.425-.424-.176-.176h-.249v.6Zm-1.242 0h-.6v.6h.6v-.6Zm0-1.242h.6v-.249l-.176-.176-.424.425ZM9 15l-.424-.424L8.15 15l.425.424L9 15Zm.879-.879.424.425.176-.176v-.249h-.6ZM17.4 9v9h1.2V9h-1.2ZM14 21.4h-4v1.2h4v-1.2ZM6.6 18V9H5.4v9h1.2ZM6 9.6h2V8.4H6v1.2ZM8.6 9V6H7.4v3h1.2Zm7.4.6h2V8.4h-2v1.2ZM15.4 6v3h1.2V6h-1.2ZM8 6.6h2.5V5.4H8v1.2Zm3.1-.6V2H9.9v4h1.2Zm-.6-3.4h3V1.4h-3v1.2Zm3 4H16V5.4h-2.5v1.2ZM12.9 2v4h1.2V2h-1.2ZM10 21.4A3.4 3.4 0 0 1 6.6 18H5.4a4.6 4.6 0 0 0 4.6 4.6v-1.2Zm7.4-3.4a3.4 3.4 0 0 1-3.4 3.4v1.2a4.6 4.6 0 0 0 4.6-4.6h-1.2Zm-5.854-4.697.878-.879-.848-.848-.879.878.849.849Zm-1.667.176h1.242v-1.2H9.88v1.2Zm3 0h1.242v-1.2H12.88v1.2Zm-1.303-1.055.878.879.849-.849-.879-.878-.848.848Zm2.121 2.122.879.878.848-.848-.878-.879-.849.849Zm-.176-1.667v1.242h1.2V12.88h-1.2Zm0 3v1.242h1.2V15.88h-1.2Zm1.055-1.303-.879.878.849.849.878-.879-.848-.848Zm-2.122 2.121-.878.879.848.848.879-.878-.849-.849Zm1.667-.176H12.88v1.2h1.242v-1.2Zm-3 0H9.88v1.2h1.242v-1.2Zm1.303 1.055-.878-.879-.849.849.879.878.848-.848Zm-2.121-2.122-.879-.878-.848.848.878.879.849-.849Zm.176 1.667V15.88h-1.2v1.242h1.2Zm0-3V12.88h-1.2v1.242h1.2Zm-1.055 1.303.879-.878-.849-.849-.878.879.848.848ZM10.5 6.6h3V5.4h-3v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSunCreme;
