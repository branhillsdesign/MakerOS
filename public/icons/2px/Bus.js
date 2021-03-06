import * as React from "react";

const SvgBus = ({ title, titleId, ...props }) => (
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
      d="M5 6c1 0 1 .002 1 .003v.004a1.396 1.396 0 0 1-.005.086.5.5 0 0 1-.011.064c-.009.033-.016.043-.01.034.007-.013.087-.146.397-.323C7.021 5.497 8.562 5 12 5V3c-3.562 0-5.521.503-6.621 1.132-.565.323-.922.69-1.133 1.052a1.871 1.871 0 0 0-.202.488A1.501 1.501 0 0 0 4 5.986v.011C4 5.998 4 6 5 6Zm14 0c1 0 1-.002 1-.003v-.011a12.296 12.296 0 0 1-.002-.048 1.297 1.297 0 0 0-.042-.266 1.873 1.873 0 0 0-.202-.488c-.21-.362-.568-.73-1.133-1.052C17.521 3.503 15.563 3 12 3v2c3.438 0 4.979.497 5.629.868.31.177.39.31.398.323.005.01-.003-.001-.01-.034a.502.502 0 0 1-.017-.13v-.024C18 6.002 18 6 19 6ZM6 7V6H4v1h2Zm14 0V6h-2v1h2ZM5 8h14V6H5v2Zm15 10v-6h-2v6h2Zm0-6V7h-2v5h2ZM6 18v-6H4v6h2Zm0-6V7H4v5h2Zm13-1H5v2h14v-2ZM5 19v1.9h2V19H5Zm1.1 3h.8v-2h-.8v2ZM6 20h1v-2H6v2Zm2 .9V19H6v1.9h2ZM7 20h10v-2H7v2Zm9-1v1.9h2V19h-2Zm1.1 3h.8v-2h-.8v2Zm-.1-2h1v-2h-1v2Zm2 .9V19h-2v1.9h2ZM17.9 22a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2Zm.1-4v2a2 2 0 0 0 2-2h-2Zm-2 2.9a1.1 1.1 0 0 0 1.1 1.1v-2a.9.9 0 0 1 .9.9h-2ZM4 18a2 2 0 0 0 2 2v-2H4Zm2.9 4A1.1 1.1 0 0 0 8 20.9H6a.9.9 0 0 1 .9-.9v2ZM5 20.9A1.1 1.1 0 0 0 6.1 22v-2a.9.9 0 0 1 .9.9H5ZM10 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM17 15.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBus;
