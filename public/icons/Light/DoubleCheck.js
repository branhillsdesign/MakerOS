import * as React from "react";

const SvgDoubleCheck = ({ title, titleId, ...props }) => (
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
      d="m12.244 17-.43.419.43.44.43-.44-.43-.419Zm-4.878 0-.43.419.425.435.43-.43L7.365 17Zm-.917-5.081 5.365 5.5.86-.838-5.366-5.5-.86.838Zm6.224 5.5 9.757-10-.86-.838-9.756 10 .86.838Zm-11.102-5.5 5.365 5.5.86-.838-5.367-5.5-.858.838Zm6.22 5.505 1-1-.85-.848-1 1 .85.848Zm3.881-3.882 6.118-6.118-.848-.848-6.119 6.118.849.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDoubleCheck;
