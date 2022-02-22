import * as React from "react";

const SvgShoppingCart01 = ({ title, titleId, ...props }) => (
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
      d="M8.4 20a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Zm10 0a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="m3.5 3 .537-.268L3.87 2.4H3.5V3ZM8 12l-.537.268.166.332H8V12Zm8 0v.6h.348l.173-.302L16 12Zm3.915-6.85.52.297-.52-.297ZM1 3.6h2.5V2.4H1v1.2Zm7 9h8v-1.2H8v1.2Zm8.52-.302 3.916-6.85-1.042-.596-3.915 6.85 1.042.596ZM2.964 3.268l1 2 1.074-.536-1-2-1.074.536ZM19.828 4.4H4.5v1.2h15.328V4.4ZM6.618 16.6H19v-1.2H6.618v1.2ZM3.963 5.268l3 6 1.074-.536-3-6-1.074.536Zm3 6 .5 1 1.074-.536-.5-1-1.074.536Zm-.703 3.553 1.777-3.553-1.074-.536-1.776 3.553 1.073.536Zm.358.579a.4.4 0 0 1-.358-.579l-1.073-.537A1.6 1.6 0 0 0 6.618 16.6v-1.2Zm13.817-9.953a.7.7 0 0 0-.607-1.047v1.2a.5.5 0 0 1-.434-.748l1.042.595Z"
      fill="#555770"
    />
  </svg>
);

export default SvgShoppingCart01;
