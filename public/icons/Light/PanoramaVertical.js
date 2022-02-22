import * as React from "react";

const SvgPanoramaVertical = ({ title, titleId, ...props }) => (
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
      d="m19 3 .56.217A.6.6 0 0 0 19 2.4V3ZM5 3v-.6a.6.6 0 0 0-.56.817L5 3Zm0 18-.56-.218A.6.6 0 0 0 5 21.6V21Zm14 0v.6a.6.6 0 0 0 .56-.818L19 21Zm-.54-1.389.56-.217-.56.217Zm0-15.222.56.217-.56-.217Zm-12.92 0-.56.217.56-.217Zm0 15.222-.56-.217.56.217ZM19 2.4H5v1.2h14V2.4ZM5 21.6h14v-1.2H5v1.2Zm14.56-.818-.54-1.388-1.12.435.54 1.389 1.12-.436Zm-.54-16.176.54-1.389-1.12-.434-.54 1.388 1.12.435ZM4.44 3.217l.54 1.39L6.1 4.17l-.54-1.388-1.12.434Zm.54 16.177-.54 1.389 1.12.434.54-1.388-1.12-.435Zm0-14.788a20.4 20.4 0 0 1 0 14.788l1.12.435a21.6 21.6 0 0 0 0-15.658l-1.12.435Zm14.04 14.788a20.4 20.4 0 0 1 0-14.788l-1.12-.435a21.6 21.6 0 0 0 0 15.658l1.12-.435Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPanoramaVertical;
