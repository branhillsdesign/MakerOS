import * as React from "react";

const SvgChristmasTree = ({ title, titleId, ...props }) => (
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
      d="m12 3 .763-.646-.74-.873-.765.849L12 3ZM6.583 9l-.742-.67L4.333 10h2.25V9ZM10 9l.768.64A1 1 0 0 0 10 8v1Zm-5 6-.768-.64L2.865 16H5v-1Zm4 0 .768.64A1 1 0 0 0 9 14v1Zm-5 6-.768-.64L1.865 22H4v-1ZM17.083 9v1h2.158l-1.395-1.646-.763.646ZM14 9V8a1 1 0 0 0-.768 1.64L14 9Zm5 6v1h2.135l-1.367-1.64L19 15Zm-4 0v-1a1 1 0 0 0-.768 1.64L15 15Zm5 6v1h2.135l-1.367-1.64L20 21ZM11.258 2.33l-5.417 6 1.485 1.34 5.416-6-1.484-1.34ZM6.583 10H10V8H6.583v2Zm2.649-1.64-5 6 1.536 1.28 5-6-1.536-1.28ZM5 16h4v-2H5v2Zm3.232-1.64-5 6 1.536 1.28 5-6-1.536-1.28Zm3.005-10.714 5.083 6 1.526-1.292-5.083-6-1.526 1.292ZM17.083 8H14v2h3.083V8Zm-3.851 1.64 5 6 1.536-1.28-5-6-1.536 1.28ZM19 14h-4v2h4v-2Zm-4.768 1.64 5 6 1.536-1.28-5-6-1.536 1.28ZM4 22h16v-2H4v2Z"
      fill="#555770"
    />
    <mask
      id="Christmas_Tree_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Christmas_Tree_svg__a)">
      <path
        d="m12 3 .763-.646-.74-.873-.765.849L12 3ZM6.583 9l-.742-.67L4.333 10h2.25V9ZM10 9l.768.64A1 1 0 0 0 10 8v1Zm-5 6-.768-.64L2.865 16H5v-1Zm4 0 .768.64A1 1 0 0 0 9 14v1Zm-5 6-.768-.64L1.865 22H4v-1ZM17.083 9v1h2.158l-1.395-1.646-.763.646ZM14 9V8a1 1 0 0 0-.768 1.64L14 9Zm5 6v1h2.135l-1.367-1.64L19 15Zm-4 0v-1a1 1 0 0 0-.768 1.64L15 15Zm5 6v1h2.135l-1.367-1.64L20 21ZM11.258 2.33l-5.417 6 1.485 1.34 5.416-6-1.484-1.34ZM6.583 10H10V8H6.583v2Zm2.649-1.64-5 6 1.536 1.28 5-6-1.536-1.28ZM5 16h4v-2H5v2Zm3.232-1.64-5 6 1.536 1.28 5-6-1.536-1.28Zm3.005-10.714 5.083 6 1.526-1.292-5.083-6-1.526 1.292ZM17.083 8H14v2h3.083V8Zm-3.851 1.64 5 6 1.536-1.28-5-6-1.536 1.28ZM19 14h-4v2h4v-2Zm-4.768 1.64 5 6 1.536-1.28-5-6-1.536 1.28ZM4 22h16v-2H4v2Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export default SvgChristmasTree;
