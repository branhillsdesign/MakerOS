import * as React from "react";

const SvgMailOpen = ({ title, titleId, ...props }) => (
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
      d="m12 12-.447.894.447.224.447-.224L12 12Zm9.553-5.894-10 5 .894 1.788 10-5-.894-1.788Zm-9.106 5-10-5-.894 1.788 10 5 .894-1.788Z"
      fill="currentColor"
    />
    <path
      d="m12 2 .447-.894L12 .882l-.447.224L12 2Zm9.724 4.862.447-.895-.447.895Zm-19.448 0-.447-.895.447.895ZM21 20H3v2h18v-2Zm0-12.691V20h2V7.309h-2ZM3 20V7.309H1V20h2ZM2.724 7.756l9.723-4.862-.894-1.788-9.724 4.861.895 1.79Zm8.829-4.862 9.723 4.862.895-1.789-9.724-4.861-.894 1.788ZM3 20H1a2 2 0 0 0 2 2v-2Zm18 2a2 2 0 0 0 2-2h-2v2Zm2-14.691a1.5 1.5 0 0 0-.83-1.342l-.894 1.79A.5.5 0 0 1 21 7.308h2Zm-20 0a.5.5 0 0 1-.276.447l-.895-1.789A1.5 1.5 0 0 0 1 7.31h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMailOpen;
