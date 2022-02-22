import * as React from "react";

const SvgSwimmingPants = ({ title, titleId, ...props }) => (
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
      d="m12 12 .978-.21a1 1 0 0 0-1.956 0L12 12Zm-1.5 7v1h.808l.17-.79L10.5 19Zm-8 0-.979-.204L1.271 20H2.5v-1Zm11 0-.978.21.17.79h.808v-1Zm8 0v1h1.23l-.251-1.204L21.5 19Zm-10.478-7.21-1.5 7 1.956.42 1.5-7-1.956-.42ZM10.5 18h-8v2h8v-2Zm-7.021 1.204 2.5-12-1.958-.408-2.5 12 1.958.408ZM6 7V4.6H4V7h2Zm5.022 5.21 1.5 7 1.956-.42-1.5-7-1.956.42ZM13.5 20h8v-2h-8v2Zm8.979-1.204-2.5-12-1.958.408 2.5 12 1.958-.408ZM20 7V4.6h-2V7h2ZM5.1 5.5h13.8v-2H5.1v2ZM5 8h14V6H5v2Zm15-3.4a1.1 1.1 0 0 0-1.1-1.1v2a.9.9 0 0 1-.9-.9h2Zm-14 0a.9.9 0 0 1-.9.9v-2A1.1 1.1 0 0 0 4 4.6h2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwimmingPants;
