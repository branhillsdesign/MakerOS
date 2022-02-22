import * as React from "react";

const SvgConeIcecream = ({ title, titleId, ...props }) => (
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
      d="M11.5 10.263a3.67 3.67 0 0 0 2.844 1.337 3.68 3.68 0 0 0 1.975-.57l-4.726 11.739a.1.1 0 0 1-.185 0L6.733 11.062c.559.34 1.218.537 1.923.537a3.671 3.671 0 0 0 2.844-1.337Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9.254 4.448A3.653 3.653 0 0 1 12.719 2c1.8 0 3.298 1.282 3.6 2.97m-7.065-.522a3.738 3.738 0 0 0-.598-.048C6.637 4.4 5 6.012 5 8c0 1.294.693 2.428 1.733 3.063.559.34 1.218.537 1.923.537a3.671 3.671 0 0 0 2.844-1.337M9.254 4.448a3.665 3.665 0 0 1 2.246 1.29m4.82-.768a3.68 3.68 0 0 0-1.976-.57A3.671 3.671 0 0 0 11.5 5.737m4.82-.767A3.584 3.584 0 0 1 18 8c0 1.272-.67 2.39-1.68 3.03a3.68 3.68 0 0 1-1.976.57 3.671 3.671 0 0 1-2.844-1.337m0-4.526A3.551 3.551 0 0 0 10.687 8c0 .857.305 1.645.813 2.263"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgConeIcecream;
