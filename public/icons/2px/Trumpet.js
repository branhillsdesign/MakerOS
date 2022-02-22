import * as React from "react";

const SvgTrumpet = ({ title, titleId, ...props }) => (
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
      d="M7.5 12h7v-2h-7v2Zm0 5A2.5 2.5 0 0 1 5 14.5H3A4.5 4.5 0 0 0 7.5 19v-2Zm9.5-2.5a2.5 2.5 0 0 1-2.5 2.5v2a4.5 4.5 0 0 0 4.5-4.5h-2ZM14.5 12a2.5 2.5 0 0 1 2.5 2.5h2a4.5 4.5 0 0 0-4.5-4.5v2Zm-7-2A4.5 4.5 0 0 0 3 14.5h2A2.5 2.5 0 0 1 7.5 12v-2Zm0 0H1v2h6.5v-2ZM2 11V9.5H0V11h2Zm-2 0v1.5h2V11H0Zm22-5v10h2V6h-2Zm-7.5 6c1.827 0 4.896-.389 7.044-1.784L20.456 8.54C18.785 9.623 16.18 10 14.5 10v2Zm7.044-1.784C22.916 9.326 24 7.958 24 6h-2c0 1.092-.563 1.902-1.544 2.539l1.088 1.677ZM14.5 12c1.68 0 4.286.377 5.956 1.461l1.088-1.677C19.396 10.388 16.328 10 14.5 10v2Zm5.956 1.461C21.437 14.098 22 14.908 22 16h2c0-1.958-1.084-3.326-2.456-4.216l-1.088 1.677ZM20 9.378v3.244h2V9.378h-2ZM8.5 17h-1v2h1v-2Zm1 1V9h-2v9h2Zm5-1h-1v2h1v-2Zm-1 0h-5v2h5v-2Zm1 1V9h-2v9h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTrumpet;
