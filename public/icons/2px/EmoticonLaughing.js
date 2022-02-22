import * as React from "react";

const SvgEmoticonLaughing = ({ title, titleId, ...props }) => (
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
      d="m3.5 3 .768-.64-.768-.921-.768.92L3.5 3Zm1.953 2.825-.88.474.88-.474Zm-2.227 4.16.112-.994-.112.994ZM20 12a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10h-2Zm-8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10v-2Zm0-16a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10v2ZM5 7.421C5 8.323 4.3 9 3.5 9v2C5.462 11 7 9.368 7 7.421H5Zm-3 0c0-.117.068-.399.29-.854a11.5 11.5 0 0 1 .79-1.332 21.984 21.984 0 0 1 1.187-1.594h.001L3.5 3l-.768-.64-.003.003-.006.008a12.002 12.002 0 0 0-.109.133A23.981 23.981 0 0 0 1.42 4.118a13.457 13.457 0 0 0-.928 1.574C.245 6.199 0 6.826 0 7.42h2ZM3.5 3l-.768.64a.318.318 0 0 1 .01.013 9.599 9.599 0 0 1 .177.218c.12.151.288.367.478.624.385.52.84 1.182 1.175 1.804l1.761-.949c-.4-.744-.921-1.494-1.329-2.045a25.235 25.235 0 0 0-.734-.944h-.001V2.36h-.001L3.5 3Zm1.072 3.299c.315.584.428.964.428 1.122h2c0-.703-.344-1.472-.667-2.07l-1.76.948Zm1.608.212A7.975 7.975 0 0 1 12 4V2a9.975 9.975 0 0 0-7.275 3.138L6.18 6.511ZM4 12c0-.617.07-1.217.201-1.792l-1.95-.446C2.088 10.482 2 11.232 2 12h2Zm-.5-3a1.45 1.45 0 0 1-.162-.009l-.223 1.988c.127.014.255.021.385.021V9Zm-.162-.009C2.611 8.909 2 8.26 2 7.421H0C0 9.24 1.338 10.78 3.115 10.98l.223-1.988Z"
      fill="#555770"
    />
    <path
      d="m16.303 15 .757.652A1 1 0 0 0 16.303 14v1Zm-8.605 0v-1a1 1 0 0 0-.758 1.652L7.698 15Zm7.847-.652C14.665 15.369 13.399 16 12 16v2c2.02 0 3.826-.915 5.06-2.348l-1.515-1.304ZM12 16c-1.399 0-2.664-.63-3.544-1.652L6.94 15.652C8.174 17.087 9.98 18 12 18v-2Zm4.303-2H7.698v2h8.605v-2Z"
      fill="#555770"
    />
    <path
      d="M9 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
      stroke="#555770"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEmoticonLaughing;