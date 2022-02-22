import * as React from "react";

const SvgMortarPestle = ({ title, titleId, ...props }) => (
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
      d="M22 11h.6v-.6H22v.6ZM2 11v-.6h-.6v.6H2Zm17.268-6.341.589.117-.589-.117Zm-3.11-1.143-.525-.292.525.292ZM21.4 11a9.4 9.4 0 0 1-9.4 9.4v1.2c5.854 0 10.6-4.746 10.6-10.6h-1.2ZM12 20.4A9.4 9.4 0 0 1 2.6 11H1.4c0 5.854 4.746 10.6 10.6 10.6v-1.2Zm-5 1.2h5v-1.2H7v1.2Zm5 0h5v-1.2h-5v1.2Zm0-11.2H2v1.2h10v-1.2Zm.524.891 4.159-7.484-1.05-.583-4.157 7.485 1.048.582ZM22 10.4h-4v1.2h4v-1.2Zm-4 0h-6v1.2h6v-1.2Zm.68-5.859-1.268 6.341 1.176.236 1.269-6.342-1.177-.235Zm-.502-1.135c.39.235.591.689.502 1.135l1.177.235a2.277 2.277 0 0 0-1.062-2.398l-.617 1.028Zm-1.495.4a1.077 1.077 0 0 1 1.495-.4l.617-1.029a2.277 2.277 0 0 0-3.162.847l1.05.583Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMortarPestle;
