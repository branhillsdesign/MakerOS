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
      d="m3 22-.521-.298-.513.898H3V22Zm18 0v.6h1.034l-.513-.898L21 22Zm-9-7.5.53-.282-.53-.993-.53.993.53.282ZM8 22v.6h.36l.17-.318L8 22Zm8 0-.53.282.17.318H16V22ZM14.48.702l-12.001 21 1.042.596 12-21-1.042-.596Zm-6 .596 12 21 1.04-.596-12-21-1.04.596Zm2.99 12.92-4 7.5 1.06.564 4-7.5-1.06-.564ZM8 21.4H3v1.2h5v-1.2Zm3.47-6.618 4 7.5 1.06-.564-4-7.5-1.06.564ZM16 22.6h5v-1.2h-5v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTent;
