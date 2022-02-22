import * as React from "react";

const SvgThunder = ({ title, titleId, ...props }) => (
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
      d="M10.105 2v-.6a.6.6 0 0 0-.56.385l.56.215ZM6 12.714l-.56-.214a.6.6 0 0 0 .56.814v-.6Zm4.132 0 .563.208a.6.6 0 0 0-.563-.808v.6ZM6.71 22l-.563-.207a.6.6 0 0 0 1.013.603L6.711 22ZM18 9.143l.45.396a.6.6 0 0 0-.45-.996v.6Zm-5.816 0-.52-.3a.6.6 0 0 0 .52.9v-.6ZM16.29 2l.52.299a.6.6 0 0 0-.52-.899V2Zm-6.745-.215L5.44 12.5l1.12.429 4.106-10.714-1.121-.43ZM6 13.315h4.132v-1.2H6v1.2Zm3.569-.808-3.421 9.286 1.126.414 3.42-9.285-1.125-.415ZM7.16 22.396l11.29-12.857-.902-.792L6.26 21.604l.902.792ZM18 8.543h-5.816v1.2H18v-1.2Zm-5.296.899 4.106-7.143-1.04-.598-4.106 7.143 1.04.598ZM16.29 1.4h-6.184v1.2h6.184V1.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgThunder;
