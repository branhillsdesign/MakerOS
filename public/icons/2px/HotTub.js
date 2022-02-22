import * as React from "react";

const SvgHotTub = ({ title, titleId, ...props }) => (
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
      d="M8 12h1v-1H8v1Zm.82-1.574.762-.646-.763.646ZM12 13h1v-1h-1v1Zm-5 0H6v1h1v-1Zm-4 0v-1H2v1h1Zm18 0h1v-1h-1v1Zm-6-6.5.832-.555L15 6.5Zm4 0 .832-.555L19 6.5ZM8 6v2a2 2 0 0 0 2-2H8Zm0 0H6a2 2 0 0 0 2 2V6Zm0 0V4a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 5H6a2 2 0 0 0 2 2v-2Zm0 0V9a2 2 0 0 0-2 2h2Zm0 0-.01-.002a.077.077 0 0 1-.017-.006c-.001 0 .027.015.083.08L9.582 9.78C9.24 9.375 8.725 9 8 9v2Zm.056.073a18.011 18.011 0 0 0 1.663 1.71c.323.287.674.568 1.019.784.305.19.764.433 1.262.433v-2c.098 0 .05.028-.202-.13a5.962 5.962 0 0 1-.752-.583A16.012 16.012 0 0 1 9.582 9.78l-1.526 1.293ZM12 12H8v2h4v-2Zm-6-1v2h2v-2H6Zm1 3h1v-2H7v2Zm2-1v-1H7v1h2Zm-7 0v7h2v-7H2Zm20 7v-7h-2v7h2ZM7 13v8h2v-8H7Zm1 9h4v-2H8v2Zm3-9v8h2v-8h-2Zm1 9h4v-2h-4v2Zm3-9v8h2v-8h-2Zm1 1h4v-2h-4v2Zm4 0h1v-2h-1v2Zm-4 8h4v-2h-4v2Zm3-9v8h2v-8h-2ZM3 14h1v-2H3v2Zm1 0h12v-2H4v2Zm0 8h4v-2H4v2Zm-1-9v8h2v-8H3Zm17 7v2a2 2 0 0 0 2-2h-2ZM2 20a2 2 0 0 0 2 2v-2H2ZM13 3c0 .493-.003 1.096.149 1.78.155.696.459 1.434 1.019 2.275l1.664-1.11c-.44-.659-.636-1.17-.73-1.6C15.002 3.905 15 3.508 15 3h-2Zm1.168 4.055c.44.659.636 1.17.73 1.6.099.441.102.838.102 1.345h2c0-.493.003-1.096-.149-1.78-.154-.696-.459-1.434-1.019-2.275l-1.664 1.11ZM17 3c0 .493-.003 1.096.149 1.78.155.696.459 1.434 1.019 2.275l1.664-1.11c-.44-.659-.636-1.17-.73-1.6C19.002 3.905 19 3.508 19 3h-2Zm1.168 4.055c.44.659.636 1.17.73 1.6.099.441.102.838.102 1.345h2c0-.493.003-1.096-.149-1.78-.154-.696-.459-1.434-1.019-2.275l-1.664 1.11Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHotTub;