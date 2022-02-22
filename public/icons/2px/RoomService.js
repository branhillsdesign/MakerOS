import * as React from "react";

const SvgRoomService = ({ title, titleId, ...props }) => (
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
      d="M19.938 14v1h1.133l-.14-1.124-.993.124ZM4.062 14l-.992-.124L2.93 15h1.132v-1ZM12 6v2a2 2 0 0 0 2-2h-2Zm0 0h-2a2 2 0 0 0 2 2V6Zm0 0V4a2 2 0 0 0-2 2h2Zm0 0h2a2 2 0 0 0-2-2v2Zm0 2a7.001 7.001 0 0 1 6.946 6.124l1.984-.248C20.377 9.436 16.59 6 12 6v2Zm-6.946 6.124A7.001 7.001 0 0 1 12 8V6c-4.59 0-8.377 3.436-8.93 7.876l1.984.248ZM19.938 13H4.062v2h15.876v-2ZM2 19h20v-2H2v2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRoomService;
