import * as React from "react";

const SvgPlaneLanding = ({ title, titleId, ...props }) => (
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
    <mask id="Plane_Landing_svg__a" fill="#fff">
      <path d="M2.5 21v-2h19v2h-19ZM2.77 6.249v5.15l16.563 4.456a1.505 1.505 0 1 0 .777-2.908l-5.3-1.407-2.762-9.036L10.113 2v8.287L5.162 8.953l-.934-2.315L2.77 6.25Z" />
    </mask>
    <path
      d="M2.5 19v-3h-3v3h3Zm0 2h-3v3h3v-3Zm19 0v3h3v-3h-3Zm0-2h3v-3h-3v3ZM2.77 11.4h-3v2.299l2.221.597.78-2.897Zm0-5.151.774-2.898L-.23 2.343V6.25h3Zm1.458.39L7.01 5.515l-.56-1.39-1.448-.386-.774 2.898Zm.934 2.314L2.38 10.075l.559 1.386 1.443.389.78-2.897Zm4.95 1.333-.78 2.896 3.78 1.018v-3.914h-3Zm0-8.287.759-2.903-3.758-.982v3.885h3Zm1.936.505 2.87-.877-.49-1.602-1.621-.423-.759 2.902Zm2.762 9.036-2.869.877.488 1.595 1.612.428.77-2.9Zm5.3 1.407-.77 2.9.77-2.9Zm-.777 2.908-.78 2.897.78-2.897Zm1.843-1.055-2.893-.793 2.893.793ZM-.5 19v2h6v-2h-6Zm3 5h19v-6h-19v6Zm22-3v-2h-6v2h6Zm-3-5h-19v6h19v-6ZM5.77 11.4V6.248h-6v5.15h6ZM1.997 9.147l1.457.389L5.002 3.74l-1.458-.39-1.547 5.798ZM1.446 7.76l.934 2.315 5.564-2.244-.934-2.315L1.446 7.76Zm2.936 4.09 4.95 1.332 1.56-5.793-4.95-1.333-1.56 5.794Zm8.73-1.564V1.999h-6v8.287h6ZM9.355 4.9l1.936.506 1.517-5.805-1.936-.506-1.517 5.805Zm-.175-1.52 2.762 9.036 5.738-1.754-2.762-9.036L9.18 3.381Zm4.862 11.059 5.3 1.407 1.539-5.8-5.3-1.406-1.54 5.799Zm6.072-1.481L3.55 8.502 1.99 14.296l16.563 4.456 1.559-5.793Zm-1.83 1.048a1.495 1.495 0 0 1 1.83-1.048l-1.56 5.793a4.505 4.505 0 0 0 5.516-3.159l-5.786-1.586Zm1.058 1.84a1.495 1.495 0 0 1-1.058-1.84l5.786 1.586a4.505 4.505 0 0 0-3.189-5.546l-1.54 5.8Z"
      fill="#555770"
      mask="url(#Plane_Landing_svg__a)"
    />
  </svg>
);

export default SvgPlaneLanding;