import * as React from "react";

const SvgEmoticonSatisfied = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path
      d="M7 14c.998 1.793 2.863 3 5 3 2.136 0 4.002-1.207 5-3"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask id="Emoticon_Satisfied_svg__a" fill="#fff">
      <path d="M9 12a2 2 0 0 1-1.732-3 2 2 0 0 0 3.464 0A2 2 0 0 1 9 12ZM15 12a2 2 0 0 1-1.732-3 2 2 0 0 0 3.464 0A2 2 0 0 1 15 12Z" />
    </mask>
    <path
      d="m13.268 9 1.73-1.001-1.73-2.993-1.732 2.993L13.268 9Zm3.464 0 1.732-1.001-1.732-2.993-1.73 2.993L16.731 9Zm-6 0 1.732-1.001-1.732-2.993-1.73 2.993L10.731 9ZM7.268 9l1.73-1.001-1.73-2.993-1.732 2.993L7.268 9ZM5 10a4 4 0 0 0 4 4v-4H5Zm4 4a4 4 0 0 0 4-4H9v4Zm2-4a4 4 0 0 0 4 4v-4h-4Zm4 4a4 4 0 0 0 4-4h-4v4Zm-3.464-3.998A4 4 0 0 0 15 12V8h-.001l.002.001L15 8l-.001-.001-3.463 2.003Zm0-2.003A3.99 3.99 0 0 0 11 10h4v-.001l-.001.002L11.536 8ZM15 12a4 4 0 0 0 3.464-1.998L15 7.998 15 8l-.002.001h.003C15.003 8 15.003 8 15 8v4Zm4-2a3.99 3.99 0 0 0-.536-2.001L15 10.002v-.003C15 9.997 15 9.997 15 10h4ZM9 12a4 4 0 0 0 3.464-1.998L9 7.998 9 8l-.001.001H9C9.003 8 9.003 8 9 8v4Zm4-2a3.99 3.99 0 0 0-.536-2.001L9 10.002v-.003C9 9.997 9 9.997 9 10h4Zm-7.464.002A4 4 0 0 0 9 12V8h-.001L9 8.001 9 8l-.001-.001-3.463 2.003Zm0-2.003A3.99 3.99 0 0 0 5 10h4v-.001L8.999 10 5.536 8Z"
      fill="#555770"
      mask="url(#Emoticon_Satisfied_svg__a)"
    />
  </svg>
);

export default SvgEmoticonSatisfied;
