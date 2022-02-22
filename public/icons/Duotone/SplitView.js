import * as React from "react";

const SvgSplitView = ({ title, titleId, ...props }) => (
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
    <mask
      id="Split_View_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={3}
      width={18}
      height={18}
    >
      <path
        d="M15 3h2v2h-2V3ZM19 3h2v2h-2V3ZM19 7h2v2h-2V7ZM19 11h2v2h-2v-2ZM19 15h2v2h-2v-2ZM19 19h2v2h-2v-2ZM15 19h2v2h-2v-2ZM3 3h6v18H3V3Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Split_View_svg__a)" strokeWidth={2}>
      <path
        d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Z"
        stroke="#555770"
      />
      <path
        d="M20 5v14a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"
        stroke="currentColor"
      />
      <path
        d="M4 19V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z"
        stroke="#555770"
      />
    </g>
    <path d="M12 1v22" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgSplitView;
