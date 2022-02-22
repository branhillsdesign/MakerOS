import * as React from "react";

const SvgWheel = ({ title, titleId, ...props }) => (
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
      d="m5 5 5.586 5.586M19 19l-5.586-5.586M19 5l-5.586 5.586M5 19l5.586-5.586M10.5 2H12m1.5 0H12m6 2 2 2m2 4.5V12m0 1.5V12M2 10.5V12m0 1.5V12m4-8L4 6m0 12 2 2m4.5 2H12m1.5 0H12m6-2 2-2m-6-6c0-.552-.224-1.052-.586-1.414M14 12c0 .552-.224 1.052-.586 1.414M14 12h8m-10 2a1.994 1.994 0 0 1-1.414-.586M12 14c.552 0 1.052-.224 1.414-.586M12 14v8m-2-10c0-.552.224-1.052.586-1.414M10 12c0 .552.224 1.052.586 1.414M10 12H2m10-2c.552 0 1.052.224 1.414.586M12 10c-.552 0-1.052.224-1.414.586M12 10V2"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgWheel;
