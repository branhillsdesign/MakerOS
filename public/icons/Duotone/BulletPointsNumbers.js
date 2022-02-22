import * as React from "react";

const SvgBulletPointsNumbers = ({ title, titleId, ...props }) => (
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
    <path d="M7 6h14M7 12h14M7 18h14" stroke="#555770" strokeWidth={2} />
    <path
      d="M2 4.5h1.5V8M2 10.5h2.5v.5l-2 2v.5H5m-3 3h2.5V18M2 19.5h2.5V18m0 0H3"
      stroke="currentColor"
    />
  </svg>
);

export default SvgBulletPointsNumbers;
