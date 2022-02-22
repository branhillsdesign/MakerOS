import * as React from "react";

const SvgBpmMonitor = ({ title, titleId, ...props }) => (
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
      d="m9.919 8.136.514.308-.514-.309Zm.169-.005.499-.332-.5.332Zm-3.059 4.82-.514-.308.514.308Zm6.903.947.5-.332-.5.332ZM21.6 16V6h-1.2v10h1.2ZM20 4.4H4v1.2h16V4.4ZM2.4 6v10h1.2V6H2.4ZM7 20.6h5v-1.2H7v1.2Zm5 0h5v-1.2h-5v1.2Zm-8-3h8v-1.2H4v1.2Zm8 0h8v-1.2h-8v1.2Zm.6 2.4v-3h-1.2v3h1.2ZM5 13.6h1.943v-1.2H5v1.2Zm2.544-.34 2.89-4.816-1.03-.617-2.89 4.816 1.03.617Zm2.044-4.796 3.845 5.767.999-.665-3.845-5.767-.999.665Zm4.923 5.874 2.884-2.884-.849-.849-2.884 2.884.848.849Zm2.53-2.738H19v-1.2h-1.959v1.2Zm-6.608-3.156a.5.5 0 0 1-.845.02l.999-.665a.7.7 0 0 0-1.183.028l1.03.617ZM6.943 13.6a.7.7 0 0 0 .6-.34l-1.028-.617a.5.5 0 0 1 .428-.243v1.2ZM4 4.4A1.6 1.6 0 0 0 2.4 6h1.2c0-.22.18-.4.4-.4V4.4ZM21.6 6A1.6 1.6 0 0 0 20 4.4v1.2c.22 0 .4.18.4.4h1.2Zm-4.205 5.454a.5.5 0 0 1-.354.146v-1.2a.7.7 0 0 0-.495.205l.849.849ZM20.4 16a.4.4 0 0 1-.4.4v1.2a1.6 1.6 0 0 0 1.6-1.6h-1.2Zm-6.967-1.769a.7.7 0 0 0 1.078.107l-.849-.848a.5.5 0 0 1 .77.076l-.999.665ZM2.4 16A1.6 1.6 0 0 0 4 17.6v-1.2a.4.4 0 0 1-.4-.4H2.4Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBpmMonitor;