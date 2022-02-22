import * as React from "react";

const SvgGridRound = ({ title, titleId, ...props }) => (
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
    <mask id="Grid_Round_svg__a" fill="#fff">
      <path d="M3 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM3 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13 7a4 4 0 1 1 8 0 4 4 0 0 1-8 0ZM13 17a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" />
    </mask>
    <path
      d="M17 19.8a2.8 2.8 0 0 1-2.8-2.8h-2.4a5.2 5.2 0 0 0 5.2 5.2v-2.4Zm2.8-2.8a2.8 2.8 0 0 1-2.8 2.8v2.4a5.2 5.2 0 0 0 5.2-5.2h-2.4ZM17 14.2a2.8 2.8 0 0 1 2.8 2.8h2.4a5.2 5.2 0 0 0-5.2-5.2v2.4Zm0-2.4a5.2 5.2 0 0 0-5.2 5.2h2.4a2.8 2.8 0 0 1 2.8-2.8v-2.4Zm0-2A2.8 2.8 0 0 1 14.2 7h-2.4a5.2 5.2 0 0 0 5.2 5.2V9.8ZM19.8 7A2.8 2.8 0 0 1 17 9.8v2.4A5.2 5.2 0 0 0 22.2 7h-2.4ZM17 4.2A2.8 2.8 0 0 1 19.8 7h2.4A5.2 5.2 0 0 0 17 1.8v2.4Zm0-2.4A5.2 5.2 0 0 0 11.8 7h2.4A2.8 2.8 0 0 1 17 4.2V1.8Zm-10 18A2.8 2.8 0 0 1 4.2 17H1.8A5.2 5.2 0 0 0 7 22.2v-2.4ZM9.8 17A2.8 2.8 0 0 1 7 19.8v2.4a5.2 5.2 0 0 0 5.2-5.2H9.8ZM7 14.2A2.8 2.8 0 0 1 9.8 17h2.4A5.2 5.2 0 0 0 7 11.8v2.4Zm0-2.4A5.2 5.2 0 0 0 1.8 17h2.4A2.8 2.8 0 0 1 7 14.2v-2.4Zm0-2A2.8 2.8 0 0 1 4.2 7H1.8A5.2 5.2 0 0 0 7 12.2V9.8ZM9.8 7A2.8 2.8 0 0 1 7 9.8v2.4A5.2 5.2 0 0 0 12.2 7H9.8ZM7 4.2A2.8 2.8 0 0 1 9.8 7h2.4A5.2 5.2 0 0 0 7 1.8v2.4Zm0-2.4A5.2 5.2 0 0 0 1.8 7h2.4A2.8 2.8 0 0 1 7 4.2V1.8Z"
      fill="#555770"
      mask="url(#Grid_Round_svg__a)"
    />
  </svg>
);

export default SvgGridRound;
