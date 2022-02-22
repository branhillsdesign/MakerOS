import * as React from "react";

const SvgColorPicker = ({ title, titleId, ...props }) => (
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
      d="m13.412 6.824.424-.425-.424.425Zm3.764 3.764.425-.424-.424.424Zm-.47-.47-.424.424.424-.424Zm2.587-2.587.424.424-.424-.424Zm-2.824-2.824.425.424-.425-.424ZM7.911 19.854l.424.424-.424-.424Zm-3.765-3.765.425.424-.425-.424Zm8.841-9.69-9.265 9.266.849.848 9.265-9.265-.848-.849ZM3.4 16.442V19h1.2v-2.558H3.4ZM5 20.6h2.558v-1.2H5v1.2Zm3.335-.322 9.266-9.265-.849-.849-9.265 9.265.848.849Zm5.501-13.879-1.412-1.412-.848.849 1.412 1.412.848-.849Zm2.916 4.613 1.412 1.412.848-.848-1.411-1.412-.849.848Zm-5.176-5.176 1.882 1.882.849-.848-1.883-1.883-.848.849Zm2.73 1.034-.47-.47-.848.848.47.47.849-.848Zm0 .848 2.588-2.587-.849-.848-2.587 2.587.849.848Zm3.153-2.587 1.41 1.41.848-.849-1.41-1.41-.848.85Zm1.553 6.445L17.13 9.693l-.848.849 1.882 1.882.848-.848ZM17.13 9.693 14.307 6.87l-.849.848 2.824 2.824.848-.849Zm-.848.849.47.47.849-.848-.47-.47-.85.848Zm2.587-3.436-2.587 2.587.848.849 2.587-2.587-.848-.849Zm0-.565a.4.4 0 0 1 0 .565l.848.849a1.6 1.6 0 0 0 0-2.263l-.848.849Zm-1.975-1.41a.4.4 0 0 1 .565 0l.849-.848a1.6 1.6 0 0 0-2.263 0l.849.848ZM7.558 20.6a1.1 1.1 0 0 0 .777-.322l-.848-.849a.1.1 0 0 1 .07-.029v1.2ZM3.4 19A1.6 1.6 0 0 0 5 20.6v-1.2a.4.4 0 0 1-.4-.4H3.4Zm.322-3.335a1.1 1.1 0 0 0-.322.777h1.2a.1.1 0 0 1-.03.071l-.848-.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgColorPicker;
