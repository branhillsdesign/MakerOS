import * as React from "react";

const SvgMortarPestle = ({ title, titleId, ...props }) => (
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
      d="M22 11h1v-1h-1v1ZM2 11v-1H1v1h1Zm17.268-6.341.98.196-.98-.196Zm-3.11-1.143-.874-.486.874.486ZM21 11a9 9 0 0 1-9 9v2c6.075 0 11-4.925 11-11h-2Zm-9 9a9 9 0 0 1-9-9H1c0 6.075 4.925 11 11 11v-2Zm-5 2h5v-2H7v2Zm5 0h5v-2h-5v2Zm0-12H2v2h10v-2Zm.874 1.486L17.032 4l-1.748-.971-4.158 7.484 1.748.972ZM22 10h-4v2h4v-2Zm-4 0h-6v2h6v-2Zm.288-5.537-1.269 6.34 1.962.393 1.268-6.341-1.961-.392Zm-.316-.714a.677.677 0 0 1 .316.714l1.96.392a2.677 2.677 0 0 0-1.247-2.82l-1.029 1.714Zm-.94.252a.677.677 0 0 1 .94-.252l1.03-1.715a2.677 2.677 0 0 0-3.718.996L17.032 4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMortarPestle;
