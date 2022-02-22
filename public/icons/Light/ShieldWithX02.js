import * as React from "react";

const SvgShieldwithX02 = ({ title, titleId, ...props }) => (
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
    <mask id="Shield_with_X_02_svg__a" fill="#fff">
      <path d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12.524a1 1 0 0 1-.37.776l-7 5.688a1 1 0 0 1-1.26 0l-7-5.688a1 1 0 0 1-.37-.776V3Z" />
    </mask>
    <path
      d="m12.63 21.988-.756-.932.757.932Zm-1.26 0-.757.931.756-.931Zm-7-5.688-.757.931.756-.93Zm15.26 0 .757.931-.756-.93ZM5 3.2h14V.8H5v2.4ZM18.8 3v12.524h2.4V3h-2.4ZM5.2 15.524V3H2.8v12.524h2.4Zm13.674-.155-7 5.687 1.513 1.863 7-5.688-1.513-1.862Zm-6.748 5.687-7-5.687-1.513 1.863 7 5.687 1.513-1.863Zm-.252 0a.2.2 0 0 1 .252 0l-1.513 1.863a2.2 2.2 0 0 0 2.774 0l-1.513-1.863ZM2.8 15.524a2.2 2.2 0 0 0 .813 1.708l1.513-1.863a.2.2 0 0 1 .074.155H2.8Zm16 0a.2.2 0 0 1 .074-.155l1.513 1.863a2.2 2.2 0 0 0 .813-1.708h-2.4ZM19 3.2a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 19 .8v2.4ZM5 .8A2.2 2.2 0 0 0 2.8 3h2.4a.2.2 0 0 1-.2.2V.8Z"
      fill="#555770"
      mask="url(#Shield_with_X_02_svg__a)"
    />
    <path d="m9 14 6-6M9 8l6 6" stroke="#555770" strokeWidth={1.2} />
  </svg>
);

export default SvgShieldwithX02;
