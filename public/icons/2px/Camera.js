import * as React from "react";

const SvgCamera = ({ title, titleId, ...props }) => (
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
      d="m21.83 7.17.706.708-.707-.707ZM3 7h13V5H3v2Zm13 10H3v2h13v-2ZM3 17V7H1v10h2ZM16 7v5h2V7h-2Zm0 5v5h2v-5h-2Zm1.707.707 4.83-4.83-1.415-1.413-4.83 4.829 1.415 1.414ZM21 7.241v9.518h2V7.24h-2Zm1.536 8.881-4.829-4.83-1.414 1.415 4.83 4.83 1.413-1.415ZM21 16.76c0-.802.97-1.204 1.536-.637l-1.414 1.414c.693.693 1.878.203 1.878-.777h-2ZM3 17H1a2 2 0 0 0 2 2v-2Zm13 2a2 2 0 0 0 2-2h-2v2Zm0-12h2a2 2 0 0 0-2-2v2Zm6.536.878C21.97 8.445 21 8.043 21 7.24h2c0-.98-1.185-1.47-1.878-.777l1.414 1.414ZM3 5a2 2 0 0 0-2 2h2V5Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCamera;
