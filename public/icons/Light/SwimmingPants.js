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
      d="m12 12 .587-.126a.6.6 0 0 0-1.174 0L12 12Zm-1.5 7v.6h.485l.102-.474L10.5 19Zm-8 0-.587-.122-.15.722H2.5V19Zm11 0-.587.126.102.474h.485V19Zm8 0v.6h.738l-.15-.722L21.5 19Zm-10.087-7.126-1.5 7 1.174.252 1.5-7-1.174-.252ZM10.5 18.4h-8v1.2h8v-1.2Zm-7.413.722 2.5-12-1.174-.244-2.5 12 1.174.244ZM5.6 7V4.6H4.4V7h1.2Zm5.813 5.126 1.5 7 1.174-.252-1.5-7-1.174.252ZM13.5 19.6h8v-1.2h-8v1.2Zm8.587-.722-2.5-12-1.174.244 2.5 12 1.174-.244ZM19.6 7V4.6h-1.2V7h1.2ZM5.1 5.1h13.8V3.9H5.1v1.2ZM5 7.6h14V6.4H5v1.2Zm14.6-3a.7.7 0 0 0-.7-.7v1.2a.5.5 0 0 1-.5-.5h1.2Zm-14 0a.5.5 0 0 1-.5.5V3.9a.7.7 0 0 0-.7.7h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgSwimmingPants;
