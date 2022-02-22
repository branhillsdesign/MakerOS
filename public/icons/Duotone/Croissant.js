import * as React from "react";

const SvgCroissant = ({ title, titleId, ...props }) => (
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
      d="M15.008 9.96a10.56 10.56 0 0 0 .832-6.29c-.162-.926.783-1.752 1.496-1.14A10.476 10.476 0 0 1 21 10.5c0 .57-.046 1.13-.133 1.675M10.5 21c-3.188 0-6.044-1.42-7.97-3.663-.612-.714.214-1.659 1.14-1.496a10.57 10.57 0 0 0 5.828-.63l3.01 5.597c-.65.126-1.321.192-2.008.192Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <path
      d="M13.98 21.757c-.453.19-.967-.013-1.2-.445l-.27-.504-3.012-5.596a.885.885 0 0 1 .305-1.15 13.649 13.649 0 0 0 3.759-3.76c.271-.408.783-.593 1.24-.42l.207.078 2.929 1.107 2.93 1.108.19.073c.476.18.745.688.588 1.172a13.613 13.613 0 0 1-7.667 8.337Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgCroissant;
