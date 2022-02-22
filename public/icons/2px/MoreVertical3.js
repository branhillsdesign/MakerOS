import * as React from "react";

const SvgMoreVertical3 = ({ title, titleId, ...props }) => (
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
    <mask id="More_Vertical_3_svg__a" fill="#fff">
      <path d="M12 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM12 23a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </mask>
    <path
      d="M12 5a1 1 0 0 1-1-1H7a5 5 0 0 0 5 5V5Zm-1-1a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm1 1a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1 9a1 1 0 0 1-1-1H7a5 5 0 0 0 5 5v-4Zm-1-1a1 1 0 0 1 1-1V7a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm1 1a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Zm-1 9a1 1 0 0 1-1-1H7a5 5 0 0 0 5 5v-4Zm-1-1a1 1 0 0 1 1-1v-4a5 5 0 0 0-5 5h4Zm1-1a1 1 0 0 1 1 1h4a5 5 0 0 0-5-5v4Zm1 1a1 1 0 0 1-1 1v4a5 5 0 0 0 5-5h-4Z"
      fill="#555770"
      mask="url(#More_Vertical_3_svg__a)"
    />
  </svg>
);

export default SvgMoreVertical3;
