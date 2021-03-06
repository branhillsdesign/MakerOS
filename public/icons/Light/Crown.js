import * as React from "react";

const SvgCrown = ({ title, titleId, ...props }) => (
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
      d="M4 20h-.6v.6H4V20ZM2 7l.509-.318-1.095.448L2 7Zm10-3 .598-.043h-1.197L12 4Zm8 16v.6h.6V20H20Zm2-13 .586.13-1.095-.448L22 7ZM4.6 20v-4H3.4v4h1.2Zm-.014-4.13-2-9-1.172.26 2 9 1.172-.26ZM1.49 7.318c.449.718 1.293 1.77 2.398 2.651C4.989 10.846 6.41 11.6 8 11.6v-1.2c-1.21 0-2.373-.58-3.364-1.37-.986-.786-1.742-1.732-2.127-2.348l-1.018.636ZM8 11.6c1.79 0 2.893-1.492 3.538-2.987.665-1.54.974-3.361 1.06-4.57l-1.197-.086c-.08 1.124-.37 2.803-.964 4.18C9.823 9.56 9.01 10.4 8 10.4v1.2ZM20.6 20v-4h-1.2v4h1.2Zm-.014-3.87 2-9-1.172-.26-2 9 1.172.26Zm.905-9.448c-.385.616-1.14 1.562-2.127 2.349C18.373 9.82 17.21 10.4 16 10.4v1.2c1.59 0 3.01-.754 4.111-1.63 1.105-.881 1.95-1.934 2.398-2.652l-1.018-.636ZM16 10.4c-1.01 0-1.823-.841-2.437-2.263-.594-1.377-.884-3.056-.965-4.18l-1.197.086c.087 1.209.396 3.03 1.06 4.57.646 1.495 1.75 2.987 3.539 2.987v-1.2ZM4 20.6h16v-1.2H4v1.2Zm16-5.2H4v1.2h16v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCrown;
