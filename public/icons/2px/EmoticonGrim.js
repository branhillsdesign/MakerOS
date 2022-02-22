import * as React from "react";

const SvgEmoticonGrim = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={9} stroke="#555770" strokeWidth={2} />
    <path d="M15 16H9" stroke="#555770" strokeWidth={2} />
    <mask id="Emoticon_Grim_svg__a" fill="#fff">
      <path d="M11 11c0-.044-4.5 0-4.5 0V9H11v2ZM17.5 9v2H13V9h4.5Z" />
    </mask>
    <path
      d="M6.5 11h-2v2.02L6.52 13l-.02-2Zm0-2V7h-2v2h2ZM11 9h2V7h-2v2Zm6.5 0h2V7h-2v2Zm0 2v2h2v-2h-2ZM13 11h-2v2h2v-2Zm0-2V7h-2v2h2Zm0 2c0-1.137-.873-1.656-.961-1.71a2.01 2.01 0 0 0-.473-.21c-.148-.043-.27-.06-.3-.064a2.504 2.504 0 0 0-.19-.02 5.863 5.863 0 0 0-.22-.008 30.273 30.273 0 0 0-.55-.006c-.431-.003-1.002-.001-1.566.002A492.708 492.708 0 0 0 6.481 9l.019 2 .02 2h.049l.142-.002a593.581 593.581 0 0 1 2.049-.014c.56-.003 1.115-.005 1.527-.002.208 0 .368.002.471.005l.065.002a.92.92 0 0 1-.03-.003c-.012 0-.044-.004-.085-.01a1.99 1.99 0 0 1-1.26-.716A2 2 0 0 1 9 11h4Zm-4.5 0V9h-4v2h4Zm-2 0H11V7H6.5v4ZM11 9H9V11h4V9h-2Zm4.5 0v2h4V9h-4Zm2 0H13v4h4.5V9ZM15 11V9h-4v2h4Zm-2 0h4.5V7H13v4Z"
      fill="#555770"
      mask="url(#Emoticon_Grim_svg__a)"
    />
  </svg>
);

export default SvgEmoticonGrim;
