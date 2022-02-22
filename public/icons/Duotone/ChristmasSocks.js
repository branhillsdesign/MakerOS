import * as React from "react";

const SvgChristmasSocks = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Christmas_Socks_svg__a)" strokeWidth={2}>
      <path
        d="m18.845 14.232-1.957-7.626a1 1 0 0 0-1.238-.714L9.662 7.567a1 1 0 0 0-.701 1.202L10 13a.83.83 0 0 1-.097.64.614.614 0 0 1-.161.164l-1.303.97c-.929.69-1.882 1.454-2.226 2.559a4.51 4.51 0 0 0-.062 2.458c.593 2.309 2.866 3.68 5.078 3.06l.529-.148a4.6 4.6 0 0 0 1.371-.644l3.829-2.638c1.633-1.126 2.393-3.216 1.886-5.19Z"
        stroke="#555770"
      />
      <path
        d="M6.031 4.652c-.13-.507.158-1.027.643-1.163l8.783-2.456c.485-.136.983.164 1.113.67l.706 2.751c.13.507-.157 1.027-.642 1.163l-7.905 2.21-.878.247c-.485.135-.984-.165-1.114-.672l-.706-2.75Z"
        stroke="currentColor"
      />
    </g>
    <defs>
      <clipPath id="Christmas_Socks_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgChristmasSocks;
