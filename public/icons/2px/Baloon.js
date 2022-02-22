import * as React from "react";

const SvgBaloon = ({ title, titleId, ...props }) => (
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
      d="M16 7.25c0 1.224-.484 2.718-1.29 3.898C13.887 12.353 12.9 13 12 13v2c1.86 0 3.374-1.278 4.361-2.724C17.365 10.806 18 8.926 18 7.25h-2ZM12 13c-.901 0-1.887-.647-2.71-1.852C8.484 9.968 8 8.474 8 7.25H6c0 1.676.635 3.557 1.639 5.026C8.626 13.722 10.139 15 12 15v-2ZM8 7.25C8 4.856 9.836 3 12 3V1C8.64 1 6 3.845 6 7.25h2ZM12 3c2.164 0 4 1.856 4 4.25h2C18 3.845 15.36 1 12 1v2Zm-.753 10.342c-.406.465-.919 1.24-1.07 2.261-.157 1.058.091 2.262 1.025 3.5l1.596-1.205c-.636-.844-.715-1.515-.643-2 .078-.523.35-.956.598-1.24l-1.506-1.316Zm-.045 5.76c1.229 1.629.423 2.922.183 3.11l1.23 1.576c1.068-.833 2.095-3.357.183-5.89l-1.596 1.204Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBaloon;