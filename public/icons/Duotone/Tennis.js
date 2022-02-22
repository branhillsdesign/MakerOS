import * as React from "react";

const SvgTennis = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Tennis_svg__a)" strokeWidth={2}>
      <path
        d="M9.257 12.379 7.136 14.5m2.121-2.121c-.593-.593-.962-1.342-1.117-2.168m1.117 2.168c.593.593 1.342.962 2.168 1.117M2.186 19.45l4.95-4.95m0 0c.551-.62 1.524-2.346 1.004-4.289M7.136 14.5c.62-.551 2.346-1.524 4.289-1.004M8.14 10.211c-.357-1.894.41-4.196 2.178-5.964 2.538-2.538 6.179-3.013 8.132-1.06 1.952 1.952 1.477 5.593-1.061 8.131-1.768 1.768-4.07 2.535-5.964 2.178"
        stroke="#555770"
      />
      <path
        d="M19.864 21.571a3 3 0 1 1-4.243-4.242 3 3 0 0 1 4.243 4.242Z"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Tennis_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgTennis;
