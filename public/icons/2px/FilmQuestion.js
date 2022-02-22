import * as React from "react";

const SvgFilmQuestion = ({ title, titleId, ...props }) => (
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
      d="M2 1v3m0 19v-3M22 1v3m0 19v-3M2 4h4M2 4v4m4-4V2h12v2M6 4v4M2 8h4M2 8v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m0 0v2h12v-2m0-16h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4m-4 0v4m4-4v4m-4 0h4"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m12.808 12.406.746.666-.746-.666ZM10.25 9.73c0-1.02.832-1.774 1.781-1.774v-2c-1.979 0-3.781 1.577-3.781 3.774h2Zm1.781-1.774c.921 0 1.721.727 1.721 1.774h2c0-2.17-1.714-3.774-3.721-3.774v2Zm1.721 1.774c0 .275-.082.448-.343.719-.152.158-.326.31-.572.53a9.75 9.75 0 0 0-.773.76l1.49 1.333c.196-.218.4-.408.62-.605.206-.185.459-.405.676-.631.479-.498.902-1.142.902-2.106h-2Zm-1.688 2.009C11.473 12.399 11 13.22 11 14h2c0 .001.005-.093.1-.284.09-.18.238-.403.454-.644l-1.491-1.333ZM11 15.015l.03 2.043 2-.029-.03-2.044-2 .03Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFilmQuestion;
