import * as React from "react";

const SvgUserPass = ({ title, titleId, ...props }) => (
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
      d="M11 4.5a1 1 0 1 0 2 0h-2ZM6 22h12v-2H6v2Zm14-2V4h-2v16h2ZM4 4v16h2V4H4Zm14-2h-6v2h6V2Zm-6 0H6v2h6V2Zm1 1V0h-2v3h2Zm-2 0v1.5h2V3h-2Zm9 1a2 2 0 0 0-2-2v2h2Zm-2 18a2 2 0 0 0 2-2h-2v2ZM6 20H4a2 2 0 0 0 2 2v-2ZM6 4V2a2 2 0 0 0-2 2h2Z"
      fill="#555770"
    />
    <path
      d="M13.222 10.2c0 .652-.537 1.198-1.222 1.198v2c1.77 0 3.222-1.422 3.222-3.199h-2ZM12 11.397a1.21 1.21 0 0 1-1.222-1.199h-2c0 1.777 1.452 3.2 3.222 3.2v-2ZM10.778 10.2C10.778 9.547 11.315 9 12 9V7c-1.77 0-3.222 1.422-3.222 3.2h2ZM12 9a1.21 1.21 0 0 1 1.222 1.2h2C15.222 8.421 13.77 7 12 7v2Zm-3.042 9.287c.42-1.4 1.646-2.366 3.042-2.366v-2c-2.358 0-4.309 1.623-4.958 3.792l1.916.574ZM12 15.92c1.396 0 2.623.966 3.042 2.366l1.916-.574c-.65-2.169-2.6-3.792-4.958-3.792v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserPass;
