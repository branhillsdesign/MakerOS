import * as React from "react";

const SvgHanger = ({ title, titleId, ...props }) => (
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
      d="m3.188 14.972-.367-.93-.02.008-.02.008.407.914ZM2 18H1v1h1v-1Zm18.812-3.028.406-.914-.02-.008-.02-.008-.366.93ZM22 18v1h1v-1h-1ZM11.041 9.256l-.48.877.48-.877Zm.592 1.314-8.812 3.472.733 1.86 8.813-3.472-.734-1.86ZM1 16.8V18h2v-1.2H1Zm12-5.3v-1h-2v1h2ZM2.782 14.058A3 3 0 0 0 1 16.8h2a1 1 0 0 1 .594-.914l-.812-1.828Zm8.851-1.628 8.813 3.473.733-1.861-8.812-3.472-.734 1.86ZM21 16.8V18h2v-1.2h-2Zm-.594-.914A1 1 0 0 1 21 16.8h2a3 3 0 0 0-1.782-2.742l-.812 1.828ZM2 19h20v-2H2v2Zm9.521-10.622A1 1 0 0 1 11 7.5H9a3 3 0 0 0 1.56 2.633l.961-1.755ZM11 7.5a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm1 4c0-.58-.253-1.047-.539-1.38a3.377 3.377 0 0 0-.94-.742l-.96 1.755c.174.095.305.199.382.288.072.085.057.107.057.079h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHanger;
