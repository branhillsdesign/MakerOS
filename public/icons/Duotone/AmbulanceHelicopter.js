import * as React from "react";

const SvgAmbulanceHelicopter = ({ title, titleId, ...props }) => (
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
      d="M9.38 10.412v5.294m-2.618-2.647H12m-5.238 4.597V21m0 0h4.714m-4.714 0H4.146a2 2 0 0 1-1.416-.588l-.572-.573m9.318-2.183V21m0 0h5.238M9.381 3v1.588m0 0H1m8.38 0h8.41"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M9.38 7.748c-3.17 0-5.485 2.34-5.485 5.225a5.203 5.203 0 0 0 2.867 4.683 5.294 5.294 0 0 0 2.343.543c.832 0 1.673-.195 2.371-.543 1.716-.855 2.84-2.63 2.84-4.683l6.947-2.322 1.232-3.295a1 1 0 0 0-.937-1.35h-.874l-1.737 1.742H9.381Zm0 0V5.586"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgAmbulanceHelicopter;
