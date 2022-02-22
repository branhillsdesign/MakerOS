import * as React from "react";

const SvgBatteryQuestion = ({ title, titleId, ...props }) => (
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
    <path d="M11 4h6v17H7V4h4Z" stroke="#555770" strokeWidth={2} />
    <path
      d="m12.588 12.781-.73-.683.73.683ZM11 10.925c0-.485.427-.925 1.022-.925V8C10.488 8 9 9.177 9 10.925h2ZM12.022 10c.566 0 .978.413.978.925h2C15 9.205 13.585 8 12.022 8v2Zm.978.925c0 .068.003.112-.157.27-.1.1-.216.196-.4.354-.17.145-.377.327-.585.549l1.46 1.367c.13-.139.268-.263.427-.398.144-.124.34-.286.507-.452.377-.375.748-.899.748-1.69h-2Zm-1.142 1.173a3.46 3.46 0 0 0-.62.926c-.13.29-.238.638-.238.976h2c0 .037-.005.04.005 0a.96.96 0 0 1 .055-.15c.058-.127.146-.266.257-.385l-1.46-1.367ZM11 15v1.5h2V15h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBatteryQuestion;
