import * as React from "react";

const SvgInfoQuestionMark = ({ title, titleId, ...props }) => (
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
    <circle cx={12} cy={12} r={10} stroke="#555770" strokeWidth={2} />
    <path
      d="m12.972 12.982.741.67-.741-.67ZM9.688 9.799c0-1.314 1.089-2.3 2.347-2.3v-2c-2.266 0-4.347 1.787-4.347 4.3h2Zm2.347-2.3a2.26 2.26 0 0 1 2.274 2.3h2a4.26 4.26 0 0 0-4.274-4.3v2Zm2.274 2.3c0 .388-.13.638-.465.982-.19.195-.407.382-.699.64a11.51 11.51 0 0 0-.915.89l1.483 1.342c.242-.268.495-.5.76-.736.252-.224.549-.479.804-.74.554-.57 1.033-1.293 1.033-2.378h-2ZM12.23 12.31c-.432.477-.723 1.055-.906 1.559-.179.493-.29 1.011-.29 1.41h2c0-.092.04-.37.17-.727.126-.347.303-.673.51-.9L12.23 12.31ZM11.035 16.5v2h2v-2h-2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgInfoQuestionMark;
