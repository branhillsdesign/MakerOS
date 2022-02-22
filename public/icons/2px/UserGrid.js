import * as React from "react";

const SvgUserGrid = ({ title, titleId, ...props }) => (
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
    <mask id="User_Grid_svg__a" fill="#fff">
      <path d="M5.1 17h13.8a.1.1 0 0 1 .1.1V22a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4.9a.1.1 0 0 1 .1-.1ZM18.9 7H5.1a.1.1 0 0 1-.1-.1V2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.9a.1.1 0 0 1-.1.1Z" />
    </mask>
    <path
      d="M18.9 15H5.1v4h13.8v-4ZM5.1 9h13.8V5H5.1v4ZM3 2v4.9h4V2H3Zm18 4.9V2h-4v4.9h4ZM3 17.1V22h4v-4.9H3ZM21 22v-4.9h-4V22h4ZM6 3h12v-4H6v4Zm0 22h12v-4H6v4Zm11-3a1 1 0 0 1 1-1v4a3 3 0 0 0 3-3h-4ZM3 22a3 3 0 0 0 3 3v-4a1 1 0 0 1 1 1H3ZM21 2a3 3 0 0 0-3-3v4a1 1 0 0 1-1-1h4ZM7 2a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4Zm11.9 7A2.1 2.1 0 0 0 21 6.9h-4c0-1.05.85-1.9 1.9-1.9v4ZM5.1 5C6.15 5 7 5.85 7 6.9H3C3 8.06 3.94 9 5.1 9V5Zm13.8 14a1.9 1.9 0 0 1-1.9-1.9h4a2.1 2.1 0 0 0-2.1-2.1v4ZM5.1 15A2.1 2.1 0 0 0 3 17.1h4A1.9 1.9 0 0 1 5.1 19v-4Z"
      fill="#555770"
      mask="url(#User_Grid_svg__a)"
    />
    <path d="M3 18V6h18v12H3Z" stroke="#555770" strokeWidth={2} />
    <path
      d="M12.768 10.232A.768.768 0 0 1 12 11v2a2.768 2.768 0 0 0 2.768-2.768h-2ZM12 11a.768.768 0 0 1-.768-.768h-2A2.768 2.768 0 0 0 12 13v-2Zm-.768-.768c0-.424.344-.767.768-.767v-2a2.768 2.768 0 0 0-2.768 2.767h2ZM12 9.465c.424 0 .768.343.768.767h2A2.768 2.768 0 0 0 12 7.465v2Zm-2.223 6.354c.313-1.054 1.218-1.759 2.223-1.759v-2c-1.981 0-3.603 1.377-4.14 3.191l1.917.568ZM12 14.06c1.005 0 1.91.705 2.223 1.76l1.918-.569c-.538-1.814-2.16-3.19-4.14-3.19v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgUserGrid;
