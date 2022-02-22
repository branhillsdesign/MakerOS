import * as React from "react";

const SvgDrum = ({ title, titleId, ...props }) => (
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
      d="M21 9c0 1.657-4.03 3-9 3m9-3v9c0 1.178-2.037 2.197-5 2.688M21 9l-5 11.688M12 12c-4.97 0-9-1.343-9-3m9 3-4 8.688M12 12l4 8.688M3 9v9c0 1.178 2.037 2.197 5 2.688M3 9l5 11.688"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M21 9c0 1.657-4.03 3-9 3s-9-1.343-9-3m18 0c0-1.657-4.03-3-9-3S3 7.343 3 9m18 0v9c0 1.178-2.037 2.197-5 2.688-1.205.2-2.563.312-4 .312-1.437 0-2.795-.112-4-.312-2.963-.49-5-1.51-5-2.688V9"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M9.521 8.122a1 1 0 1 0 .958 1.756L9.52 8.122ZM21.48 3.878a1 1 0 1 0-.958-1.756l.958 1.756Zm-11 6 11-6-.958-1.756-11 6 .958 1.756Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDrum;
