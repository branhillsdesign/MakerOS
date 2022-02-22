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
      strokeWidth={1.2}
    />
    <path
      d="m12.808 12.406.447.4-.447-.4ZM9.848 9.73c0-1.255 1.027-2.174 2.182-2.174v-1.2c-1.773 0-3.381 1.413-3.381 3.374h1.2Zm2.182-2.174c1.138 0 2.121.903 2.121 2.174h1.2c0-1.945-1.531-3.374-3.321-3.374v1.2ZM14.15 9.73c0 .413-.15.68-.455.996-.165.172-.355.337-.593.55-.229.207-.487.444-.742.73l.894.8c.21-.235.428-.437.65-.637.214-.192.452-.398.656-.61.435-.453.79-1.002.79-1.829h-1.2Zm-1.79 2.276c-.285.318-.536.65-.71 1.062-.173.416-.251.875-.251 1.432h1.2c0-.443.061-.735.159-.969.099-.236.252-.452.496-.725l-.894-.8ZM11.4 15.5V17h1.2v-1.5h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFilmQuestion;
