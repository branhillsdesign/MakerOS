import * as React from "react";

const SvgShare = ({ title, titleId, ...props }) => (
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
      d="m14.684 7.264-6.5 3.545m6.5 5.928-6.5-3.546"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <mask id="Share_svg__a" fill="#fff">
      <path d="M20 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM20 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </mask>
    <path
      d="M18.8 6A1.8 1.8 0 0 1 17 7.8v2.4A4.2 4.2 0 0 0 21.2 6h-2.4ZM17 7.8A1.8 1.8 0 0 1 15.2 6h-2.4a4.2 4.2 0 0 0 4.2 4.2V7.8ZM15.2 6A1.8 1.8 0 0 1 17 4.2V1.8A4.2 4.2 0 0 0 12.8 6h2.4ZM17 4.2A1.8 1.8 0 0 1 18.8 6h2.4A4.2 4.2 0 0 0 17 1.8v2.4ZM7.8 12A1.8 1.8 0 0 1 6 13.8v2.4a4.2 4.2 0 0 0 4.2-4.2H7.8ZM6 13.8A1.8 1.8 0 0 1 4.2 12H1.8A4.2 4.2 0 0 0 6 16.2v-2.4ZM4.2 12A1.8 1.8 0 0 1 6 10.2V7.8A4.2 4.2 0 0 0 1.8 12h2.4ZM6 10.2A1.8 1.8 0 0 1 7.8 12h2.4A4.2 4.2 0 0 0 6 7.8v2.4ZM18.8 18a1.8 1.8 0 0 1-1.8 1.8v2.4a4.2 4.2 0 0 0 4.2-4.2h-2.4ZM17 19.8a1.8 1.8 0 0 1-1.8-1.8h-2.4a4.2 4.2 0 0 0 4.2 4.2v-2.4ZM15.2 18a1.8 1.8 0 0 1 1.8-1.8v-2.4a4.2 4.2 0 0 0-4.2 4.2h2.4Zm1.8-1.8a1.8 1.8 0 0 1 1.8 1.8h2.4a4.2 4.2 0 0 0-4.2-4.2v2.4Z"
      fill="#555770"
      mask="url(#Share_svg__a)"
    />
  </svg>
);

export default SvgShare;
