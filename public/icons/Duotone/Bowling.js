import * as React from "react";

const SvgBowling = ({ title, titleId, ...props }) => (
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
      d="M8.099 15h.032m0 0h7.738c.022.248.032.498.032.749 0 .76-.093 1.519-.295 2.251H8.394a8.456 8.456 0 0 1-.295-2.251c0-.25.01-.5.032-.749Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 2A3 3 0 0 0 9.4 6.5c.885 1.61.227 3.674-.647 5.879a9.138 9.138 0 0 0-.655 3.37 8.456 8.456 0 0 0 .4 2.597c.217.664.493 1.466.75 2.09.143.35.49.564.87.564h3.763a.928.928 0 0 0 .87-.564c.256-.624.532-1.426.75-2.09a8.457 8.457 0 0 0 .4-2.598 9.235 9.235 0 0 0-.655-3.37c-.875-2.204-1.533-4.268-.648-5.878A3 3 0 0 0 12 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBowling;
