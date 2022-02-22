import * as React from "react";

const SvgGuitar = ({ title, titleId, ...props }) => (
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
      d="M11.62 20.699c2.03 2.03 5.707 1.642 8.214-.865 2.508-2.507 2.895-6.185.865-8.214-1.003-1.004-2.41-1.416-3.877-1.274-.614.059-1.208-.396-1.411-.978a3.092 3.092 0 0 0-.734-1.176c-1.45-1.45-4.076-1.173-5.867.617-1.791 1.791-2.068 4.418-.618 5.868.337.337.737.58 1.176.734.582.203 1.037.796.978 1.41-.142 1.469.27 2.874 1.274 3.878Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13.998 13.998a1.834 1.834 0 1 0 2.594 2.594 1.834 1.834 0 0 0-2.594-2.594Zm0 0L4.27 4.27M2.649 2.649l1.62 1.62m0 0a.917.917 0 0 1-1.296 0l-.902-.901a.1.1 0 0 1 0-.142l1.155-1.155a.1.1 0 0 1 .142 0l.902.902a.917.917 0 0 1 0 1.297Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgGuitar;
