import * as React from "react";

const SvgBike = ({ title, titleId, ...props }) => (
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
      d="M9 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM23 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M8 10c0-.273.11-.52.287-.701l3.043-3.041a.996.996 0 0 1 1.387.045.998.998 0 0 1 0 1.394l-3.038 3.037L12 13v.5l-3.713-2.799A.997.997 0 0 1 8 10Z"
      fill="#555770"
    />
    <path
      d="m12 13.5-3.713-2.799a.997.997 0 0 1 0-1.402l3.043-3.041a.996.996 0 0 1 1.387.045M12 13.5V19m0-5.5V13l-2.32-2.266 3.037-3.037a.997.997 0 0 0 0-1.394m0 0C13.645 7.535 16.2 10 19 10"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <circle
      cx={15.373}
      cy={3.577}
      r={1.5}
      fill="#555770"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgBike;
