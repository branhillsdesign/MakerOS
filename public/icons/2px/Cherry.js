import * as React from "react";

const SvgCherry = ({ title, titleId, ...props }) => (
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
      d="m16.606 8.279-.259-.966.26.966ZM11 6.675l-.975-.224-.119.517.362.389.732-.682Zm4.053-4.192-.259-.966.26.966Zm5.606 1.604.975.224.119-.517-.362-.389-.732.682ZM8 17.5A2.5 2.5 0 0 1 5.5 20v2a4.5 4.5 0 0 0 4.5-4.5H8ZM5.5 20A2.5 2.5 0 0 1 3 17.5H1A4.5 4.5 0 0 0 5.5 22v-2ZM3 17.5A2.5 2.5 0 0 1 5.5 15v-2A4.5 4.5 0 0 0 1 17.5h2ZM5.5 15A2.5 2.5 0 0 1 8 17.5h2A4.5 4.5 0 0 0 5.5 13v2ZM21 17.5a2.5 2.5 0 0 1-2.5 2.5v2a4.5 4.5 0 0 0 4.5-4.5h-2ZM18.5 20a2.5 2.5 0 0 1-2.5-2.5h-2a4.5 4.5 0 0 0 4.5 4.5v-2ZM16 17.5a2.5 2.5 0 0 1 2.5-2.5v-2a4.5 4.5 0 0 0-4.5 4.5h2Zm2.5-2.5a2.5 2.5 0 0 1 2.5 2.5h2a4.5 4.5 0 0 0-4.5-4.5v2Zm-12-1c0-1.614 1.19-4.664 4.664-7.753L9.836 4.753C6.11 8.063 4.5 11.614 4.5 14h2Zm3.058-8.164c.909 2.544 3.435 6.528 8.495 9.058l.894-1.789c-4.54-2.27-6.747-5.818-7.505-7.941l-1.884.672ZM11.5 5.5V3h-2v2.5h2Zm4.847 1.813a4.655 4.655 0 0 1-4.615-1.32l-1.464 1.364a6.655 6.655 0 0 0 6.597 1.888l-.518-1.932ZM11.974 6.9a4.655 4.655 0 0 1 3.338-3.45l-.518-1.933a6.655 6.655 0 0 0-4.769 4.934l1.95.449Zm7.71-3.038a4.655 4.655 0 0 1-3.337 3.45l.518 1.933a6.655 6.655 0 0 0 4.769-4.934l-1.95-.449Zm-4.372-.413a4.655 4.655 0 0 1 4.616 1.32l1.463-1.364a6.655 6.655 0 0 0-6.597-1.888l.518 1.932Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCherry;
