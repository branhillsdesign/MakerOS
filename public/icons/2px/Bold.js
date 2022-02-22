import * as React from "react";

const SvgBold = ({ title, titleId, ...props }) => (
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
      d="M7 19H6v1h1v-1ZM7 6V5H6v1h1Zm0 14h6.563v-2H7v2Zm-1-7.5V19h2v-6.5H6Zm7.563-1H7v2h6.563v-2ZM18 15.75c0-2.4-2.04-4.25-4.438-4.25v2c1.4 0 2.438 1.06 2.438 2.25h2ZM13.562 20C15.96 20 18 18.15 18 15.75h-2c0 1.19-1.038 2.25-2.438 2.25v2ZM7 13.5h5.875v-2H7v2ZM6 6v6.5h2V6H6Zm6.875-1H7v2h5.875V5Zm4.438 4.25c0-2.4-2.04-4.25-4.438-4.25v2c1.4 0 2.438 1.06 2.438 2.25h2Zm-4.438 4.25c2.397 0 4.438-1.85 4.438-4.25h-2c0 1.19-1.038 2.25-2.438 2.25v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBold;
