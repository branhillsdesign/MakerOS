import * as React from "react";

const SvgBathtub = ({ title, titleId, ...props }) => (
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
      d="M14.576 4.424c.325.326.43.789.314 1.203L13.373 4.11a1.228 1.228 0 0 1 1.203.313Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="M3 14v-.6h-.6v.6H3Zm18 0h.6v-.6H21v.6ZM15.586 3.414l.424.424-.424-.424ZM9 12.25l.52-.298-.52.298ZM20.4 14v5h1.2v-5h-1.2ZM3.6 19v-5H2.4v5h1.2Zm1.4.4H4v1.2h1v-1.2Zm-.6.6v.9h1.2V20H4.4Zm.7 1.6h13.8v-1.2H5.1v1.2ZM20 19.4h-1v1.2h1v-1.2Zm-1 0H5v1.2h14v-1.2Zm.6 1.5V20h-1.2v.9h1.2Zm-.6-6.3h2v-1.2h-2v1.2Zm.6-.6V4.828h-1.2V14h1.2ZM15.161 2.99l-1.085 1.086.848.848 1.086-1.086-.849-.848ZM19.6 4.828c0-2.316-2.8-3.476-4.439-1.838l.85.848c.881-.881 2.389-.257 2.389.99h1.2ZM18.9 21.6a.7.7 0 0 0 .7-.7h-1.2a.5.5 0 0 1 .5-.5v1.2Zm-14.5-.7a.7.7 0 0 0 .7.7v-1.2a.5.5 0 0 1 .5.5H4.4Zm-2-1.9A1.6 1.6 0 0 0 4 20.6v-1.2a.4.4 0 0 1-.4-.4H2.4Zm18 0a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2ZM3 14.6h16v-1.2H3v1.2Zm4.9-7.85A1.15 1.15 0 0 1 6.75 7.9v1.2A2.35 2.35 0 0 0 9.1 6.75H7.9ZM6.75 7.9A1.15 1.15 0 0 1 5.6 6.75H4.4A2.35 2.35 0 0 0 6.75 9.1V7.9ZM5.6 6.75c0-.635.515-1.15 1.15-1.15V4.4A2.35 2.35 0 0 0 4.4 6.75h1.2ZM6.75 5.6c.635 0 1.15.515 1.15 1.15h1.2A2.35 2.35 0 0 0 6.75 4.4v1.2ZM5.6 12.25c0-.635.515-1.15 1.15-1.15V9.9a2.35 2.35 0 0 0-2.35 2.35h1.2Zm1.15-1.15c.293 0 .597.132.907.4.312.27.593.647.822 1.048l1.042-.596c-.27-.474-.632-.972-1.078-1.359-.448-.387-1.02-.693-1.693-.693v1.2Zm1.73 1.448c.262.46.595.952.99 1.335.387.378.905.717 1.53.717v-1.2c-.175 0-.407-.098-.694-.377-.28-.273-.548-.656-.785-1.07l-1.042.595ZM4.4 12.25V14h1.2v-1.75H4.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBathtub;