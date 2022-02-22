import * as React from "react";

const SvgRestaurant = ({ title, titleId, ...props }) => (
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
      d="M20 3h.6v-.6H20V3Zm-3 10h-.6v.6h.6V13Zm1.5-9.56.326.503-.326-.504ZM3.4 2v7h1.2V2H3.4Zm9.2 7V2h-1.2v7h1.2ZM7.4 2v9h1.2V2H7.4Zm-4 7c0 .733.38 1.418 1.166 1.89.757.454 1.882.71 3.434.71v-1.2c-1.448 0-2.323-.244-2.816-.54C4.719 9.582 4.6 9.268 4.6 9H3.4ZM8 11.6c1.552 0 2.677-.256 3.434-.71.785-.472 1.166-1.157 1.166-1.89h-1.2c0 .267-.12.582-.584.86-.493.296-1.368.54-2.816.54v1.2Zm-.6-.6v11h1.2V11H7.4Zm13.2 11v-9h-1.2v9h1.2Zm0-9V3h-1.2v10h1.2Zm-3 0V6h-1.2v7h1.2Zm2.4-.6h-1.5v1.2H20v-1.2Zm-1.5 0H17v1.2h1.5v-1.2ZM17.6 6c0-.233.089-.615.305-1.022.212-.4.523-.778.92-1.035l-.65-1.008a3.983 3.983 0 0 0-1.33 1.48C16.561 4.95 16.4 5.526 16.4 6h1.2Zm1.226-2.057c.324-.21.712-.343 1.174-.343V2.4c-.71 0-1.321.21-1.826.535l.652 1.008Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRestaurant;
