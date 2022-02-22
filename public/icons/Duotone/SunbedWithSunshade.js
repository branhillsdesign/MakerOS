import * as React from "react";

const SvgSunbedwithSunshade = ({ title, titleId, ...props }) => (
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
      d="M12 2C7.574 2 4.56 5.099 3 8h6m3-6c4.426 0 7.44 3.099 9 6h-6m-3-6c-1 1-3 3.6-3 6m3-6c1 1.167 3 3.5 3 6m-3 0v10.5M12 8H9m3 0h3"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="m7 19-4.397-4.396a.354.354 0 1 1 .5-.5L7 18h14.5a.5.5 0 1 1 0 1H18M7 19l-4 4m4-4h11m0 0 4 4"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSunbedwithSunshade;
