import * as React from "react";

const SvgPokerChip = ({ title, titleId, ...props }) => (
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
      d="M11 5.324a6.805 6.805 0 0 1 2 0m-2 0V2.049m0 3.275A6.755 6.755 0 0 0 5.324 11M11 2.05a10.118 10.118 0 0 1 2 0m-2 0A10.003 10.003 0 0 0 2.05 11M13 2.05v3.274m0-3.275A10.003 10.003 0 0 1 21.95 11M13 5.324A6.755 6.755 0 0 1 18.676 11M5.324 11a6.805 6.805 0 0 0 0 2m0-2H2.049m0 0a10.118 10.118 0 0 0 0 2m3.275 0H2.049m3.275 0A6.755 6.755 0 0 0 11 18.676M2.05 13A10.003 10.003 0 0 0 11 21.95m0-3.274a6.799 6.799 0 0 0 2 0m-2 0v3.275m0 0a10.106 10.106 0 0 0 2 0m0-3.275v3.275m0-3.275A6.755 6.755 0 0 0 18.676 13M13 21.95A10.003 10.003 0 0 0 21.95 13m-3.274-2a6.799 6.799 0 0 1 0 2m0-2h3.275m0 0a10.106 10.106 0 0 1 0 2m-3.275 0h3.275"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M11.5 9.5h-3v2h1a1.5 1.5 0 0 1 0 3H8m5-3.5v2a1.5 1.5 0 0 0 3 0v-2a1.5 1.5 0 0 0-3 0Z"
      stroke="currentColor"
    />
  </svg>
);

export default SvgPokerChip;
