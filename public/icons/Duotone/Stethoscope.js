import * as React from "react";

const SvgStethoscope = ({ title, titleId, ...props }) => (
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
      d="M18.361 16.054c0 2.754-2.174 4.946-4.805 4.946v2c3.78 0 6.805-3.133 6.805-6.946h-2ZM13.556 21c-2.632 0-4.806-2.192-4.806-4.946h-2C6.75 19.868 9.775 23 13.556 23v-2Zm6.805-4.946V12.27h-2v3.784h2Z"
      fill="currentColor"
    />
    <path
      d="M21 9.568c0 .963-.756 1.702-1.639 1.702v2c2.032 0 3.639-1.68 3.639-3.702h-2Zm-1.639 1.702c-.883 0-1.639-.74-1.639-1.702h-2c0 2.022 1.607 3.702 3.64 3.702v-2Zm-1.639-1.702c0-.963.756-1.703 1.64-1.703v-2c-2.033 0-3.64 1.68-3.64 3.703h2Zm1.64-1.703c.882 0 1.638.74 1.638 1.703h2c0-2.023-1.607-3.703-3.639-3.703v2ZM11.5 11.189c0 2.157-1.701 3.865-3.75 3.865v2c3.198 0 5.75-2.648 5.75-5.865h-2Zm-3.75 3.865C5.7 15.054 4 13.346 4 11.19H2c0 3.217 2.552 5.865 5.75 5.865v-2ZM4 11.19V4.081H2v7.108h2Zm0-7.108h1.639v-2H4v2Zm9.5 7.108V4.081h-2v7.108h2Zm-2-9.108H9.861v2H11.5v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm-9.5 0v-2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <path
      d="M6.639 2a1 1 0 1 0-2 0h2Zm-2 2.162a1 1 0 1 0 2 0h-2ZM10.86 2a1 1 0 1 0-2 0h2Zm-2 2.162a1 1 0 1 0 2 0h-2Zm-2.222-1.08V2h-2v1.081h2Zm-2 0v1.08h2v-1.08h-2Zm6.222 0V2h-2v1.081h2Zm-2 0v1.08h2v-1.08h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgStethoscope;
