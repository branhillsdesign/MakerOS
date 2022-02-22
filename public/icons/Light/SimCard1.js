import * as React from "react";

const SvgSimCard1 = ({ title, titleId, ...props }) => (
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
      d="M19 7h.6a.6.6 0 0 0-.176-.424L19 7Zm-4-4 .424-.424A.6.6 0 0 0 15 2.4V3ZM6 21.6h12v-1.2H6v1.2ZM4.4 4v16h1.2V4H4.4Zm15.2 16V7h-1.2v13h1.2ZM15 2.4H6v1.2h9V2.4Zm4.424 4.176-4-4-.848.848 4 4 .848-.848ZM18 21.6a1.6 1.6 0 0 0 1.6-1.6h-1.2a.4.4 0 0 1-.4.4v1.2ZM6 20.4a.4.4 0 0 1-.4-.4H4.4A1.6 1.6 0 0 0 6 21.6v-1.2ZM5.6 4c0-.22.18-.4.4-.4V2.4A1.6 1.6 0 0 0 4.4 4h1.2Z"
      fill="#555770"
    />
    <path d="M12.5 17V8h-3" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgSimCard1;
