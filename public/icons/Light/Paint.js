import * as React from "react";

const SvgPaint = ({ title, titleId, ...props }) => (
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
      d="m6 20.5-.596-.066-.004.033v.033H6Zm0 .5h-.6v.6H6V21Zm1.167-11-.597-.066.597.066ZM18 20.5h.6v-.033l-.004-.033L18 20.5Zm0 .5v.6h.6V21H18Zm-.611-6 .596-.066-.596.066Zm-.818-7.364.596-.066-.596.066Zm-8.464-.838-.19-.57.19.57ZM9.9 3.1V6h1.2V3.1H9.9Zm.41 2.33-2.393.798.38 1.139 2.393-.798-.38-1.138ZM5.4 20.5v.5h1.2v-.5H5.4Zm.615-5.566-.611 5.5 1.192.132.611-5.5-1.192-.132Zm.818-7.364L6.57 9.934l1.193.132.263-2.364-1.193-.132ZM6.57 9.934l-.555 5 1.192.132.556-5-1.193-.132ZM12.9 3.1V6h1.2V3.1h-1.2Zm.41 3.47 2.393.797.38-1.139-2.393-.797-.38 1.138ZM17.4 20.5v.5h1.2v-.5h-1.2ZM6 21.6h12v-1.2H6v1.2Zm12-1.7H6v1.2h12v-1.2Zm-1.207-4.834.61 5.5 1.193-.132-.61-5.5-1.193.132Zm.596-.666H6.61v1.2H17.39v-1.2Zm-1.415-6.698.263 2.364 1.193-.132-.263-2.364-1.193.132Zm.263 2.364.556 5 1.192-.132-.555-5-1.193.132Zm.596-.666H7.167v1.2h9.666V9.4ZM10.6 3.6h2.8V2.4h-2.8v1.2Zm2.9 1.8h-3v1.2h3V5.4Zm2.203 1.967a.4.4 0 0 1 .271.335l1.193-.132a1.6 1.6 0 0 0-1.084-1.342l-.38 1.139ZM14.1 3.1a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2ZM7.917 6.228A1.6 1.6 0 0 0 6.833 7.57l1.193.132a.4.4 0 0 1 .27-.335l-.379-1.139ZM11.1 3.1a.5.5 0 0 1-.5.5V2.4a.7.7 0 0 0-.7.7h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPaint;
