import * as React from "react";

const SvgSalt = ({ title, titleId, ...props }) => (
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
      d="m18.837 19.849.598-.046-.598.046ZM5.664 9.669l.538-.267-.538.267ZM18.1 5.924H5.9v1.2h12.2v-1.2Zm-12.737.333-.236.473 1.075.535.235-.474-1.074-.534Zm-.236 3.68.236.473 1.074-.534-.235-.474-1.075.535ZM17.563 6.79l.235.474 1.075-.535-.236-.473-1.074.534Zm.235 2.611-.235.474 1.074.534.236-.474-1.075-.534Zm.302.14H5.9v1.2h12.2v-1.2Zm-12.798.555-.737 9.706 1.197.091.736-9.706-1.196-.09ZM7.158 22.6h9.684v-1.2H7.158v1.2Zm12.277-2.797-.737-9.706-1.196.091.736 9.706 1.197-.09ZM14.5 12.4h-3v1.2h3v-1.2Zm-3 4.2h1v-1.2h-1v1.2Zm1 1.8h-3v1.2h3v-1.2ZM6.496 6.59c.125-1.121.793-2.151 1.848-2.891l-.688-.983c-1.284.9-2.183 2.217-2.352 3.742l1.192.132Zm1.848-2.891a5.855 5.855 0 0 1 1.361-.703l-.41-1.128a7.055 7.055 0 0 0-1.64.848l.69.983Zm1.361-.703A6.719 6.719 0 0 1 12 2.6V1.4c-.96 0-1.875.166-2.705.468l.41 1.128Zm-1.946.761c.303.133.825.281 1.324.157.27-.068.544-.22.743-.5.193-.273.274-.612.274-.982H8.9c0 .202-.044.275-.054.289-.005.006-.012.018-.054.028a.647.647 0 0 1-.25-.001 1.315 1.315 0 0 1-.301-.09l-.482 1.1ZM12 2.6a6.72 6.72 0 0 1 2.295.396l.41-1.128A7.919 7.919 0 0 0 12 1.4v1.2Zm2.295.396c.5.182.957.42 1.36.703l.69-.983a7.054 7.054 0 0 0-1.64-.848l-.41 1.128Zm1.36.703c1.056.74 1.724 1.77 1.849 2.891l1.192-.132c-.169-1.525-1.068-2.841-2.352-3.742l-.688.983ZM13.9 2.432c0 .324.092.865.498 1.231.476.429 1.14.426 1.858.087l-.512-1.085c-.244.115-.39.133-.462.13-.059-.002-.074-.017-.08-.023a.288.288 0 0 1-.067-.121.722.722 0 0 1-.035-.219h-1.2ZM13.4 17.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1h-1.2Zm-.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Zm-3.1-2.1c0 1.16.94 2.1 2.1 2.1v-1.2a.9.9 0 0 1-.9-.9H9.4Zm-4.835 5.303A2.6 2.6 0 0 0 7.158 22.6v-1.2a1.4 1.4 0 0 1-1.396-1.506l-1.197-.09ZM11.5 12.4a2.1 2.1 0 0 0-2.1 2.1h1.2a.9.9 0 0 1 .9-.9v-1.2Zm6.298-5.135a2.4 2.4 0 0 1 0 2.137l1.075.534a3.6 3.6 0 0 0 0-3.206l-1.075.535ZM16.842 22.6a2.6 2.6 0 0 0 2.593-2.797l-1.197.091a1.4 1.4 0 0 1-1.396 1.506v1.2ZM5.127 6.73a3.6 3.6 0 0 0 0 3.207l1.075-.535a2.4 2.4 0 0 1 0-2.137L5.127 6.73Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSalt;