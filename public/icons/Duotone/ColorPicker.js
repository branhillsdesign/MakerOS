import * as React from "react";

const SvgColorPicker = ({ title, titleId, ...props }) => (
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
      d="m13.412 6.824-9.266 9.265a.5.5 0 0 0-.146.353V19a1 1 0 0 0 1 1h2.558a.5.5 0 0 0 .353-.146l9.266-9.266"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M13.882 7.294 12 5.412l1.412 1.412.47.47Zm0 0 2.587-2.587a1 1 0 0 1 1.415 0l1.409 1.41a1 1 0 0 1 0 1.414l-2.587 2.587m-2.824-2.824 2.824 2.824m0 0L18.588 12l-1.412-1.412-.47-.47Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgColorPicker;
