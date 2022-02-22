import * as React from "react";

const SvgShoppingCart4 = ({ title, titleId, ...props }) => (
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
      d="M8 20a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="m3.5 3 .894-.447L4.118 2H3.5v1ZM8 12l-.894.447.276.553H8v-1Zm8 0v1h.58l.288-.504L16 12Zm3.915-6.85.868.496-.869-.496ZM1 4h2.5V2H1v2Zm7 9h8v-2H8v2Zm8.868-.504 3.915-6.85-1.737-.993-3.914 6.85 1.736.993ZM2.606 3.447l1 2 1.788-.894-1-2-1.788.894ZM19.828 4H4.5v2h15.328V4ZM6.618 17H19v-2H6.618v2ZM3.606 5.447l3 6 1.788-.894-3-6-1.788.894Zm3 6 .5 1 1.788-.894-.5-1-1.788.894ZM6.618 15l1.776-3.553-1.788-.894-1.777 3.553L6.618 15Zm0 0-1.789-.894A2 2 0 0 0 6.618 17v-2Zm14.165-9.354A1.1 1.1 0 0 0 19.828 4v2a.9.9 0 0 1-.782-1.347l1.737.993Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShoppingCart4;
