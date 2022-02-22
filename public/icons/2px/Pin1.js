import * as React from "react";

const SvgPin1 = ({ title, titleId, ...props }) => (
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
      d="m8 12 .555.832.445-.297V12H8Zm8 0h-1v.535l.445.297L16 12ZM5.29 13.807l.555.832-.555-.832ZM6 5h2V3H6v2Zm1-1v8h2V4H7Zm.445 7.168-2.71 1.807 1.11 1.664 2.71-1.807-1.11-1.664Zm11.82 1.807-2.71-1.807-1.11 1.664 2.71 1.807 1.11-1.664ZM8 5h8V3H8v2Zm8 0h2V3h-2v2Zm1 7V4h-2v8h2ZM5.651 16H12v-2H5.651v2ZM12 16h6.349v-2H12v2Zm-1-1v7h2v-7h-2Zm9-.651c0-.553-.276-1.068-.735-1.374l-1.11 1.664a.349.349 0 0 1-.155-.29h2Zm-2 0c0-.193.156-.349.349-.349v2C19.26 16 20 15.26 20 14.349h-2Zm-14 0C4 15.26 4.74 16 5.651 16v-2c.193 0 .349.156.349.349H4Zm.735-1.374c-.46.306-.735.822-.735 1.374h2a.349.349 0 0 1-.155.29l-1.11-1.664Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPin1;
