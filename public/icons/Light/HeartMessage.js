import * as React from "react";

const SvgHeartMessage = ({ title, titleId, ...props }) => (
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
      d="m6.75 17-.375-.468.165-.132h.21v.6Zm-3.588 2.87.375.468-.375-.468ZM4 3.4h16v1.2H4V3.4ZM21.6 5v11h-1.2V5h1.2ZM2.4 16V5h1.2v11H2.4Zm0 3.792V16h1.2v3.792H2.4Zm4.725-2.324-3.588 2.87-.75-.937 3.588-2.87.75.938ZM6.75 16.4H20v1.2H6.75v-1.2ZM3.6 19.792a.5.5 0 0 0-.812-.39l.75.936a.7.7 0 0 1-1.138-.546h1.2ZM20 3.4A1.6 1.6 0 0 1 21.6 5h-1.2a.4.4 0 0 0-.4-.4V3.4ZM4 4.6a.4.4 0 0 0-.4.4H2.4A1.6 1.6 0 0 1 4 3.4v1.2ZM21.6 16a1.6 1.6 0 0 1-1.6 1.6v-1.2a.4.4 0 0 0 .4-.4h1.2ZM8.543 10.7l.46-.383-.46.384ZM12 14l-.404.444.404.368.404-.368L12 14Zm3.457-3.3-.46-.383.46.384ZM8.6 9.06c0-.822.643-1.459 1.4-1.459V6.4c-1.452 0-2.6 1.207-2.6 2.659h1.2ZM10 7.6c.757 0 1.4.637 1.4 1.459h1.2C12.6 7.607 11.452 6.4 10 6.4v1.2Zm-.996 2.717C8.625 9.862 8.6 9.47 8.6 9.059H7.4c0 .514.035 1.25.682 2.026l.922-.768Zm-.922.768c.286.344 1.187 1.201 1.972 1.934a185.921 185.921 0 0 0 1.413 1.307l.095.087c.011.01.02.017.025.023a.476.476 0 0 1 .008.007L12 14l.404-.444-.002-.001-.006-.006-.025-.022-.094-.086a188.833 188.833 0 0 1-1.404-1.298c-.816-.763-1.643-1.555-1.87-1.826l-.921.768ZM16.6 9.059C16.6 7.607 15.452 6.4 14 6.4v1.2c.757 0 1.4.637 1.4 1.459h1.2ZM14 6.4c-1.452 0-2.6 1.207-2.6 2.659h1.2c0-.822.643-1.459 1.4-1.459V6.4Zm1.918 4.684c.647-.776.682-1.51.682-2.025h-1.2c0 .412-.025.803-.404 1.258l.922.768Zm-.922-.767c-.226.27-1.053 1.063-1.87 1.826a184.43 184.43 0 0 1-1.403 1.298l-.094.086-.025.022-.006.006-.002.001L12 14l.404.443c.001 0 .002 0 .002-.002a.476.476 0 0 1 .007-.005c.005-.006.014-.013.025-.023l.095-.087a181.12 181.12 0 0 0 1.413-1.306c.785-.734 1.686-1.591 1.972-1.935l-.922-.768Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHeartMessage;