import * as React from "react";

const SvgBottleWine = ({ title, titleId, ...props }) => (
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
    <path d="M17 13.5H7v5h10v-5Z" stroke="currentColor" strokeWidth={2} />
    <path
      d="m9.64 8.8-1.56 1.3A3 3 0 0 0 7 12.405V21a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8.595a3 3 0 0 0-1.08-2.304L14.36 8.8a1 1 0 0 1-.36-.768V3.677c0-.113.045-.222.126-.303.229-.229.31-.569.207-.876l-.149-.446a.808.808 0 0 0-.766-.552h-2.836a.808.808 0 0 0-.766.553l-.149.445a.857.857 0 0 0 .207.876c.08.08.126.19.126.303v4.355a1 1 0 0 1-.36.768Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBottleWine;
