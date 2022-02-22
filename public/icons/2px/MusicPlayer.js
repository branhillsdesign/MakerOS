import * as React from "react";

const SvgMusicPlayer = ({ title, titleId, ...props }) => (
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
      d="M18 9h1v-.414l-.293-.293L18 9Zm-6.955-6.955-.094-.996.094.996ZM21 12a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-2Zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11v-2Zm0-18a9 9 0 0 1 9 9h2c0-6.075-4.925-11-11-11v2Zm1 9a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1 1a1 1 0 0 1-1-1H9a3 3 0 0 0 3 3v-2Zm-1-1a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm4.5-.4v2.3h2v-2.3h-2Zm1.1 3.4h.8v-2h-.8v2Zm1.9-1.1v-2.3h-2v2.3h2Zm-1.1-3.4H18v2h.4v-2Zm-.4 0h-.4v2h.4v-2Zm1 1V9h-2v1.5h2ZM3 12a9.001 9.001 0 0 1 8.14-8.96l-.19-1.99C5.368 1.577 1 6.278 1 12h2Zm8.14-8.96c.282-.026.57-.04.86-.04V1c-.354 0-.704.017-1.05.05l.19 1.99Zm7.567 5.253-6.955-6.955-1.414 1.414 6.955 6.955 1.414-1.414ZM19.5 10.6a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2ZM18.4 14a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2Zm-1.9-1.1a1.1 1.1 0 0 0 1.1 1.1v-2a.9.9 0 0 1 .9.9h-2Zm2-2.3a.9.9 0 0 1-.9.9v-2a1.1 1.1 0 0 0-1.1 1.1h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMusicPlayer;
