import * as React from "react";

const SvgTableLamp = ({ title, titleId, ...props }) => (
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
      d="M7 2v-.6h-.492l-.096.482L7 2ZM5 12l-.588-.118-.144.718H5V12Zm2.5 3v-.6h-.6v.6h.6Zm0 1h-.6v.6h.6V16ZM9 22l-.592.099.084.501H9V22Zm8-20 .588-.118-.096-.482H17V2Zm2 10v.6h.732l-.144-.718L19 12Zm-2.5 3h.6v-.6h-.6v.6Zm0 1v.6h.6V16h-.6ZM15 22v.6h.508l.084-.501L15 22ZM6.412 1.882l-2 10 1.176.236 2-10-1.176-.236ZM5 12.6h7v-1.2H5v1.2Zm6.4-.6v3h1.2v-3h-1.2Zm.6 2.4H7.5v1.2H12v-1.2Zm-5.1.6v1h1.2v-1H6.9Zm.6 1.6H8v-1.2h-.5v1.2Zm-.092-.501 1 6 1.184-.198-1-6-1.184.198Zm9.004-13.981 2 10 1.176-.236-2-10-1.176.236ZM19 11.4h-7v1.2h7v-1.2Zm-7 4.2h4.5v-1.2H12v1.2Zm3.9-.6v1h1.2v-1h-1.2Zm.6.4H16v1.2h.5v-1.2Zm-1.092.501-1 6 1.184.198 1-6-1.184-.198ZM8 16.6h8v-1.2H8v1.2Zm1 6h6v-1.2H9v1.2Zm-2-20h10V1.4H7v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTableLamp;
