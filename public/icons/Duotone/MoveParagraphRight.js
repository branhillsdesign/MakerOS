import * as React from "react";

const SvgMoveParagraphRight = ({ title, titleId, ...props }) => (
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
      d="M18 4h-2.4m0 0v13m0-13H12m0 0h-1.8C7.88 4 6 5.828 6 8.083s1.88 4.084 4.2 4.084H12M12 4v8.167M12 17v-4.833"
      stroke="#555770"
      strokeWidth={2}
    />
    <path d="M3 20h16" stroke="currentColor" strokeWidth={2} />
    <path d="M19 22v-4l2 2-2 2Z" fill="currentColor" />
  </svg>
);

export default SvgMoveParagraphRight;
