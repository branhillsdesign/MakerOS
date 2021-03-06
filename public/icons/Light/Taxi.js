import * as React from "react";

const SvgTaxi = ({ title, titleId, ...props }) => (
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
      d="m4 12-.57-.19-.03.093V12H4Zm1 6v-.6h-.6v.6H5Zm15-6h.6v-.097l-.03-.093L20 12Zm-1 6h.6v-.6H19v.6Zm.667-7 .569-.19-.57.19ZM10 4v-.6h-.6V4h.6Zm4 0h.6v-.6H14V4Zm4.114 2.342-.57.19.57-.19Zm-12.228 0-.57-.19.57.19ZM3.4 12v7.8h1.2V12H3.4Zm.8 8.6h.6v-1.2h-.6v1.2Zm1.4-.8V18H4.4v1.8h1.2ZM5.317 6.152 3.764 10.81l1.139.38 1.552-4.658-1.138-.38ZM3.764 10.81l-.333 1 1.138.38.334-1-1.139-.38ZM19.4 12v7.8h1.2V12h-1.2Zm.4 7.4h-.6v1.2h.6v-1.2Zm-.2.4V18h-1.2v1.8h1.2ZM17.545 6.532l1.552 4.658 1.139-.38-1.553-4.658-1.138.38Zm1.552 4.658.334 1 1.138-.38-.333-1-1.139.38ZM5 18.6h14v-1.2H5v1.2Zm-.667-7h15.334v-1.2H4.333v1.2Zm2.027-5H10V5.4H6.36v1.2ZM10.6 6V4H9.4v2h1.2ZM10 4.6h4V3.4h-4v1.2Zm0 2h4V5.4h-4v1.2Zm4 0h3.64V5.4H14v1.2ZM13.4 4v2h1.2V4h-1.2Zm5.8 15.4c.22 0 .4.18.4.4h-1.2a.8.8 0 0 0 .8.8v-1.2Zm-.517-13.248A1.1 1.1 0 0 0 17.64 5.4v1.2a.1.1 0 0 1-.095-.068l1.138-.38ZM19.4 19.8c0-.22.18-.4.4-.4v1.2a.8.8 0 0 0 .8-.8h-1.2Zm-14.6.8a.8.8 0 0 0 .8-.8H4.4c0-.22.18-.4.4-.4v1.2Zm-1.4-.8a.8.8 0 0 0 .8.8v-1.2c.22 0 .4.18.4.4H3.4ZM6.455 6.532a.1.1 0 0 1-.095.068V5.4a1.1 1.1 0 0 0-1.043.752l1.138.38ZM9 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      fill="#555770"
    />
  </svg>
);

export default SvgTaxi;
