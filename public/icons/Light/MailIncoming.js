import * as React from "react";

const SvgMailIncoming = ({ title, titleId, ...props }) => (
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
      d="M22 11.5V6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path d="m2 6 10 6 10-6" stroke="#555770" strokeWidth={1.2} />
    <path
      d="m15 17-.424.424L14.15 17l.425-.424L15 17Zm8 .6h-8v-1.2h8v1.2Zm-8.424-1.024 3-3 .848.848-3 3-.848-.848Zm3 3.848-3-3 .848-.848 3 3-.848.848Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailIncoming;
