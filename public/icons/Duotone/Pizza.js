import * as React from "react";

const SvgPizza = ({ title, titleId, ...props }) => (
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
      d="M12 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12 3c-3.256 0-6.321.82-9 2.263L12 21l2.861-5.003 2.652-4.637L21 5.263A18.916 18.916 0 0 0 12 3Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgPizza;
