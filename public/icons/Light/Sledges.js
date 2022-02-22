import * as React from "react";

const SvgSledges = ({ title, titleId, ...props }) => (
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
      d="M3 14v-.6h-.6v.6H3Zm17-4v-.6h-.6v.6h.6Zm1 0h.6v-.6H21v.6ZM3 15h-.6v.6H3V15Zm13-.4c.763 0 1.893-.224 2.85-.913.988-.711 1.75-1.891 1.75-3.687h-1.2c0 1.404-.572 2.224-1.25 2.713-.71.51-1.58.687-2.15.687v1.2Zm4-4h1V9.4h-1v1.2Zm.4-.6c0 .737-.226 1.857-.887 2.774-.639.888-1.709 1.626-3.513 1.626v1.2c2.196 0 3.626-.928 4.487-2.124.84-1.166 1.113-2.547 1.113-3.476h-1.2ZM16 14.4H3v1.2H16v-1.2ZM3.6 15v-1H2.4v1h1.2Zm8.4-.4h4v-1.2h-4v1.2Zm.6-.6V9h-1.2v5h1.2Zm-9.6.6h3v-1.2H3v1.2Zm3 0h6v-1.2H6v1.2Zm.6-.6V9H5.4v5h1.2ZM2 9.6h14V8.4H2v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSledges;
