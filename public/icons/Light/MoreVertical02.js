import * as React from "react";

const SvgMoreVertical02 = ({ title, titleId, ...props }) => (
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
    <mask id="More_Vertical_02_svg__a" fill="#fff">
      <path d="M12 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 23a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </mask>
    <path
      d="M12 5.8A1.8 1.8 0 0 1 10.2 4H7.8A4.2 4.2 0 0 0 12 8.2V5.8ZM10.2 4A1.8 1.8 0 0 1 12 2.2V-.2A4.2 4.2 0 0 0 7.8 4h2.4ZM12 2.2A1.8 1.8 0 0 1 13.8 4h2.4A4.2 4.2 0 0 0 12-.2v2.4ZM13.8 4A1.8 1.8 0 0 1 12 5.8v2.4A4.2 4.2 0 0 0 16.2 4h-2.4ZM12 13.8a1.8 1.8 0 0 1-1.8-1.8H7.8a4.2 4.2 0 0 0 4.2 4.2v-2.4ZM10.2 12a1.8 1.8 0 0 1 1.8-1.8V7.8A4.2 4.2 0 0 0 7.8 12h2.4Zm1.8-1.8a1.8 1.8 0 0 1 1.8 1.8h2.4A4.2 4.2 0 0 0 12 7.8v2.4Zm1.8 1.8a1.8 1.8 0 0 1-1.8 1.8v2.4a4.2 4.2 0 0 0 4.2-4.2h-2.4ZM12 21.8a1.8 1.8 0 0 1-1.8-1.8H7.8a4.2 4.2 0 0 0 4.2 4.2v-2.4ZM10.2 20a1.8 1.8 0 0 1 1.8-1.8v-2.4A4.2 4.2 0 0 0 7.8 20h2.4Zm1.8-1.8a1.8 1.8 0 0 1 1.8 1.8h2.4a4.2 4.2 0 0 0-4.2-4.2v2.4Zm1.8 1.8a1.8 1.8 0 0 1-1.8 1.8v2.4a4.2 4.2 0 0 0 4.2-4.2h-2.4Z"
      fill="#555770"
      mask="url(#More_Vertical_02_svg__a)"
    />
  </svg>
);

export default SvgMoreVertical02;
