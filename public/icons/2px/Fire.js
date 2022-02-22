import * as React from "react";

const SvgFire = ({ title, titleId, ...props }) => (
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
    <mask id="Fire_svg__a" fill="#fff">
      <path d="M12 22c4.694 0 8.5-3.694 8.5-8.25 0-7.256-5.128-10.779-7.842-11.698a.099.099 0 0 0-.128.112c.434 2.583-.4 8.313-4.074 7.833a.097.097 0 0 1-.041-.015C7.84 9.59 7.522 8.6 7.5 6.927a.1.1 0 0 0-.152-.084C5.031 8.317 3.5 10.86 3.5 13.75 3.5 18.306 7.306 22 12 22Z" />
    </mask>
    <path
      d="m12.53 2.164-1.972.331 1.972-.331ZM8.456 9.997l.26-1.983-.26 1.983ZM7.35 6.843l1.073 1.688-1.073-1.688Zm1.066 3.139-1.127 1.652 1.127-1.652ZM7.5 6.927l-2 .025 2-.025Zm5.157-4.875L13.3.157l-.642 1.895ZM18.5 13.75c0 3.396-2.853 6.25-6.5 6.25v4c5.742 0 10.5-4.533 10.5-10.25h-4ZM12 20c-3.647 0-6.5-2.854-6.5-6.25h-4C1.5 19.467 6.258 24 12 24v-4ZM10.558 2.495c.163.972.085 2.7-.405 4.054-.241.666-.522 1.073-.76 1.28-.175.15-.35.228-.677.185l-.52 3.966c1.51.197 2.817-.262 3.818-1.13.938-.814 1.527-1.91 1.9-2.94.737-2.037.86-4.466.588-6.077l-3.944.662ZM5.5 13.75c0-2.16 1.142-4.087 2.922-5.219L6.276 5.156C3.421 6.97 1.5 10.13 1.5 13.75h4Zm4.041-5.421c.23.156.204.29.123.023-.078-.255-.154-.713-.163-1.45l-4 .05c.012.938.106 1.811.336 2.566.227.745.647 1.568 1.451 2.116L9.541 8.33Zm2.475-4.383c2.177.738 6.484 3.663 6.484 9.804h4c0-8.372-5.95-12.49-9.2-13.593l-1.284 3.789ZM8.422 8.53c-1.308.832-2.903-.151-2.92-1.579l3.999-.05C9.48 5.32 7.715 4.242 6.276 5.157L8.422 8.53Zm.294-.517c.267.035.555.13.825.315l-2.253 3.305c.295.2.612.307.909.346l.519-3.966Zm5.787-6.181c.22 1.317-1.031 2.606-2.487 2.113L13.3.157c-1.599-.542-2.989.871-2.742 2.338l3.944-.662Z"
      fill="#555770"
      mask="url(#Fire_svg__a)"
    />
  </svg>
);

export default SvgFire;