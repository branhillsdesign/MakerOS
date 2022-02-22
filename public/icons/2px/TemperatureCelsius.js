import * as React from "react";

const SvgTemperatureCelsius = ({ title, titleId, ...props }) => (
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
      d="m6 17.05.199.98L6 17.05Zm1 0-.199.98.199-.98Zm1 2.45A1.5 1.5 0 0 1 6.5 21v2a3.5 3.5 0 0 0 3.5-3.5H8ZM6.5 21A1.5 1.5 0 0 1 5 19.5H3A3.5 3.5 0 0 0 6.5 23v-2ZM5 19.5a1.5 1.5 0 0 1 1.199-1.47L5.8 16.07A3.5 3.5 0 0 0 3 19.5h2Zm1.199-1.47c.096-.02.197-.03.301-.03v-2c-.238 0-.472.024-.699.07l.398 1.96ZM7 17.05V3.5H5v13.55h2Zm-.5.95c.104 0 .205.01.301.03l.398-1.96A3.512 3.512 0 0 0 6.5 16v2Zm.301.03A1.5 1.5 0 0 1 8 19.5h2a3.5 3.5 0 0 0-2.801-3.43L6.8 18.03ZM6 3.5v13.55h2V3.5H6Zm.5.5a.5.5 0 0 1-.5-.5h2A1.5 1.5 0 0 0 6.5 2v2Zm.5-.5a.5.5 0 0 1-.5.5V2A1.5 1.5 0 0 0 5 3.5h2ZM18 2h-1v2h1V2Zm-1 9h1V9h-1v2Zm1 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-4-3a3 3 0 0 0 3 3V9a1 1 0 0 1-1-1h-2Zm3-6a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V2Zm4 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm-7 0v1.5h2V5h-2Zm0 1.5V8h2V6.5h-2Z"
      fill="#555770"
    />
    <circle cx={10.5} cy={3.5} r={1.5} fill="#555770" />
  </svg>
);

export default SvgTemperatureCelsius;
