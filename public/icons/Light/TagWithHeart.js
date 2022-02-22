import * as React from "react";

const SvgTagwithHeart = ({ title, titleId, ...props }) => (
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
      d="m9.543 14.2-.461.385.46-.384ZM13 17.5l-.404.444.404.368.404-.369L13 17.5Zm3.457-3.3-.46-.383.46.384ZM9.6 12.56c0-.822.643-1.459 1.4-1.459V9.9c-1.452 0-2.6 1.207-2.6 2.659h1.2ZM11 11.1c.757 0 1.4.637 1.4 1.459h1.2c0-1.452-1.148-2.659-2.6-2.659v1.2Zm-.996 2.717c-.379-.455-.404-.846-.404-1.258H8.4c0 .514.035 1.25.682 2.026l.922-.768Zm-.922.768c.286.344 1.187 1.201 1.972 1.934a185.921 185.921 0 0 0 1.413 1.307l.095.087c.011.01.02.017.025.023a.476.476 0 0 1 .008.007L13 17.5l.404-.444-.002-.001-.006-.006-.025-.022-.094-.086a188.833 188.833 0 0 1-1.404-1.298c-.816-.763-1.643-1.555-1.87-1.826l-.921.768Zm8.518-2.026c0-1.452-1.148-2.659-2.6-2.659v1.2c.757 0 1.4.637 1.4 1.459h1.2ZM15 9.9c-1.452 0-2.6 1.207-2.6 2.659h1.2c0-.822.643-1.459 1.4-1.459V9.9Zm1.918 4.684c.647-.776.682-1.51.682-2.025h-1.2c0 .412-.025.803-.404 1.258l.922.768Zm-.922-.767c-.226.27-1.053 1.063-1.87 1.826a184.43 184.43 0 0 1-1.403 1.298l-.094.086-.025.022-.006.006-.002.001.404.444.404.443c.001 0 .002 0 .002-.002a.476.476 0 0 1 .007-.005c.005-.006.014-.013.025-.023l.095-.087a181.12 181.12 0 0 0 1.413-1.306c.785-.734 1.686-1.591 1.972-1.935l-.922-.768ZM7.4 6.5a.9.9 0 0 1-.9.9v1.2a2.1 2.1 0 0 0 2.1-2.1H7.4Zm-.9.9a.9.9 0 0 1-.9-.9H4.4c0 1.16.94 2.1 2.1 2.1V7.4Zm-.9-.9a.9.9 0 0 1 .9-.9V4.4a2.1 2.1 0 0 0-2.1 2.1h1.2Zm.9-.9a.9.9 0 0 1 .9.9h1.2a2.1 2.1 0 0 0-2.1-2.1v1.2Z"
      fill="#555770"
    />
    <path
      d="M3 11.086V4a1 1 0 0 1 1-1h7.086a1 1 0 0 1 .707.293l9 9a1 1 0 0 1 0 1.414l-7.086 7.086a1 1 0 0 1-1.414 0l-9-9A1 1 0 0 1 3 11.086Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgTagwithHeart;