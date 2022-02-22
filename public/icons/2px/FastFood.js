import * as React from "react";

const SvgFastFood = ({ title, titleId, ...props }) => (
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
    <mask
      id="Fast_Food_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={9}
      y={0}
      width={15}
      height={24}
    >
      <path d="M9 7V0h15v24h-6V7H9Z" fill="#fff" />
    </mask>
    <g mask="url(#Fast_Food_svg__a)">
      <path
        d="m22 6 .992.124.14-1.124H22v1ZM12 6V5h-1.133l.14 1.124L12 6Zm1.89 15.124-.992.124.992-.124Zm6.22 0L19.117 21l.992.124ZM16 1v5h2V1h-2Zm6 4h-5v2h5V5Zm-.992.876L19.118 21l1.984.248 1.89-15.124-1.984-.248ZM12 7h5V5h-5v2Zm-.992-.876 1.89 15.124L14.883 21l-1.89-15.124-1.985.248ZM19.118 21h-4.235v2h4.234v-2Zm-6.22.248A2 2 0 0 0 14.883 23v-2l-1.985.248Zm6.22-.248v2a2 2 0 0 0 1.984-1.752L19.117 21Z"
        fill="#555770"
      />
    </g>
    <mask
      id="Fast_Food_svg__b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={8}
      width={17}
      height={16}
    >
      <path d="M17 8H0v16h17v-3H.5v-2H17v-2H.5v-2H17V8Z" fill="#fff" />
    </mask>
    <g mask="url(#Fast_Food_svg__b)">
      <path
        d="M14.9 21H2.1v2h12.8v-2ZM8.5 11c1.57 0 3.008.45 4.028 1.095C13.595 12.768 14 13.503 14 14h2c0-1.503-1.094-2.768-2.403-3.595C12.242 9.549 10.43 9 8.5 9v2ZM3 14c0-.497.406-1.232 1.471-1.905C5.492 11.451 6.931 11 8.5 11V9c-1.93 0-3.742.55-5.096 1.405C2.094 11.232 1 12.497 1 14h2Zm-1 1h13v-2H2v2Zm1 6.9V18H1v3.9h2ZM3 18v-4H1v4h2Zm11-4v4h2v-4h-2Zm0 4v3.9h2V18h-2ZM2 19h13v-2H2v2Zm12.9 4a1.1 1.1 0 0 0 1.1-1.1h-2a.9.9 0 0 1 .9-.9v2ZM2.1 21a.9.9 0 0 1 .9.9H1A1.1 1.1 0 0 0 2.1 23v-2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgFastFood;
