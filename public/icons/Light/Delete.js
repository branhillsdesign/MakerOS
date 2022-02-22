import * as React from "react";

const SvgDelete = ({ title, titleId, ...props }) => (
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
    <mask id="Delete_svg__a" fill="#fff">
      <path d="M7 22a2 2 0 0 1-2-2V8h14v12a2 2 0 0 1-2 2H7ZM5 4a1 1 0 0 0-1 1v2h16V5a1 1 0 0 0-1-1h-3l-.447-.894A2 2 0 0 0 13.763 2h-3.527a2 2 0 0 0-1.789 1.106L8 4H5Z" />
    </mask>
    <path
      d="M5 8V6.8H3.8V8H5Zm14 0h1.2V6.8H19V8ZM4 7H2.8v1.2H4V7Zm16 0v1.2h1.2V7H20ZM8 4v1.2h.742l.331-.663L8 4Zm8 0-1.073.537.331.663H16V4ZM3.8 8v12h2.4V8H3.8ZM7 23.2h10v-2.4H7v2.4ZM20.2 20V8h-2.4v12h2.4ZM19 6.8H5v2.4h14V6.8ZM5.2 7V5H2.8v2h2.4Zm13.6-2v2h2.4V5h-2.4Zm1.2.8H4v2.4h16V5.8ZM5 5.2h3V2.8H5v2.4Zm4.073-.663.448-.895L7.374 2.57l-.447.894 2.146 1.074ZM10.236 3.2h3.528V.8h-3.528v2.4ZM16 5.2h3V2.8h-3v2.4Zm-1.52-1.558.447.895 2.146-1.074-.447-.894-2.147 1.073Zm-.716-.442a.8.8 0 0 1 .716.442l2.146-1.073A3.2 3.2 0 0 0 13.764.8v2.4Zm-4.243.442a.8.8 0 0 1 .715-.442V.8a3.2 3.2 0 0 0-2.862 1.769L9.52 3.642ZM5.2 5a.2.2 0 0 1-.2.2V2.8A2.2 2.2 0 0 0 2.8 5h2.4ZM17 23.2a3.2 3.2 0 0 0 3.2-3.2h-2.4a.8.8 0 0 1-.8.8v2.4ZM21.2 5A2.2 2.2 0 0 0 19 2.8v2.4a.2.2 0 0 1-.2-.2h2.4ZM3.8 20A3.2 3.2 0 0 0 7 23.2v-2.4a.8.8 0 0 1-.8-.8H3.8Z"
      fill="#555770"
      mask="url(#Delete_svg__a)"
    />
  </svg>
);

export default SvgDelete;
