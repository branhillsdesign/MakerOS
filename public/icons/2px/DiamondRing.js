import * as React from "react";

const SvgDiamondRing = ({ title, titleId, ...props }) => (
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
      d="M10.364 2V1h-.408l-.291.285.699.715ZM9 3.333l-.7-.715-.766.75.802.713L9 3.333ZM13.636 2l.7-.715L14.043 1h-.408v1ZM15 3.333l.664.748.802-.713-.767-.75-.699.715ZM19 14a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7 7a7 7 0 0 1-7-7H3a9 9 0 0 0 9 9v-2Zm-7-7a7 7 0 0 1 7-7V5a9 9 0 0 0-9 9h2Zm7-7a7 7 0 0 1 7 7h2a9 9 0 0 0-9-9v2ZM9.665 1.285 8.3 2.618l1.398 1.43 1.364-1.333-1.398-1.43Zm-1.33 2.796 3 2.666 1.33-1.494-3-2.667-1.33 1.495Zm4.602-1.366 1.364 1.333 1.398-1.43-1.364-1.333-1.398 1.43Zm1.399-.13-3 2.668 1.328 1.494 3-2.666-1.328-1.495ZM13.636 1h-3.272v2h3.272V1Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDiamondRing;
