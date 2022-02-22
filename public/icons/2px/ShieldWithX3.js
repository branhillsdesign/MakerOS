import * as React from "react";

const SvgShieldwithX3 = ({ title, titleId, ...props }) => (
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
    <mask id="Shield_with_X_3_svg__a" fill="#fff">
      <path d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12.524a1 1 0 0 1-.37.776l-7 5.688a1 1 0 0 1-1.26 0l-7-5.688a1 1 0 0 1-.37-.776V3Z" />
    </mask>
    <path
      d="m12.63 21.988-1.26-1.553 1.26 1.553Zm-1.26 0-1.262 1.552 1.261-1.552Zm-7-5.688-1.262 1.552L4.37 16.3Zm15.26 0 1.262 1.552L19.63 16.3ZM5 4h14V0H5v4Zm13-1v12.524h4V3h-4ZM6 15.524V3H2v12.524h4Zm12.37-.776-7 5.687 2.522 3.105 7-5.688-2.523-3.104Zm-5.74 5.687-7-5.687-2.522 3.104 7 5.688 2.523-3.105Zm-1.26 0a1 1 0 0 1 1.26 0l-2.522 3.105a3 3 0 0 0 3.784 0l-2.523-3.105ZM2 15.524a3 3 0 0 0 1.108 2.328l2.523-3.104a1 1 0 0 1 .369.776H2Zm16 0a1 1 0 0 1 .37-.776l2.522 3.104A3 3 0 0 0 22 15.524h-4ZM19 4a1 1 0 0 1-1-1h4a3 3 0 0 0-3-3v4ZM5 0a3 3 0 0 0-3 3h4a1 1 0 0 1-1 1V0Z"
      fill="#555770"
      mask="url(#Shield_with_X_3_svg__a)"
    />
    <path d="m9 14 6-6M9 8l6 6" stroke="#555770" strokeWidth={2} />
  </svg>
);

export default SvgShieldwithX3;
