import * as React from "react";

const SvgCandle = ({ title, titleId, ...props }) => (
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
      id="Candle_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={6}
      y={0}
      width={12}
      height={24}
    >
      <path fill="#fff" d="M6 0h12v24H6z" />
    </mask>
    <g mask="url(#Candle_svg__a)">
      <path
        d="m12.2 2 .58-.155-.268-1.002-.735.732L12.2 2ZM7 24h-.6v1.448l1.024-1.024L7 24Zm6.8-17.188c0 .874-.713 1.588-1.6 1.588v1.2c1.543 0 2.8-1.245 2.8-2.787h-1.2ZM12.2 8.4c-.887 0-1.6-.714-1.6-1.588H9.4A2.794 2.794 0 0 0 12.2 9.6V8.4Zm-1.6-1.588c0-.489.187-1.278.556-2.128.364-.841.876-1.671 1.467-2.259l-.846-.85c-.73.725-1.317 1.697-1.722 2.632-.402.926-.655 1.887-.655 2.606h1.2Zm1.02-4.657c.428 1.605 1.028 2.426 1.5 3.056.446.596.68.91.68 1.601H15c0-1.12-.466-1.713-.92-2.32-.428-.573-.928-1.252-1.3-2.647l-1.16.31ZM8 13.6h4v-1.2H8v1.2Zm4 0h4v-1.2h-4v1.2ZM7.6 24v-6H6.4v6h1.2Zm0-6v-4H6.4v4h1.2Zm3.976-5.424-5 5 .848.848 5-5-.848-.848ZM7.424 24.424l10-10-.848-.848-10 10 .848.848ZM16.4 14v6h1.2v-6h-1.2Zm0 6v4h1.2v-4h-1.2Zm.176-.424-5.5 5.5.848.848 5.5-5.5-.848-.848ZM16 13.6c.22 0 .4.18.4.4h1.2a1.6 1.6 0 0 0-1.6-1.6v1.2Zm-8-1.2A1.6 1.6 0 0 0 6.4 14h1.2c0-.22.18-.4.4-.4v-1.2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgCandle;
