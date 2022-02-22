import * as React from "react";

const SvgWine = ({ title, titleId, ...props }) => (
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
    <path d="M6.942 6h10.116" stroke="currentColor" strokeWidth={2} />
    <path
      d="M12 14c2.795 0 5.103-2.123 5.454-4.871.061-.482.002-.97-.086-1.447L17.058 6l-.737-4H7.68l-.737 4-.31 1.682c-.088.478-.147.965-.086 1.447C6.897 11.877 9.205 14 12 14Zm0 0v8m0 0H7m5 0h5"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWine;
