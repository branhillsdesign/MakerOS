import * as React from "react";

const SvgAudioJacks = ({ title, titleId, ...props }) => (
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
    <mask id="Audio_Jacks_svg__a" fill="#fff">
      <path d="m5 3 1-1 1 1v4h1v11l-1 1v3H5v-3l-1-1V7h1V3ZM11 3l1-1 1 1v4h1v11l-1 1v3h-2v-3l-1-1V7h1V3ZM17 3l1-1 1 1v4h1v11l-1 1v3h-2v-3l-1-1V7h1V3Z" />
    </mask>
    <path
      d="M6 2 7.414.586 6-.828 4.586.586 6 2ZM5 3 3.586 1.586 3 2.172V3h2Zm0 4v2h2V7H5ZM4 7V5H2v2h2Zm0 11H2v.828l.586.586L4 18Zm1 1h2v-.828l-.586-.586L5 19Zm0 3H3v2h2v-2Zm2 0v2h2v-2H7Zm0-3-1.414-1.414-.586.586V19h2Zm1-1 1.414 1.414.586-.586V18H8ZM8 7h2V5H8v2ZM7 7H5v2h2V7Zm0-4h2v-.828l-.586-.586L7 3Zm5-1L13.414.586 12-.828 10.586.586 12 2Zm-1 1L9.586 1.586 9 2.172V3h2Zm0 4v2h2V7h-2Zm-1 0V5H8v2h2Zm0 11H8v.828l.586.586L10 18Zm1 1h2v-.828l-.586-.586L11 19Zm0 3H9v2h2v-2Zm2 0v2h2v-2h-2Zm0-3-1.414-1.414-.586.586V19h2Zm1-1 1.414 1.414.586-.586V18h-2Zm0-11h2V5h-2v2Zm-1 0h-2v2h2V7Zm0-4h2v-.828l-.586-.586L13 3Zm5-1L19.414.586 18-.828 16.586.586 18 2Zm-1 1-1.414-1.414-.586.586V3h2Zm0 4v2h2V7h-2Zm-1 0V5h-2v2h2Zm0 11h-2v.828l.586.586L16 18Zm1 1h2v-.828l-.586-.586L17 19Zm0 3h-2v2h2v-2Zm2 0v2h2v-2h-2Zm0-3-1.414-1.414-.586.586V19h2Zm1-1 1.414 1.414.586-.586V18h-2Zm0-11h2V5h-2v2Zm-1 0h-2v2h2V7Zm0-4h2v-.828l-.586-.586L19 3ZM4.586.586l-1 1 2.828 2.828 1-1L4.586.586ZM3 3v4h4V3H3Zm2 2H4v4h1V5ZM2 7v11h4V7H2Zm.586 12.414 1 1 2.828-2.828-1-1-2.828 2.828ZM3 19v3h4v-3H3Zm6 3v-3H5v3h4Zm-.586-1.586 1-1-2.828-2.828-1 1 2.828 2.828ZM10 18V7H6v11h4ZM8 5H7v4h1V5Zm1 2V3H5v4h4Zm-.586-5.414-1-1-2.828 2.828 1 1 2.828-2.828Zm2.172-1-1 1 2.828 2.828 1-1L10.586.586ZM9 3v4h4V3H9Zm2 2h-1v4h1V5ZM8 7v11h4V7H8Zm.586 12.414 1 1 2.828-2.828-1-1-2.828 2.828ZM9 19v3h4v-3H9Zm6 3v-3h-4v3h4Zm-.586-1.586 1-1-2.828-2.828-1 1 2.828 2.828ZM16 18V7h-4v11h4ZM14 5h-1v4h1V5Zm1 2V3h-4v4h4Zm-.586-5.414-1-1-2.828 2.828 1 1 2.828-2.828Zm2.172-1-1 1 2.828 2.828 1-1L16.586.586ZM15 3v4h4V3h-4Zm2 2h-1v4h1V5Zm-3 2v11h4V7h-4Zm.586 12.414 1 1 2.828-2.828-1-1-2.828 2.828ZM15 19v3h4v-3h-4Zm6 3v-3h-4v3h4Zm-.586-1.586 1-1-2.828-2.828-1 1 2.828 2.828ZM22 18V7h-4v11h4ZM20 5h-1v4h1V5Zm1 2V3h-4v4h4Zm-.586-5.414-1-1-2.828 2.828 1 1 2.828-2.828ZM5 24h2v-4H5v4Zm6 0h2v-4h-2v4Zm6 0h2v-4h-2v4Z"
      fill="#555770"
      mask="url(#Audio_Jacks_svg__a)"
    />
  </svg>
);

export default SvgAudioJacks;
