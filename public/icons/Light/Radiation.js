import * as React from "react";

const SvgRadiation = ({ title, titleId, ...props }) => (
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
      d="M22 12h.6v-.6H22v.6ZM2 12v-.6h-.6v.6H2Zm15-8.662.52.3.3-.52-.52-.3-.3.52ZM7 20.662l-.3.52.52.3.3-.52-.52-.3ZM7 3.338l-.3-.52-.52.3.3.52.52-.3Zm10 17.324-.52.3.3.52.52-.3-.3-.52Zm-3.5-11.26-.3.519.3-.52Zm-3 0 .3.519-.3-.52Zm0 5.197.3-.52-.3.52Zm3 0-.3-.52.3.52ZM12 2.6c1.713 0 3.318.458 4.7 1.257l.6-1.039A10.554 10.554 0 0 0 12 1.4v1.2ZM7.3 20.143A9.396 9.396 0 0 1 2.6 12H1.4c0 3.924 2.133 7.35 5.3 9.181l.6-1.038Zm0-16.286A9.354 9.354 0 0 1 12 2.6V1.4c-1.93 0-3.74.516-5.3 1.418l.6 1.04ZM21.4 12a9.396 9.396 0 0 1-4.7 8.143l.6 1.038A10.596 10.596 0 0 0 22.6 12h-1.2ZM12 9.6c.438 0 .847.117 1.2.32l.6-1.038A3.586 3.586 0 0 0 12 8.4v1.2Zm1.2.32A2.399 2.399 0 0 1 14.4 12h1.2a3.599 3.599 0 0 0-1.8-3.118l-.6 1.039Zm3.28-6.882L12.98 9.1l1.04.6 3.5-6.063-1.04-.6ZM9.6 12c0-.888.482-1.663 1.2-2.08l-.6-1.038A3.599 3.599 0 0 0 8.4 12h1.2Zm1.2-2.08c.353-.203.762-.32 1.2-.32V8.4c-.655 0-1.27.175-1.8.482l.6 1.039ZM6.48 3.639 9.98 9.7l1.04-.6-3.5-6.063-1.04.6ZM12 14.4c-.438 0-.847-.117-1.2-.32l-.6 1.038c.53.307 1.145.482 1.8.482v-1.2Zm-1.2-.32A2.399 2.399 0 0 1 9.6 12H8.4c0 1.333.725 2.496 1.8 3.118l.6-1.039Zm-.82.219-3.5 6.063 1.04.6 3.5-6.063-1.04-.6ZM14.4 12c0 .888-.482 1.663-1.2 2.08l.6 1.038A3.599 3.599 0 0 0 15.6 12h-1.2Zm-1.2 2.08c-.353.203-.762.32-1.2.32v1.2c.655 0 1.27-.175 1.8-.482l-.6-1.039Zm-.22.819 3.5 6.063 1.04-.6-3.5-6.063-1.04.6ZM2 12.6h7v-1.2H2v1.2Zm13 0h7v-1.2h-7v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRadiation;