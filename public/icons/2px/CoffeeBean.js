import * as React from "react";

const SvgCoffeeBean = ({ title, titleId, ...props }) => (
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
      d="m11.236 3.528.894.447-.894-.447ZM19 12c0 5.19-3.33 9-7 9v2c5.167 0 9-5.145 9-11h-2Zm-7 9c-3.67 0-7-3.81-7-9H3c0 5.855 3.833 11 9 11v-2Zm-7-9c0-5.19 3.33-9 7-9V1C6.833 1 3 6.145 3 12h2Zm7-9c3.67 0 7 3.81 7 9h2c0-5.855-3.833-11-9-11v2Zm-.894-1.447-.764 1.528 1.788.894.764-1.528-1.788-.894Zm.764 18.472-.764 1.528 1.788.894.764-1.528-1.788-.894ZM11.2 12.6a7.09 7.09 0 0 1 .67 7.425l1.788.894A9.09 9.09 0 0 0 12.8 11.4l-1.6 1.2Zm-.858-9.52a9.09 9.09 0 0 0 .858 9.52l1.6-1.2a7.09 7.09 0 0 1-.67-7.425l-1.788-.894Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCoffeeBean;
