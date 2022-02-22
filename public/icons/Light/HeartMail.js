import * as React from "react";

const SvgHeartMail = ({ title, titleId, ...props }) => (
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
      d="M2 8a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8Z"
      stroke="#555770"
      strokeWidth={1.2}
    />
    <path
      d="m9.407 13.643.452-.395-.452.395ZM12 16l-.393.453.393.341.393-.34L12 16Zm2.593-2.357-.452-.395.452.395Zm.235-.34-.532-.277.532.277Zm-5.656 0 .532-.277-.532.277Zm1.013 1.088.404-.444-.404.444Zm3.63 0 .404.443-.404-.443ZM12 12.116l-.582.147a.6.6 0 0 0 1.164 0L12 12.116Zm-2.4.355c0-.47.392-.871.9-.871v-1.2c-1.149 0-2.1.916-2.1 2.07h1.2Zm6 0c0-1.155-.951-2.071-2.1-2.071v1.2c.508 0 .9.4.9.87h1.2Zm-.555 1.567a2.32 2.32 0 0 0 .316-.459l-1.065-.553c-.034.066-.083.14-.155.222l.904.79Zm.316-.459c.228-.439.239-.84.239-1.108h-1.2c0 .219-.013.38-.104.556l1.065.553Zm-.176.206 7.172-5.303-.714-.964-7.171 5.303.713.964Zm-5.326-.537a1.127 1.127 0 0 1-.155-.221l-1.065.553c.08.155.185.308.316.458l.904-.79Zm-.155-.221c-.09-.175-.104-.337-.104-.556H8.4c0 .267.011.67.24 1.108l1.064-.553Zm-8.06-4.545 7.171 5.303.713-.964-7.171-5.303-.714.964Zm7.311 5.556c.148.17.478.479.826.796l.808-.887a13.032 13.032 0 0 1-.73-.699l-.904.79Zm.826.796a97.842 97.842 0 0 0 1.65 1.466l.129.113a14.261 14.261 0 0 1 .044.037l.002.002v.001L12 16l.393-.453-.003-.003-.008-.007-.034-.03-.128-.11a138.335 138.335 0 0 1-1.63-1.45l-.81.887Zm4.36-1.586c-.093.107-.366.367-.73.7l.808.886c.348-.317.678-.626.826-.796l-.904-.79Zm-.73.7a95.062 95.062 0 0 1-1.631 1.448l-.128.111-.034.03-.008.007-.003.002L12 16l.393.453h.001l.002-.003a1.528 1.528 0 0 0 .044-.037l.129-.113.443-.389c.358-.314.815-.72 1.207-1.077l-.808-.887ZM10.5 11.6c.45 0 .829.309.918.663l1.164-.294c-.235-.928-1.125-1.569-2.082-1.569v1.2Zm3-1.2c-.957 0-1.848.641-2.082 1.57l1.164.293c.09-.354.467-.663.918-.663v-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgHeartMail;