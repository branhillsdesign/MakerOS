import * as React from "react";

const SvgMagicStick = ({ title, titleId, ...props }) => (
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
      d="m7.39 3 .36-.481a.6.6 0 0 0-.955.551L7.39 3Zm2.741 2.043-.358.48a.6.6 0 0 0 .609.065l-.25-.545Zm3.105-1.429.569.193a.6.6 0 0 0-.82-.738l.251.545ZM12.14 6.852l-.568-.192a.6.6 0 0 0 .128.599l.44-.407Zm2.319 2.512-.008.6a.6.6 0 0 0 .448-1.007l-.44.407Zm-3.418-.042.007-.6a.6.6 0 0 0-.53.306l.523.294Zm-1.673 2.98-.573.18a.6.6 0 0 0 1.096.114l-.523-.293ZM8.352 9.04l.573-.178a.6.6 0 0 0-.456-.41l-.117.588ZM5 8.37l-.347-.489a.6.6 0 0 0 .23 1.078L5 8.37Zm2.79-1.974.346.49a.6.6 0 0 0 .25-.56l-.596.07ZM7.032 3.48l2.74 2.043.718-.962-2.74-2.043-.718.962Zm3.35 2.107 3.105-1.428-.501-1.09L9.88 4.497l.502 1.09Zm2.286-2.166L11.572 6.66l1.137.384 1.096-3.237-1.137-.385ZM11.7 7.259l2.318 2.512.881-.814-2.318-2.512-.881.814Zm2.766 1.505-3.418-.042-.015 1.2 3.418.042.015-1.2Zm-3.948.264L8.845 12.01l1.046.587 1.673-2.98-1.046-.588Zm-.577 3.096L8.925 8.861l-1.146.357 1.016 3.263 1.146-.357ZM8.469 8.451l-3.351-.67-.236 1.177 3.352.67.235-1.177Zm-3.122.408 2.79-1.975-.694-.98-2.79 1.976.694.98Zm3.038-2.534L7.987 2.93l-1.192.14.399 3.395 1.191-.14Zm2.136 3.297 6.85 11.864 1.04-.6-6.85-11.864-1.04.6Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMagicStick;
