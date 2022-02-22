import * as React from "react";

const SvgPieChart = ({ title, titleId, ...props }) => (
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
      d="M12 12 5 4.859M12 12l9.542-3M12 12l4 9.168M5 4.858A9.97 9.97 0 0 0 2 12c0 5.523 4.477 10 10 10a9.966 9.966 0 0 0 4-.832M5 4.858A9.968 9.968 0 0 1 12 2c4.478 0 8.268 2.943 9.542 7m0 0c.298.947.458 1.955.458 3 0 4.1-2.468 7.625-6 9.168"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgPieChart;
