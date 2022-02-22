import * as React from "react";

const SvgWheel = ({ title, titleId, ...props }) => (
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
      d="M17.4 12a5.4 5.4 0 0 1-5.4 5.4v1.2a6.6 6.6 0 0 0 6.6-6.6h-1.2ZM12 17.4A5.4 5.4 0 0 1 6.6 12H5.4a6.6 6.6 0 0 0 6.6 6.6v-1.2ZM6.6 12A5.4 5.4 0 0 1 12 6.6V5.4A6.6 6.6 0 0 0 5.4 12h1.2ZM12 6.6a5.4 5.4 0 0 1 5.4 5.4h1.2A6.6 6.6 0 0 0 12 5.4v1.2Zm5.576-2.176 2 2 .848-.848-2-2-.848.848Zm-12-.848-2 2 .848.848 2-2-.848-.848Zm-2 14.848 2 2 .848-.848-2-2-.848.848Zm14.848 2 2-2-.848-.848-2 2 .848.848ZM12 10.6c.387 0 .736.156.99.41l.848-.848A2.593 2.593 0 0 0 12 9.4v1.2Zm.99.41c.254.254.41.603.41.99h1.2c0-.718-.292-1.369-.762-1.838l-.848.848Zm5.586-6.434-5.586 5.586.848.848 5.586-5.586-.848-.848ZM10.6 12c0-.387.156-.736.41-.99l-.848-.848c-.47.47-.762 1.12-.762 1.838h1.2Zm.41-.99c.254-.254.603-.41.99-.41V9.4c-.718 0-1.369.292-1.838.761l.848.849ZM4.576 5.424l5.586 5.586.848-.848-5.586-5.586-.848.848Zm5.586 7.566-5.586 5.586.848.848 5.586-5.586-.848-.848ZM12 13.4c-.387 0-.736-.156-.99-.41l-.848.848c.47.47 1.12.762 1.838.762v-1.2Zm-.99-.41a1.394 1.394 0 0 1-.41-.99H9.4c0 .718.292 1.369.761 1.838l.849-.848Zm1.98.848 5.586 5.586.848-.848-5.585-5.586-.849.848ZM13.4 12c0 .387-.156.736-.41.99l.848.848c.47-.47.762-1.12.762-1.838h-1.2Zm-.41.99c-.254.254-.603.41-.99.41v1.2c.718 0 1.369-.292 1.838-.762l-.848-.848ZM10.5 2.6H12V1.4h-1.5v1.2Zm1.5 0h1.5V1.4H12v1.2Zm.6 7.4V2h-1.2v8h1.2Zm-11.2.5V12h1.2v-1.5H1.4Zm0 1.5v1.5h1.2V12H1.4Zm8.6-.6H2v1.2h8v-1.2Zm.5 11.2H12v-1.2h-1.5v1.2Zm1.5 0h1.5v-1.2H12v1.2Zm-.6-8.6v8h1.2v-8h-1.2Zm10-3.5V12h1.2v-1.5h-1.2Zm0 1.5v1.5h1.2V12h-1.2Zm-7.4.6h8v-1.2h-8v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgWheel;