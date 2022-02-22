import * as React from "react";

const SvgStamp = ({ title, titleId, ...props }) => (
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
      d="M9.344 7.396a2.989 2.989 0 0 1-.054-.108m.054.108a8.085 8.085 0 0 0-.054-.108m.054.108C9.732 8.186 10 9.062 10 10a6.002 6.002 0 0 1-5 5.917V19h.5M9.29 7.288a3 3 0 1 1 5.42 0M5.5 19v.5h13V19m-13 0h13M14.656 7.396l.054-.108m-.054.108.054-.108m-.054.108C14.268 8.186 14 9.062 14 10a6.002 6.002 0 0 0 5 5.917V19h-.5"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Stamp_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={0}
      width={12}
      height={24}
    >
      <path fill="#000" d="M12 0h12v24H12z" />
    </mask>
    <g mask="url(#Stamp_svg__a)">
      <path
        d="M9.344 7.396a2.989 2.989 0 0 1-.054-.108m.054.108a8.085 8.085 0 0 0-.054-.108m.054.108C9.732 8.186 10 9.062 10 10a6.002 6.002 0 0 1-5 5.917V19h.5M9.29 7.288a3 3 0 1 1 5.42 0M5.5 19v.5h13V19m-13 0h13M14.656 7.396l.054-.108m-.054.108.054-.108m-.054.108C14.268 8.186 14 9.062 14 10a6.002 6.002 0 0 0 5 5.917V19h-.5"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgStamp;
