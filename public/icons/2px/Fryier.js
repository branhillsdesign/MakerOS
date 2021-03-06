import * as React from "react";

const SvgFryier = ({ title, titleId, ...props }) => (
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
      d="m14.17 2 .707-.707-.708-.707-.707.707.707.707ZM22 9.83l.707.708.707-.707-.707-.708-.707.708Zm-11.034 3.204.707-.707-.707.707ZM.793 21.793a1 1 0 1 0 1.414 1.414L.793 21.793Zm8.38-10.553.706-.707-.707.707Zm3.587 3.588-.707.707.707-.707Zm1.77-9.62L10.26 9.48l1.414 1.415 4.271-4.272-1.414-1.414Zm2.848 2.848-4.271 4.27 1.414 1.415 4.27-4.271-1.413-1.414Zm-3.916-5.349 7.83 7.83 1.415-1.414-7.83-7.83-1.415 1.414Zm7.83 6.416-4.996 4.998 1.414 1.414 4.997-4.997-1.414-1.415ZM9.88 7.704l4.998-4.997-1.415-1.414L8.465 6.29 9.88 7.704Zm.38 4.623L.793 21.793l1.414 1.414 9.466-9.466-1.414-1.414Zm3.208 1.794-1.794-1.794-1.414 1.414 1.794 1.794 1.414-1.414Zm-1.794-1.794L9.88 10.533l-1.414 1.414 1.794 1.794 1.414-1.414ZM8.465 6.29a4 4 0 0 0 0 5.657l1.414-1.414a2 2 0 0 1 0-2.829L8.465 6.29Zm7.83 7.83a2 2 0 0 1-2.828 0l-1.414 1.415a4 4 0 0 0 5.657 0l-1.414-1.414Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFryier;
