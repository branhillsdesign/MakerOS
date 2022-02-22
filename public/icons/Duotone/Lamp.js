import * as React from "react";

const SvgLamp = ({ title, titleId, ...props }) => (
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
      d="m5.822 8.925 6.515-1.28m-7.053 3.24 2.712 8.127m0 0h5.896a.1.1 0 0 1 .1.098V20H3.999v-.89a.1.1 0 0 1 .1-.098h3.897Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M15.172 7.062a1.492 1.492 0 0 0-.95-.763 1.5 1.5 0 0 0-1.885 1.346 1.485 1.485 0 0 0 1.11 1.518 1.51 1.51 0 0 0 1.208-.191m.517-1.91a1.478 1.478 0 0 1-.517 1.91m.517-1.91L20.535 4m0 0 .965.256-2.784 10.276-.965-.256M20.535 4 17.75 14.276m-3.096-5.304 3.096 5.304M5.998 9.622c0-.252-.064-.489-.176-.697A1.501 1.501 0 0 0 4.5 8.14 1.49 1.49 0 0 0 3 9.622a1.49 1.49 0 0 0 1.499 1.483c.288 0 .557-.08.785-.22.428-.26.714-.729.714-1.263Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgLamp;
