import * as React from "react";

const SvgMessageX = ({ title, titleId, ...props }) => (
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
      d="m6.75 17-.375-.468.165-.132h.21v.6Zm-3.588 2.87.375.468-.375-.468ZM4 3.4h16v1.2H4V3.4ZM21.6 5v11h-1.2V5h1.2ZM2.4 16V5h1.2v11H2.4Zm0 3.792V16h1.2v3.792H2.4Zm4.725-2.324-3.588 2.87-.75-.937 3.588-2.87.75.938ZM6.75 16.4H20v1.2H6.75v-1.2ZM3.6 19.792a.5.5 0 0 0-.812-.39l.75.936a.7.7 0 0 1-1.138-.546h1.2ZM20 3.4A1.6 1.6 0 0 1 21.6 5h-1.2a.4.4 0 0 0-.4-.4V3.4ZM4 4.6a.4.4 0 0 0-.4.4H2.4A1.6 1.6 0 0 1 4 3.4v1.2ZM21.6 16a1.6 1.6 0 0 1-1.6 1.6v-1.2a.4.4 0 0 0 .4-.4h1.2Z"
      fill="#555770"
    />
    <path d="m15 7.5-6 6m0-6 6 6" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgMessageX;
