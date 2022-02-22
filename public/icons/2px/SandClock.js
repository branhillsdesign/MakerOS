import * as React from "react";

const SvgSandClock = ({ title, titleId, ...props }) => (
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
    <mask id="Sand_Clock_svg__a" fill="#fff">
      <path d="M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.929a5 5 0 0 1-1.465 3.535l-1.828 1.829a1 1 0 0 0 0 1.414l1.828 1.829A5 5 0 0 1 18 18.07V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.929a5 5 0 0 1 1.464-3.536l1.829-1.828a1 1 0 0 0 0-1.414L7.464 9.464A5 5 0 0 1 6 5.93V3Z" />
    </mask>
    <path
      d="m9.293 11.293-1.414 1.414 1.414-1.414Zm0 1.414-1.414-1.414 1.414 1.414ZM7 4h10V0H7v4Zm10 16H7v4h10v-4ZM16 3v2.929h4V3h-4Zm-.879 5.05L13.293 9.88l2.828 2.828 1.829-1.828L15.12 8.05Zm-1.828 6.071 1.828 1.829 2.829-2.829-1.829-1.828-2.828 2.828ZM16 18.071V21h4v-2.929h-4ZM10.707 9.88 8.88 8.05 6.05 10.88l1.829 1.828 2.828-2.828ZM8 5.929V3H4v2.929h4ZM8 21v-2.929H4V21h4Zm.879-5.05 1.828-1.829-2.828-2.828L6.05 13.12 8.88 15.95ZM8 18.07a3 3 0 0 1 .879-2.121L6.05 13.12A7 7 0 0 0 4 18.071h4Zm.879-10.02A3 3 0 0 1 8 5.928H4a7 7 0 0 0 2.05 4.95L8.88 8.05Zm6.242 7.899A3 3 0 0 1 16 18.07h4a7 7 0 0 0-2.05-4.95L15.12 15.95ZM16 5.929a3 3 0 0 1-.879 2.121l2.829 2.829A7 7 0 0 0 20 5.929h-4Zm-2.707 3.95a3 3 0 0 0 0 4.242l2.828-2.828a1 1 0 0 1 0 1.414L13.293 9.88Zm-5.414 2.828a1 1 0 0 1 0-1.414l2.828 2.828a3 3 0 0 0 0-4.242L7.88 12.707ZM7 20a1 1 0 0 1 1 1H4a3 3 0 0 0 3 3v-4Zm10 4a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4Zm0-20a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4ZM7 0a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1V0Z"
      fill="#555770"
      mask="url(#Sand_Clock_svg__a)"
    />
    <path
      d="M8.762 21.654h6.476c.935 0 1.359-1.169.64-1.768l-3.238-2.698a1 1 0 0 0-1.28 0l-3.238 2.698c-.719.599-.295 1.768.64 1.768Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSandClock;