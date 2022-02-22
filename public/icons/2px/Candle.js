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
        d="m12.2 2 .966-.258-.445-1.67-1.226 1.219L12.2 2ZM7 24H6v2.414l1.707-1.707L7 24Zm6.4-17.188C13.4 7.463 12.868 8 12.2 8v2c1.762 0 3.2-1.422 3.2-3.188h-2ZM12.2 8c-.668 0-1.2-.537-1.2-1.188H9A3.194 3.194 0 0 0 12.2 10V8ZM11 6.812c0-.413.165-1.145.523-1.969.35-.81.838-1.592 1.382-2.134l-1.41-1.418c-.775.77-1.389 1.79-1.807 2.757C9.275 4.999 9 6.018 9 6.812h2Zm.234-4.554c.447 1.675 1.08 2.543 1.565 3.193.444.592.601.812.601 1.362h2c0-1.264-.543-1.95-1-2.56-.414-.554-.88-1.186-1.234-2.51l-1.932.515ZM8 14h4v-2H8v2Zm4 0h4v-2h-4v2ZM8 24v-6H6v6h2Zm0-6v-4H6v4h2Zm3.293-5.707-5 5 1.414 1.414 5-5-1.414-1.414ZM7.707 24.707l10-10-1.414-1.414-10 10 1.414 1.414ZM16 14v6h2v-6h-2Zm0 6v4h2v-4h-2Zm.293-.707-5.5 5.5 1.414 1.414 5.5-5.5-1.414-1.414ZM16 14h2a2 2 0 0 0-2-2v2Zm-8-2a2 2 0 0 0-2 2h2v-2Z"
        fill="#555770"
      />
    </g>
  </svg>
);

export default SvgCandle;
