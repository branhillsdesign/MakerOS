import * as React from "react";

const SvgHockey = ({ title, titleId, ...props }) => (
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
    <mask
      id="Hockey_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={3}
      width={22}
      height={18}
    >
      <path
        d="M11.732 18.5h.933L6 4.144V3h17v18H1v-7h8.643l2.09 4.5Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Hockey_svg__a)">
      <path
        d="M16.5 5V4h1.567l-.66 1.421L16.5 5Zm-1 0-.91-.417.268-.583h.642v1ZM10 17l.91.417-.268.583H10v-1Zm-3 0H6v-1h1v1Zm0 2v1H6v-1h1Zm-3.5-2v-1h1v1h-1Zm0 2h1v1h-1v-1ZM3 19v1H2v-1h1Zm7.027-.058-.907-.421.907.421ZM16.5 6h-1V4h1v2Zm-.09-.583-5.5 12-1.82-.834 5.5-12 1.82.834ZM10 18H7v-2h3v2Zm-2-1v2H6v-2h2Zm-1 1h2.936v2H7v-2Zm2.12.521 6.473-13.942 1.814.842-6.473 13.942-1.814-.842ZM4.5 17v2h-2v-2h2Zm-1 3H3v-2h.5v2ZM2 19v-1.9h2V19H2Zm1.1-3h.4v2h-.4v-2ZM2 17.1A1.1 1.1 0 0 1 3.1 16v2a.9.9 0 0 0 .9-.9H2Zm7.936.9a.9.9 0 0 0-.816.521l1.814.842a1.1 1.1 0 0 1-.998.637v-2Z"
        fill="#555770"
      />
    </g>
    <path
      d="M7.5 5V4H5.933l.66 1.421L7.5 5Zm1 0 .91-.417L9.141 4H8.5v1ZM14 17l-.91.417.268.583H14v-1Zm3 0h1v-1h-1v1Zm0 2v1h1v-1h-1Zm3.5-2v-1h-1v1h1Zm0 2h-1v1h1v-1Zm.5 0v1h1v-1h-1Zm-7.027-.058.907-.421-.907.421ZM7.5 6h1V4h-1v2Zm.09-.583 5.5 12 1.82-.834-5.5-12-1.82.834ZM14 18h3v-2h-3v2Zm2-1v2h2v-2h-2Zm1 1h-2.936v2H17v-2Zm-2.12.521L8.407 4.579l-1.814.842 6.473 13.942 1.814-.842ZM19.5 17v2h2v-2h-2Zm1 3h.5v-2h-.5v2Zm1.5-1v-1.9h-2V19h2Zm-1.1-3h-.4v2h.4v-2Zm1.1 1.1a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2Zm-7.936.9a.9.9 0 0 1 .816.521l-1.814.842c.18.389.57.637.998.637v-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHockey;
