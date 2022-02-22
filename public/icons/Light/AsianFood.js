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
      d="M22 11h.6v-.6H22v.6ZM2 11v-.6h-.6v.6H2Zm19.4 0a9.4 9.4 0 0 1-9.4 9.4v1.2c5.854 0 10.6-4.746 10.6-10.6h-1.2ZM12 20.4A9.4 9.4 0 0 1 2.6 11H1.4c0 5.854 4.746 10.6 10.6 10.6v-1.2Zm-5 1.2h5v-1.2H7v1.2Zm5 0h5v-1.2h-5v1.2ZM7 10.4H2v1.2h5v-1.2Zm.57.41-3-9-1.14.38 3 9 1.14-.38ZM22 10.4H10v1.2h12v-1.2Zm-12 0H7v1.2h3v-1.2Zm.597.537-1-9.5-1.194.126 1 9.5 1.194-.126ZM12.9 15.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9.9a.9.9 0 0 1-.9-.9H9.9c0 1.16.94 2.1 2.1 2.1v-1.2Zm-.9-.9a.9.9 0 0 1 .9-.9v-1.2a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAsianFood;
