import * as React from "react";

const SvgCampFire = ({ title, titleId, ...props }) => (
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
      d="m2 22 20-6M2 16l20 6"
      stroke="#555770"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M8.49 7.215c.153.102.317.156.47.175 1.035.13 1.918-.17 2.608-.747.66-.553 1.1-1.32 1.388-2.087.357-.95.53-2.02.561-2.983C15.515 2.703 18 5.166 18 9.4c0 3.038-2.63 5.6-6 5.6s-6-2.562-6-5.6c0-1.41.56-2.711 1.502-3.705.015.055.03.11.047.163.166.523.45 1.03.94 1.357Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCampFire;
