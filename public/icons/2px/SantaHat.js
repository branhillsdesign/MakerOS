import * as React from "react";

const SvgSantaHat = ({ title, titleId, ...props }) => (
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
      d="m12.5 4 .723-.691a1 1 0 0 0-1.005-.268L12.5 4ZM4 6.5l-.282-.96a1 1 0 0 0-.713.855L4 6.5Zm15.063 6 .968.25-.968-.25Zm-4.23-.5-.96.28.96-.28ZM16 17v3h2v-3h-2Zm0 3H3v2h13v-2ZM3 20v-3H1v3h2Zm0 0H1a2 2 0 0 0 2 2v-2Zm13 0v2a2 2 0 0 0 2-2h-2Zm0-3h2a2 2 0 0 0-2-2v2ZM3 15a2 2 0 0 0-2 2h2v-2Zm18-1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-8.782-8.96-8.5 2.5.564 1.92 8.5-2.5-.564-1.92ZM3 17h13v-2H3v2Zm.005-10.605-1 9.5 1.99.21 1-9.5-1.99-.21ZM21 10c-.76 0-1.456.284-1.985.75l1.324 1.5A.993.993 0 0 1 21 12v-2Zm-9.223-5.309 7.178 7.5L20.4 10.81l-7.177-7.5-1.446 1.382Zm7.238 6.06a3 3 0 0 0-.92 1.5l1.936.498a1 1 0 0 1 .308-.5l-1.324-1.499Zm-.92 1.5c-.062.24-.095.492-.095.749h2c0-.088.011-.172.031-.25l-1.936-.5ZM16.96 15.72l-1.167-4-1.92.56 1.167 4 1.92-.56Zm-1.167-4-2.333-8-1.92.56 2.333 8 1.92-.56Zm3.387-.213-4.23-.5-.234 1.986 4.23.5.234-1.986Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSantaHat;
