import * as React from "react";

const SvgBurstMode = ({ title, titleId, ...props }) => (
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
      d="M1.4 5v14h1.2V5H1.4Zm4 0v14h1.2V5H5.4Zm4 1.1v11.8h1.2V6.1H9.4Zm.7 12.5h11.8v-1.2H10.1v1.2Zm12.5-.7V6.1h-1.2v11.8h1.2Zm-.7-12.5H10.1v1.2h11.8V5.4Zm.7.7a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-.7 12.5a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm-12.5-.7a.7.7 0 0 0 .7.7v-1.2a.5.5 0 0 1 .5.5H9.4Zm1.2-11.8a.5.5 0 0 1-.5.5V5.4a.7.7 0 0 0-.7.7h1.2ZM12 16l3.2-4 1.943 2.546.857-1.091L20 16h-8Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBurstMode;
