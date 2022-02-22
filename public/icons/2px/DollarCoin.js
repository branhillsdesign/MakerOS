import * as React from "react";

const SvgDollarCoin = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10} stroke="#555770" strokeWidth={2} />
    <path
      d="m12 12 .227-.974L12 12Zm.227-.974c-.725-.17-1.33-.405-1.732-.693C10.117 10.06 10 9.81 10 9.55H8c0 1.092.6 1.884 1.33 2.408.706.507 1.601.82 2.443 1.016l.454-1.948ZM10 9.55c0-.621.697-1.45 2-1.45v-2c-2.01 0-4 1.365-4 3.45h2Zm2-1.45c1.303 0 2 .829 2 1.45h2c0-2.085-1.99-3.45-4-3.45v2Zm2 6.35c0 .621-.697 1.45-2 1.45v2c2.01 0 4-1.365 4-3.45h-2Zm-2 1.45c-1.303 0-2-.829-2-1.45H8c0 2.085 1.99 3.45 4 3.45v-2Zm-.227-2.926c.687.16 1.297.396 1.71.69.4.283.517.54.517.786h2c0-1.107-.632-1.9-1.358-2.416-.712-.506-1.602-.818-2.415-1.008l-.454 1.948ZM13 7.1V5h-2v2.1h2Zm-2 9.8V19h2v-2.1h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDollarCoin;
