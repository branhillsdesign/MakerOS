import * as React from "react";

const SvgMicrophone = ({ title, titleId, ...props }) => (
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
      d="M12 23v-3.454m0 0c-3.866 0-7-2.931-7-6.546m7 6.546c3.866 0 7-2.931 7-6.546"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9 6a3 3 0 1 1 6 0v6a3 3 0 1 1-6 0V6Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgMicrophone;
