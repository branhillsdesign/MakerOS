import * as React from "react";

const SvgSkiLift = ({ title, titleId, ...props }) => (
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
      d="M22 15.5V10a1 1 0 0 0-1-1h-5.5m6.5 6.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-5.5m20 0h-6.5M2 15.5V10a1 1 0 0 1 1-1h5.5M2 15.5h6.5m0 0V9m0 6.5h7M8.5 9H12m3.5 6.5V9m0 0H12M1 6h.406a1 1 0 0 0 .187-.018L12 4m11-2h-.406a1 1 0 0 0-.187.018L12 4m0 0v5m3 9v1"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgSkiLift;
