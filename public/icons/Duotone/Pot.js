import * as React from "react";

const SvgPot = ({ title, titleId, ...props }) => (
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
      d="m5.247 6.251-.317-.949.317.95Zm13.506 0 .317-.949-.317.95ZM20.9 9V8v1Zm.097-.1.999-.056-.999.056ZM3.1 9v1-1Zm-.097-.1-.999-.056.999.056ZM20.9 8H3.1v2h17.8V8Zm1.096.844c-.049-.858-.483-1.636-.995-2.218-.517-.587-1.205-1.082-1.931-1.324L18.437 7.2c.338.112.74.38 1.063.747.328.373.484.743.499 1.01l1.997-.113ZM4 8.956c.015-.266.171-.636.5-1.009.323-.367.724-.635 1.062-.747L4.93 5.302C4.204 5.545 3.516 6.04 3 6.626c-.512.582-.946 1.36-.995 2.218l1.997.112ZM5.563 7.2c1.17-.39 2.368-.671 3.577-.843l-.28-1.98a22.354 22.354 0 0 0-3.93.925L5.563 7.2ZM12 1.5c-1.194 0-2.226.35-2.96 1.089C8.31 3.325 8 4.32 8 5.367h2c0-.66.19-1.098.46-1.369.266-.268.733-.498 1.54-.498v-2ZM9 6.367H15v-2H9v2Zm5.86-.01c1.209.172 2.406.453 3.577.843l.633-1.898a22.352 22.352 0 0 0-3.93-.925l-.28 1.98ZM12 3.5c.806 0 1.274.23 1.54.498.27.271.46.708.46 1.369h2c0-1.046-.31-2.042-1.04-2.778C14.226 1.85 13.193 1.5 12 1.5v2Zm8.9 6.5c.592 0 1.133-.49 1.096-1.156l-1.997.112A.904.904 0 0 1 20.9 8v2ZM3.1 8c.481 0 .933.4.901.956l-1.997-.112A1.096 1.096 0 0 0 3.1 10V8Z"
      fill="currentColor"
    />
    <path
      d="M4 12v-1H3v1h1Zm16 0h1v-1h-1v1ZM4 13h16v-2H4v2Zm15-1v6h2v-6h-2Zm-1 7H6v2h12v-2ZM5 18v-6H3v6h2Zm1 1a1 1 0 0 1-1-1H3a3 3 0 0 0 3 3v-2Zm13-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPot;
