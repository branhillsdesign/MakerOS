import * as React from "react";

const SvgPlaneDeparting = ({ title, titleId, ...props }) => (
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
      d="m12.294 10.408-2.104-3.49 4.488 4.03.61.55-1.994.571-1-1.66Zm9.073-.655-2.975.854 2.972-.864h.004l.002.002v.002l.001.002v.002l-.002.001-.002.001Z"
      stroke="#555770"
      strokeWidth={3}
    />
    <mask id="Plane_Departing_svg__a" fill="#fff">
      <path d="M2.5 21v-2h19v2h-19Z" />
    </mask>
    <path
      d="M2.5 19v-3h-3v3h3Zm0 2h-3v3h3v-3Zm19 0v3h3v-3h-3Zm0-2h3v-3h-3v3Zm-22 0v2h6v-2h-6Zm3 5h19v-6h-19v6Zm22-3v-2h-6v2h6Zm-3-5h-19v6h19v-6Z"
      fill="currentColor"
      mask="url(#Plane_Departing_svg__a)"
    />
  </svg>
);

export default SvgPlaneDeparting;
