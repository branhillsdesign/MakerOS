import * as React from "react";

const SvgBagofCash = ({ title, titleId, ...props }) => (
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
      d="M6.418 2V1H4.935l.557 1.375L6.418 2Zm11.163 0 .928.375L19.065 1h-1.484v1ZM5.368 9.524l-.826-.563-.002.003.828.56Zm13.27.01.83-.559-.003-.004-.827.563ZM17.088 6l.986-.171-.986.171ZM19 14a7 7 0 0 1-7 7v2a9 9 0 0 0 9-9h-2Zm-7 7a7 7 0 0 1-7-7H3a9 9 0 0 0 9 9v-2ZM5.492 2.375C5.819 3.185 6 4.07 6 5h2a8.977 8.977 0 0 0-.655-3.375l-1.853.75ZM18 5c0-.93.18-1.816.509-2.625l-1.854-.75A8.976 8.976 0 0 0 16 5h2ZM6.418 3h11.163V1H6.418v2ZM5 14c0-1.452.441-2.799 1.197-3.916L4.54 8.964A8.963 8.963 0 0 0 3 14h2Zm12.81-3.907A6.963 6.963 0 0 1 19 14h2c0-1.86-.565-3.59-1.532-5.025l-1.659 1.118ZM6 5c0 .276-.025.553-.073.83l1.97.34C7.964 5.79 8 5.4 8 5H6Zm-.073.83C5.737 6.929 5.197 8 4.542 8.96l1.653 1.126C6.935 9.002 7.64 7.66 7.898 6.17l-1.971-.34Zm13.538 3.14c-.655-.96-1.2-2.04-1.391-3.141l-1.97.342c.258 1.491.969 2.841 1.708 3.926l1.653-1.126ZM18.074 5.83A4.836 4.836 0 0 1 18 5h-2c0 .4.037.79.103 1.171l1.97-.342ZM6.912 7h10.176V5H6.912v2ZM12.242 13.03c-.458-.115-.809-.268-1.024-.433-.19-.146-.218-.249-.218-.347H9c0 .868.449 1.51.999 1.932.523.403 1.172.642 1.758.788l.486-1.94ZM11 12.25c0-.293.318-.75 1-.75v-2c-1.527 0-3 1.11-3 2.75h2Zm1-.75c.682 0 1 .457 1 .75h2c0-1.64-1.473-2.75-3-2.75v2Zm1 4.25c0 .293-.318.75-1 .75v2c1.527 0 3-1.11 3-2.75h-2Zm-1 .75c-.682 0-1-.457-1-.75H9c0 1.64 1.473 2.75 3 2.75v-2Zm-.242-1.53c.431.108.786.26 1.011.432.206.156.231.264.231.348h2c0-.883-.475-1.525-1.02-1.94-.524-.4-1.17-.638-1.738-.78l-.485 1.94ZM13 10.5V9h-2v1.5h2Zm-2 7V19h2v-1.5h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBagofCash;