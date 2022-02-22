import * as React from "react";

const SvgDrum = ({ title, titleId, ...props }) => (
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
      d="m16 20.688.163.987-.163-.987ZM9.521 8.122a1 1 0 1 0 .958 1.756L9.52 8.122ZM21.48 3.878a1 1 0 1 0-.958-1.756l.958 1.756ZM20 9l-.003.015a.288.288 0 0 1-.032.066c-.043.07-.13.174-.291.301-.33.26-.87.539-1.626.79-1.502.501-3.64.828-6.048.828v2c2.563 0 4.925-.345 6.68-.93.873-.29 1.651-.66 2.232-1.117C21.482 10.504 22 9.852 22 9h-2Zm-8 2c-2.408 0-4.546-.327-6.048-.827-.756-.252-1.296-.53-1.626-.79a1.236 1.236 0 0 1-.29-.302.296.296 0 0 1-.033-.066L4 9H2c0 .852.519 1.504 1.088 1.953.581.458 1.36.826 2.232 1.117 1.755.585 4.117.93 6.68.93v-2ZM4 9l.003-.015a.296.296 0 0 1 .032-.066c.043-.07.13-.174.291-.301.33-.26.87-.539 1.626-.79C7.454 7.326 9.592 7 12 7V5c-2.563 0-4.925.345-6.68.93-.873.29-1.651.66-2.232 1.117C2.518 7.496 2 8.148 2 9h2Zm8-2c2.408 0 4.546.327 6.048.827.756.252 1.296.53 1.626.79.162.128.248.232.29.302.021.033.03.055.033.066L20 9h2c0-.852-.519-1.504-1.088-1.953-.581-.458-1.36-.826-2.232-1.117C16.925 5.345 14.563 5 12 5v2ZM2 9v9h2V9H2Zm18 0v9h2V9h-2Zm-8 11c-1.386 0-2.69-.108-3.837-.298l-.326 1.973C9.1 21.884 10.513 22 12 22v-2Zm-3.837-.298c-1.422-.236-2.558-.59-3.308-.985-.376-.198-.61-.383-.74-.53a.603.603 0 0 1-.104-.152A.153.153 0 0 1 4 18H2c0 1.197.998 2 1.923 2.486 1.008.532 2.373.933 3.914 1.189l.326-1.973Zm2.929-8.12-4 8.688 1.816.836 4-8.688-1.816-.836ZM20 18l-.001.008a.158.158 0 0 1-.01.027.607.607 0 0 1-.103.151c-.13.148-.365.333-.74.531-.751.395-1.887.749-3.31.985l.327 1.973c1.541-.256 2.906-.657 3.914-1.189C21.002 20 22 19.197 22 18h-2Zm-4.163 1.702c-1.147.19-2.45.298-3.837.298v2c1.487 0 2.9-.116 4.163-.325l-.326-1.973Zm-4.745-7.284 4 8.688 1.816-.836-4-8.688-1.816.836Zm5.827 8.663 5-11.688-1.838-.786-5 11.688 1.838.786Zm-8-.786-5-11.688-1.838.786 5 11.688 1.838-.786Zm1.56-10.417 11-6-.958-1.756-11 6 .958 1.756Z"
      fill="#555770"
    />
  </svg>
);

export default SvgDrum;