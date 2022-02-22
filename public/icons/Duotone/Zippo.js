import * as React from "react";

const SvgZippo = ({ title, titleId, ...props }) => (
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
      d="M5.54 11.5H4.525v.5h7.114v-.5H10.62m-5.08 0V8.1a.1.1 0 0 1 .101-.1h4.878a.1.1 0 0 1 .101.1v3.4m-5.08 0h5.08M6.557 8c0-.552-.455-1-1.016-1-.562 0-1.017.448-1.017 1s.455 1 1.017 1"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M13.162 12v8.869c0 .625-.521 1.131-1.164 1.131H4.163C3.521 22 3 21.494 3 20.869V12h10.162Zm0 0 5.281-9 2.975 1.697c.557.312.747 1.004.426 1.545l-4.071 6.859a1.181 1.181 0 0 1-1.59.414L13.163 12Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgZippo;
