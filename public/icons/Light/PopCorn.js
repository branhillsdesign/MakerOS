import * as React from "react";

const SvgPopCorn = ({ title, titleId, ...props }) => (
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
      d="M4 7v-.6h-.685l.09.68L4 7Zm2 15-.595.08.07.52H6V22ZM20 7l.595.08.09-.68H20V7Zm-2 15v.6h.525l.07-.52L18 22ZM8.5 4.5l-.146.582.583.146.145-.582L8.5 4.5Zm4.5-1-.5.333.255.381.435-.145L13 3.5Zm5.5.5h-.6v.6h.6V4Zm1.435 1.262-.582-.146.582.146Zm-12.95-1.14.146-.583-.146.582Zm8.076-1.683-.425-.424.425.424Zm-2.223.817-.5.333.5-.333Zm-4.21.73-.581-.146.582.146Zm6.19-1.304-.425-.424.425.424ZM3.405 7.08l2 15 1.19-.158-2-15-1.19.158Zm16-.158-2 15 1.19.158 2-15-1.19-.158ZM11.4 7v15h1.2V7h-1.2ZM6 22.6h3v-1.2H6v1.2Zm3 0h3v-1.2H9v1.2ZM7.401 7.04l1 15 1.198-.08-1-15-1.198.08ZM12 22.6h3v-1.2h-3v1.2Zm3 0h3v-1.2h-3v1.2Zm.401-15.64-1 15 1.198.08 1-15-1.198-.08ZM4 7.6h.5V6.4H4v1.2Zm.5 0H8V6.4H4.5v1.2Zm.6-.6v-.938H3.9V7h1.2Zm3.982-2.354.129-.515-1.164-.291-.13.514 1.165.292Zm3.256-1.057.163.244.998-.666-.162-.243-.999.665Zm.852.48 1.074-.358-.38-1.138-1.074.358.38 1.138Zm2.052-.962.243-.243-.849-.849-.243.243.849.849Zm2.658.757V4h1.2v-.136h-1.2Zm.6.736h.77V3.4h-.77v1.2Zm-2.5 3h3.5V6.4H16v1.2Zm3.5 0h.5V6.4h-.5v1.2Zm-.148-2.484-.434 1.738 1.164.292.435-1.739-1.165-.29ZM12 7.6h2V6.4h-2v1.2Zm2 0h2V6.4h-2v1.2Zm-6 0h3V6.4H8v1.2Zm3 0h1V6.4h-1v1.2Zm.6-.6v-.382h-1.2V7h1.2ZM6.84 4.703l1.514.38.292-1.165-1.515-.379-.291 1.164Zm12.56.027c0 .13-.016.26-.047.386l1.164.291c.055-.221.083-.449.083-.677h-1.2Zm-.13-.13a.13.13 0 0 1 .13.13h1.2a1.33 1.33 0 0 0-1.33-1.33v1.2Zm-13.11.103a1.4 1.4 0 0 1 .68 0l.29-1.164a2.6 2.6 0 0 0-1.26 0l.29 1.164ZM17.01 2.55c.538.215.89.736.89 1.314h1.2c0-1.07-.65-2.03-1.644-2.428l-.445 1.114Zm-1.525.314c.4-.4 1-.524 1.526-.314l.445-1.114a2.615 2.615 0 0 0-2.82.58l.849.848Zm-4.876-.024a1.735 1.735 0 0 1 1.73.75l.998-.666a2.936 2.936 0 0 0-2.925-1.268l.197 1.184Zm3.928 4.428a2.754 2.754 0 0 1 1.231-1.231l-.536-1.074a3.954 3.954 0 0 0-1.769 1.769l1.074.536ZM9.21 4.131a1.735 1.735 0 0 1 1.398-1.29l-.197-1.185A2.936 2.936 0 0 0 8.047 3.84l1.164.291ZM11.6 6.618c0-.828-.193-1.645-.563-2.386l-1.074.536c.288.575.437 1.208.437 1.85h1.2Zm2.664-2.907c.368-.123.703-.33.978-.604l-.849-.849c-.143.143-.317.25-.509.315l.38 1.138ZM5.1 6.061a1.4 1.4 0 0 1 1.06-1.358L5.87 3.54A2.6 2.6 0 0 0 3.9 6.062h1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgPopCorn;