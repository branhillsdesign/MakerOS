import * as React from "react";

const SvgSecurityCamera = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Security_Camera_svg__a)">
      <path
        d="m2 12 .017-1-1.766-.03.883 1.53L2 12Zm3.5 6.062-.866.5.883 1.53.857-1.544-.874-.486ZM4.165 10.75l-.5-.866-.866.5.5.866.866-.5ZM17.59 3l.866-.5-.5-.866-.866.5.5.866Zm3.5 6.062.5.866.866-.5-.5-.866-.866.5Zm-13.424 7.75-.866.5.5.866.866-.5-.5-.866Zm7.263 4.157-1-.009-.009 1.004 1.005.005.004-1ZM1.134 12.5l3.5 6.062 1.732-1-3.5-6.062-1.732 1Zm5.24 6.047 1.415-2.549-1.748-.97-1.415 2.549 1.748.97Zm1.407-3.534-2-3.464-1.732 1 2 3.464 1.732-1Zm-2.85-3.964L2.018 11l-.034 2 2.915.049.034-2Zm.85.5-.75-1.299-1.732 1 .75 1.299 1.732-1Zm-1.116.067 13.424-7.75-1-1.732-13.424 7.75 1 1.732ZM16.722 3.5l3.5 6.062 1.732-1-3.5-6.062-1.732 1Zm3.866 4.696-13.423 7.75 1 1.732 13.424-7.75-1-1.732ZM8.531 16.312l-.75-1.299-1.732 1 .75 1.3 1.732-1Zm6.495-3.75a1.5 1.5 0 0 1-.549 2.05l1 1.731a3.5 3.5 0 0 0 1.281-4.78l-1.732 1Zm-.549 2.05a1.5 1.5 0 0 1-2.049-.55l-1.732 1a3.5 3.5 0 0 0 4.781 1.281l-1-1.732Zm-.5.856-.049 5.492 2 .018.05-5.492-2-.018Zm.947 6.5L21.87 22l.009-2-6.946-.031-.01 2Z"
        fill="#555770"
      />
    </g>
    <defs>
      <clipPath id="Security_Camera_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgSecurityCamera;
