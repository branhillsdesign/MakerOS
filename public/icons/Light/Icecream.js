import * as React from "react";

const SvgIcecream = ({ title, titleId, ...props }) => (
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
      d="m8.253 4.007-.033.6.033-.6ZM3 10v-.6h-.6v.6H3Zm18 0h.6v-.6H21v.6ZM4.344 8.5c0-2.199 1.545-3.9 3.656-3.9V3.4c-2.86 0-4.856 2.328-4.856 5.1h1.2Zm7.756 1c0-.798.239-1.537.649-2.154l-1-.664A5.08 5.08 0 0 0 10.9 9.5h1.2Zm.649-2.154A3.896 3.896 0 0 1 16 5.6V4.4a5.096 5.096 0 0 0-4.251 2.282l1 .664ZM4.566 9.8a3.893 3.893 0 0 1-.222-1.3h-1.2c0 .595.102 1.167.29 1.7l1.132-.4ZM4 10.6h5.171V9.4H4v1.2Zm8.124-.666A3.957 3.957 0 0 1 12.1 9.5h-1.2c0 .191.01.38.031.566l1.193-.132ZM9.17 10.6h2.357V9.4H9.17v1.2Zm2.357 0h3.3V9.4h-3.3v1.2Zm7.9-1.1c0 .147-.009.292-.024.434l1.192.132c.02-.186.032-.375.032-.566h-1.2Zm-4.6 1.1H20V9.4h-5.171v1.2ZM16 5.6c.072 0 .143.002.214.006l.065-1.199A5.171 5.171 0 0 0 16 4.4v1.2Zm.214.006c1.967.106 3.213 1.717 3.213 3.894h1.2c0-2.628-1.574-4.943-4.348-5.093l-.065 1.199ZM12 2.6c1.7 0 3.146 1.087 3.68 2.606l1.132-.398A5.102 5.102 0 0 0 12 1.4v1.2Zm-4 2c.074 0 .147.002.22.006l.066-1.198A5.17 5.17 0 0 0 8 3.4v1.2Zm.22.006a3.903 3.903 0 0 1 3.462 2.606l1.133-.397a5.103 5.103 0 0 0-4.529-3.407L8.22 4.606Zm.532-.266A3.896 3.896 0 0 1 12 2.6V1.4a5.096 5.096 0 0 0-4.246 2.274l.998.666ZM4 9.4H3v1.2h1V9.4Zm-1.6.6c0 1.583.369 3.508 1.814 5.037C5.665 16.572 8.1 17.6 12 17.6v-1.2c-3.7 0-5.765-.972-6.914-2.187C3.931 12.992 3.6 11.417 3.6 10H2.4Zm9.6 7.6c3.9 0 6.335-1.028 7.786-2.563C21.231 13.508 21.6 11.583 21.6 10h-1.2c0 1.417-.331 2.992-1.486 4.213C17.765 15.428 15.699 16.4 12 16.4v1.2Zm9-8.2h-1v1.2h1V9.4ZM11.4 17v5h1.2v-5h-1.2Zm.6 4.4H6v1.2h6v-1.2Zm0 1.2h6v-1.2h-6v1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgIcecream;