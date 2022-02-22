import * as React from "react";

const SvgUnlike = ({ title, titleId, ...props }) => (
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
      d="m20.524 11.477.954-.299-.954.299Zm-1.376-4.403-.954.298.954-.298ZM8.5 15.344l.72-.695-.27-.28-.388-.023-.062.998Zm3.91 4.046-.719.695.72-.695ZM14 15.5l.1-.995a1 1 0 0 0-1.014 1.401L14 15.5Zm3 .3-.099.995.1-.995Zm-1.625 2.794.914-.406-.914.406ZM8 15.312H7v.94l.938.059.062-.998ZM8 5V4H7v1h1Zm12.115 9.328.832.555-.832-.555Zm1.363-3.15-1.375-4.402-1.91.596 1.376 4.403 1.91-.597Zm-13.697 4.86 3.91 4.047 1.438-1.39-3.91-4.046-1.438 1.39ZM13.848 21h.613v-2h-.613v2Zm.052-4.505 3.001.3.199-1.99-3-.3-.2 1.99Zm2.389 1.693-1.375-3.094-1.828.812L14.461 19l1.828-.812ZM7.938 16.31l.5.03.124-1.995-.5-.032-.124 1.997ZM16.328 4H8v2h8.327V4ZM9 15.313V5H7v10.313h2ZM14.461 21a2 2 0 0 0 1.828-2.812L14.46 19v2Zm-2.77-.915a3 3 0 0 0 2.157.915v-2a1 1 0 0 1-.719-.305l-1.438 1.39Zm8.412-13.31A3.956 3.956 0 0 0 16.327 4v2c.855 0 1.611.556 1.867 1.372l1.909-.596Zm.844 8.108a4.343 4.343 0 0 0 .531-3.705l-1.909.597c.212.675.106 1.41-.286 1.998l1.664 1.11Zm-1.664-1.11a2.343 2.343 0 0 1-2.183 1.032l-.199 1.99a4.343 4.343 0 0 0 4.046-1.912l-1.664-1.11Z"
      fill="#555770"
    />
    <path
      d="m3.938 15.059-.063.998.063-.998ZM8 15.313l-.062.998L9 16.377v-1.064H8ZM8 5h1V4H8v1ZM2 6v8.06h2V6H2Zm1.875 10.057 4.063.254.124-1.997L4 14.06l-.125 1.997ZM8 4H4v2h4V4Zm1 11.313V5H7v10.313h2ZM2 14.06a2 2 0 0 0 1.875 1.997L4 14.06H2ZM4 6V4a2 2 0 0 0-2 2h2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUnlike;