import * as React from "react";

const SvgEsports = ({ title, titleId, ...props }) => (
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
      d="M12.26 15.317H8.11L5.604 17.59c-1.08.979-2.793.072-2.587-1.368l1.082-7.557A3.11 3.11 0 0 1 7.179 6h9.642a3.11 3.11 0 0 1 3.08 2.666l1.082 7.557c.206 1.44-1.508 2.347-2.587 1.368l-2.507-2.274h-4.148"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M17 11.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1ZM15.5 8.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
      fill="currentColor"
    />
    <path
      d="M9 13V8m-2.5 2.5h5m6 1.5a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0ZM16 9a.5.5 0 0 1-1 0 .5.5 0 0 1 1 0Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgEsports;
