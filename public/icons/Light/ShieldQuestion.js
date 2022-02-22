import * as React from "react";

const SvgShieldQuestion = ({ title, titleId, ...props }) => (
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
    <mask id="Shield_Question_svg__a" fill="#fff">
      <path d="M4 6.82a1 1 0 0 1 .804-.98l.036-.008a14.013 14.013 0 0 0 6.428-3.15 1.122 1.122 0 0 1 1.464 0 14.013 14.013 0 0 0 6.428 3.15l.036.007a1 1 0 0 1 .804.98v3.949c0 5.304-3.14 10.106-8 12.232-4.86-2.126-8-6.928-8-12.232V6.82Z" />
    </mask>
    <path
      d="m12 23-.481 1.1.481.21.481-.21L12 23Zm7.16-17.168.236-1.177-.236 1.177Zm-14.32 0-.236-1.177.236 1.177Zm7.892-3.15-.786.906.786-.907ZM4.804 5.838l-.235-1.176.235 1.176Zm13.996.98v3.949h2.4V6.82h-2.4ZM5.2 10.769V6.82H2.8v3.948h2.4Zm-2.4 0a14.552 14.552 0 0 0 8.719 13.331l.962-2.198A12.152 12.152 0 0 1 5.2 10.768H2.8Zm16 0c0 4.828-2.858 9.197-7.281 11.133l.962 2.198A14.552 14.552 0 0 0 21.2 10.768h-2.4ZM5.04 7.016l.035-.007-.47-2.354-.036.008.47 2.353Zm13.885-.007.036.007.47-2.353-.035-.008-.471 2.354Zm-6.98-3.42a15.212 15.212 0 0 0 6.98 3.42l.47-2.354a12.813 12.813 0 0 1-5.877-2.88l-1.572 1.813Zm-6.87 3.42c2.59-.518 4.993-1.7 6.98-3.42l-1.573-1.815a12.813 12.813 0 0 1-5.878 2.881l.471 2.354Zm16.125-.19a2.2 2.2 0 0 0-1.768-2.156l-.471 2.353a.2.2 0 0 1-.161-.196h2.4Zm-7.682-5.045a2.323 2.323 0 0 0-3.036 0l1.572 1.814A.085.085 0 0 1 12 3.61a.085.085 0 0 1-.054-.022l1.572-1.814ZM5.2 6.82a.2.2 0 0 1-.16.196l-.471-2.353A2.2 2.2 0 0 0 2.8 6.82h2.4Z"
      fill="#555770"
      mask="url(#Shield_Question_svg__a)"
    />
    <path
      d="m12.81 13.403-.444-.402.444.402Zm-2.969-2.652c0-1.236 1.023-2.151 2.189-2.151V7.4c-1.77 0-3.389 1.396-3.389 3.35h1.2ZM12.03 8.6c1.149 0 2.129.899 2.129 2.15h1.2a3.316 3.316 0 0 0-3.33-3.35v1.2Zm2.129 2.15c0 .405-.15.669-.454.982-.166.17-.357.334-.595.545-.23.205-.488.44-.744.724l.89.805c.21-.233.428-.433.651-.631.215-.19.453-.396.658-.606.436-.448.794-.995.794-1.818h-1.2ZM12.366 13c-.334.37-.563.821-.709 1.223-.144.395-.227.799-.227 1.096h1.2c0-.113.041-.373.155-.687.111-.307.273-.608.47-.826l-.89-.805Zm-.936 3.335v1.667h1.2v-1.667h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShieldQuestion;