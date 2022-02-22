import * as React from "react";

const SvgMoveParagraphLeft = ({ title, titleId, ...props }) => (
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
      d="M18 4h-2.4m0 0v13m0-13H12m0 0h-1.8C7.88 4 6 5.828 6 8.083s1.88 4.084 4.2 4.084H12M12 4v8.167M12 17v-4.833M5 20h16"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path d="M5 22v-4l-2 2 2 2Z" fill="#555770" />
  </svg>
);

export default SvgMoveParagraphLeft;
