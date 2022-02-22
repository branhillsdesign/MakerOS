import * as React from "react";

const SvgPhoneStandard = ({ title, titleId, ...props }) => (
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
      d="M8.5 22h7v-2h-7v2Zm7-20h-7v2h7V2ZM17 3.5H7v2h10v-2Zm-11 1v15h2v-15H6Zm12 15v-15h-2v15h2Zm-11 1h10v-2H7v2ZM15.5 4a.5.5 0 0 1 .5.5h2A2.5 2.5 0 0 0 15.5 2v2Zm0 18a2.5 2.5 0 0 0 2.5-2.5h-2a.5.5 0 0 1-.5.5v2Zm-7-2a.5.5 0 0 1-.5-.5H6A2.5 2.5 0 0 0 8.5 22v-2Zm0-18A2.5 2.5 0 0 0 6 4.5h2a.5.5 0 0 1 .5-.5V2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPhoneStandard;
