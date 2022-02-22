import * as React from "react";

const SvgSignalQuestion = ({ title, titleId, ...props }) => (
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
      d="m20.57 17.403-.446-.402.445.402Zm-2.97-2.652c0-1.236 1.023-2.151 2.189-2.151v-1.2c-1.77 0-3.389 1.396-3.389 3.35h1.2Zm2.189-2.151c1.149 0 2.129.899 2.129 2.15h1.2a3.316 3.316 0 0 0-3.33-3.35v1.2Zm2.129 2.15c0 .405-.15.669-.454.982-.166.17-.357.334-.595.545-.23.205-.488.44-.745.723l.89.805c.21-.232.43-.433.652-.63.215-.19.453-.396.657-.606.436-.448.795-.995.795-1.818h-1.2ZM20.124 17c-.64.708-.935 1.51-.935 2.56h1.2c0-.781.203-1.288.625-1.755l-.89-.805Zm-.935 3.543v1.459h1.2v-1.459h-1.2Z"
      fill="#555770"
    />
    <mask
      id="Signal_Question_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <path d="M16 0H0v24h15V9.5h9V0h-8Z" fill="#fff" />
    </mask>
    <g mask="url(#Signal_Question_svg__a)">
      <path
        d="M21.4 19.4H3.632L21.4 4.297V19.4Z"
        stroke="#555770"
        strokeWidth={1.2}
      />
      <path d="M2 20 16.118 8v12H2Z" fill="#555770" />
    </g>
  </svg>
);

export default SvgSignalQuestion;
