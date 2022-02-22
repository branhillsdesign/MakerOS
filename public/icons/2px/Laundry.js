import * as React from "react";

const SvgLaundry = ({ title, titleId, ...props }) => (
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
      d="m14 10.535.5-.865-.5.865ZM8.535 16l-.865.5.865-.5ZM4 4v16h2V4H4Zm2 18h12v-2H6v2Zm14-2V4h-2v16h2ZM18 2H6v2h12V2Zm2 2a2 2 0 0 0-2-2v2h2Zm-2 18a2 2 0 0 0 2-2h-2v2ZM4 20a2 2 0 0 0 2 2v-2H4ZM6 4V2a2 2 0 0 0-2 2h2Zm9 10a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2Zm-6 0a3 3 0 0 1 3-3V9a5 5 0 0 0-5 5h2Zm3-3c.548 0 1.059.146 1.5.4l1-1.73A4.981 4.981 0 0 0 12 9v2Zm1.5.4c.899.521 1.5 1.49 1.5 2.6h2a4.998 4.998 0 0 0-2.5-4.33l-1 1.73ZM12 17a2.998 2.998 0 0 1-2.6-1.5l-1.73 1A4.998 4.998 0 0 0 12 19v-2Zm-2.6-1.5c-.254-.441-.4-.952-.4-1.5H7c0 .91.244 1.764.67 2.5l1.73-1Zm3.893-5.672-5.465 5.465 1.414 1.414 5.465-5.465-1.414-1.414Zm-2-.535-4 4 1.414 1.414 4-4-1.414-1.414ZM9 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgLaundry;
