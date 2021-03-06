import * as React from "react";

const SvgArrow = ({ title, titleId, ...props }) => (
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
    <mask id="Arrow_svg__a" fill="#fff">
      <path d="m3.327 11.41 14.297-6.354c.837-.372 1.692.483 1.32 1.32L12.59 20.673a.5.5 0 0 1-.942-.082L10 14l-6.591-1.648a.5.5 0 0 1-.082-.942Z" />
    </mask>
    <path
      d="m17.624 5.056-.812-1.828.812 1.828ZM3.327 11.41l-.812-1.827.812 1.827Zm.082.942.485-1.94-.485 1.94ZM10 14l1.94-.485-.29-1.164-1.165-.291L10 14Zm1.648 6.591 1.94-.485-1.94.485Zm.942.082 1.827.812-1.827-.812Zm6.354-14.297 1.828.812-1.828-.812Zm-2.132-3.148L2.515 9.583l1.624 3.655 14.297-6.354-1.624-3.656ZM2.924 14.293l6.59 1.647.971-3.88-6.591-1.648-.97 3.88Zm5.136.192 1.648 6.591 3.88-.97-1.648-6.591-3.88.97Zm6.357 7 6.355-14.297-3.656-1.624-6.354 14.297 3.655 1.624Zm-4.71-.409c.577 2.307 3.745 2.582 4.71.41l-3.655-1.625c.58-1.304 2.48-1.139 2.826.245l-3.88.97ZM2.516 9.583c-2.173.965-1.898 4.133.409 4.71l.97-3.881c1.384.346 1.549 2.246.245 2.826L2.515 9.583Zm15.921-2.7c-.837.372-1.692-.483-1.32-1.32l3.656 1.625c1.115-2.51-1.45-5.075-3.96-3.96l1.624 3.656Z"
      fill="#555770"
      mask="url(#Arrow_svg__a)"
    />
  </svg>
);

export default SvgArrow;
