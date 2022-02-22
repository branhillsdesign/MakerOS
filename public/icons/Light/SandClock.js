import * as React from "react";

const SvgSandClock = ({ title, titleId, ...props }) => (
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
    <mask id="Sand_Clock_svg__a" fill="#fff">
      <path d="M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2.929a5 5 0 0 1-1.465 3.535l-1.828 1.829a1 1 0 0 0 0 1.414l1.828 1.829A5 5 0 0 1 18 18.07V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.929a5 5 0 0 1 1.464-3.536l1.829-1.828a1 1 0 0 0 0-1.414L7.464 9.464A5 5 0 0 1 6 5.93V3Z" />
    </mask>
    <path
      d="m9.293 11.293-.849.848.849-.848Zm0 1.414-.849-.848.849.848ZM7 3.2h10V.8H7v2.4Zm10 17.6H7v2.4h10v-2.4ZM16.8 3v2.929h2.4V3h-2.4Zm-1.113 5.616-1.828 1.828 1.697 1.697 1.828-1.828-1.697-1.697Zm-1.828 4.94 1.828 1.828 1.697-1.697-1.828-1.828-1.697 1.697ZM16.8 18.07V21h2.4v-2.929h-2.4Zm-6.659-7.627L8.313 8.616l-1.697 1.697 1.828 1.828 1.697-1.697ZM7.2 5.93V3H4.8v2.929h2.4ZM7.2 21v-2.929H4.8V21h2.4Zm1.113-5.616 1.828-1.828-1.697-1.697-1.828 1.828 1.697 1.697ZM7.2 18.071a3.8 3.8 0 0 1 1.113-2.687l-1.697-1.697A6.2 6.2 0 0 0 4.8 18.071h2.4Zm1.113-9.455A3.8 3.8 0 0 1 7.2 5.929H4.8a6.2 6.2 0 0 0 1.816 4.384l1.697-1.697Zm7.374 6.768a3.8 3.8 0 0 1 1.113 2.687h2.4a6.2 6.2 0 0 0-1.816-4.384l-1.697 1.697ZM16.8 5.93a3.8 3.8 0 0 1-1.113 2.687l1.697 1.697A6.2 6.2 0 0 0 19.2 5.929h-2.4Zm-2.941 4.515a2.2 2.2 0 0 0 0 3.112l1.697-1.697a.2.2 0 0 1 0 .282l-1.697-1.697Zm-5.415 1.697a.2.2 0 0 1 0-.282l1.697 1.697a2.2 2.2 0 0 0 0-3.112l-1.697 1.697ZM7 20.8c.11 0 .2.09.2.2H4.8A2.2 2.2 0 0 0 7 23.2v-2.4Zm10 2.4a2.2 2.2 0 0 0 2.2-2.2h-2.4c0-.11.09-.2.2-.2v2.4Zm0-20a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 17 .8v2.4ZM7 .8A2.2 2.2 0 0 0 4.8 3h2.4a.2.2 0 0 1-.2.2V.8Z"
      fill="#555770"
      mask="url(#Sand_Clock_svg__a)"
    />
    <mask id="Sand_Clock_svg__b" fill="#fff">
      <path d="M11.36 16.534 6 21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l-5.36-4.466a1 1 0 0 0-1.28 0Z" />
    </mask>
    <path
      d="m6 21-.768-.922-.432.36V21H6Zm5.36-4.466.768.921-.768-.921Zm1.28 0-.768.921.768-.921ZM18 21h1.2v-.562l-.432-.36L18 21Zm-11.232.922 5.36-4.467-1.536-1.843-5.36 4.466 1.536 1.844Zm5.104-4.467 5.36 4.467 1.536-1.844-5.36-4.466-1.536 1.843ZM17 20.8H7v2.4h10v-2.4Zm-.2.2c0-.11.09-.2.2-.2v2.4a2.2 2.2 0 0 0 2.2-2.2h-2.4Zm-12 0A2.2 2.2 0 0 0 7 23.2v-2.4c.11 0 .2.09.2.2H4.8Zm7.328-3.545a.2.2 0 0 1-.256 0l1.536-1.843a2.2 2.2 0 0 0-2.816 0l1.536 1.843Z"
      fill="#555770"
      mask="url(#Sand_Clock_svg__b)"
    />
  </svg>
);

export default SvgSandClock;
