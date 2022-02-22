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
    <path
      d="M17.4 3.6v17.8H6.6V3.6h3.5v-2h3.8v2h3.5Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="m12.588 12.781-.438-.41.438.41ZM10.6 10.925c0-.737.64-1.325 1.422-1.325V8.4C10.675 8.4 9.4 9.43 9.4 10.925h1.2ZM12.022 9.6c.765 0 1.378.572 1.378 1.325h1.2c0-1.479-1.215-2.525-2.578-2.525v1.2Zm1.378 1.325c0 .213-.072.352-.275.554-.114.113-.246.222-.422.373a6.826 6.826 0 0 0-.553.52l.875.82a5.67 5.67 0 0 1 .46-.429c.151-.13.33-.28.485-.432.334-.332.63-.76.63-1.406h-1.2Zm-1.25 1.446c-.208.221-.418.469-.56.83-.137.354-.19.765-.19 1.299h1.2c0-.466.048-.708.108-.862.057-.145.14-.256.317-.446l-.875-.82ZM11.4 15.5v1h1.2v-1h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBatteryQuestion;
