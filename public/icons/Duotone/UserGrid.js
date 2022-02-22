import * as React from "react";

const SvgUserGrid = ({ title, titleId, ...props }) => (
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
      d="M6 22v-4h12v4H6ZM18 2v4H6V2h12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path d="M3 18V6h18v12H3Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M12.768 10.232A.768.768 0 0 1 12 11v2a2.768 2.768 0 0 0 2.768-2.768h-2ZM12 11a.768.768 0 0 1-.768-.768h-2A2.768 2.768 0 0 0 12 13v-2Zm-.768-.768c0-.424.344-.767.768-.767v-2a2.768 2.768 0 0 0-2.768 2.767h2ZM12 9.465c.424 0 .768.343.768.767h2A2.768 2.768 0 0 0 12 7.465v2Zm-2.223 6.354c.313-1.054 1.218-1.759 2.223-1.759v-2c-1.981 0-3.603 1.377-4.14 3.191l1.917.568ZM12 14.06c1.005 0 1.91.705 2.223 1.76l1.918-.569c-.538-1.814-2.16-3.19-4.14-3.19v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserGrid;
