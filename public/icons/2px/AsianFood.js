import * as React from "react";

const SvgAsianFood = ({ title, titleId, ...props }) => (
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
      d="M22 11h1v-1h-1v1ZM2 11v-1H1v1h1Zm19 0a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-2Zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11v-2Zm-5 2h5v-2H7v2Zm5 0h5v-2h-5v2ZM7 10H2v2h5v-2Zm.949.684-3-9-1.898.632 3 9 1.898-.632ZM22 10H10v2h12v-2Zm-12 0H7v2h3v-2Zm.995.895-1-9.5-1.99.21 1 9.5 1.99-.21ZM12.5 15.5a.5.5 0 0 1-.5.5v2a2.5 2.5 0 0 0 2.5-2.5h-2Zm-.5.5a.5.5 0 0 1-.5-.5h-2A2.5 2.5 0 0 0 12 18v-2Zm-.5-.5a.5.5 0 0 1 .5-.5v-2a2.5 2.5 0 0 0-2.5 2.5h2Zm.5-.5a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 12 13v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAsianFood;
