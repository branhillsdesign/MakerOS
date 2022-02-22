import * as React from "react";

const SvgTent = ({ title, titleId, ...props }) => (
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
      d="m3 22-.868-.496L1.277 23H3v-1Zm18 0v1h1.723l-.855-1.496L21 22Zm-9-7.5.882-.47L12 12.374l-.882 1.654.882.471ZM8 22v1h.6l.282-.53L8 22Zm8 0-.882.47.282.53h.6v-1ZM14.132.504l-12 21 1.736.992 12-21-1.736-.992Zm-6 .992 12 21 1.736-.992-12-21-1.736.992Zm2.986 12.533-4 7.5 1.764.942 4-7.5-1.764-.942ZM8 21H3v2h5v-2Zm3.118-6.03 4 7.5 1.764-.94-4-7.5-1.764.94ZM16 23h5v-2h-5v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTent;
