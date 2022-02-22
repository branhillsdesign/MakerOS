import * as React from "react";

const SvgPotion = ({ title, titleId, ...props }) => (
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
      d="m10 10.341.333.943.667-.235v-.708h-1ZM10 3.5h1v-.414l-.293-.293L10 3.5ZM8.5 2V1a1 1 0 0 0-.707 1.707L8.5 2Zm5.5 8.341h-1v.708l.667.235.333-.943ZM14 3.5l-.707-.707-.293.293V3.5h1ZM15.5 2l.707.707A1 1 0 0 0 15.5 1v1ZM17 16a5 5 0 0 1-5 5v2a7 7 0 0 0 7-7h-2Zm-5 5a5 5 0 0 1-5-5H5a7 7 0 0 0 7 7v-2Zm-5-5a5.002 5.002 0 0 1 3.333-4.716L9.667 9.4A7.002 7.002 0 0 0 5 16h2Zm4-5.659V3.5H9v6.841h2Zm-.293-7.548-1.5-1.5-1.414 1.414 1.5 1.5 1.414-1.414Zm2.96 8.491A5.002 5.002 0 0 1 17 16h2c0-3.05-1.95-5.641-4.667-6.601l-.666 1.885ZM15 10.341V3.5h-2v6.841h2Zm-.293-6.134 1.5-1.5-1.414-1.414-1.5 1.5 1.414 1.414ZM15.5 1h-7v2h7V1Z"
      fill="currentColor"
    />
    <path d="M16 16a4 4 0 0 1-8 0h8Z" fill="#555770" />
  </svg>
);

export default SvgPotion;
