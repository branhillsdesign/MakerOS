import * as React from "react";

const SvgChicken = ({ title, titleId, ...props }) => (
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
      d="M2 18.32c0 .763.646 1.38 1.444 1.38h.962v.92c0 .762.647 1.38 1.444 1.38.798 0 1.444-.618 1.444-1.38 0-.565-.04-1.232.377-1.632l2.992-2.858-2.52-2.408L5.15 16.58c-.418.4-1.116.36-1.707.36-.798 0-1.444.619-1.444 1.38Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M12.352 16.27c.515-.022 1.03-.113 1.648-.27 2.565-.654 6.913-4.529 7.752-6.936.578-1.655.127-3.48-1.164-4.714-1.352-1.292-3.375-1.699-5.157-1.037C13.073 4.19 9.195 8.175 8.5 10.5c-.159.531-.296.991-.377 1.446-.203 1.145.47 2.207 1.312 3.01.8.766 1.81 1.363 2.917 1.314Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgChicken;
