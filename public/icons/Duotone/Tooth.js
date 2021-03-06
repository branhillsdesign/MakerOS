import * as React from "react";

const SvgTooth = ({ title, titleId, ...props }) => (
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
      d="m4.509 5.1.66-1.127A2.01 2.01 0 0 1 6.908 3H17.09c.723 0 1.39.372 1.74.973l.66 1.127c.829 1.417.632 3.175-.492 4.395-1.102 1.197-1.455 2.86-.925 4.369l.1.285a4.773 4.773 0 0 1-.106 3.443l-1.173 2.784a1.03 1.03 0 0 1-.716.594c-.695.165-1.341-.367-1.295-1.024.005-.077.014-.153.01-.23-.115-2.34-.84-6.801-2.894-6.801-2.054 0-2.779 4.462-2.894 6.801-.004.077.005.153.01.23.046.657-.6 1.189-1.295 1.024a1.03 1.03 0 0 1-.716-.594l-1.173-2.784c-.463-1.1-.5-2.32-.106-3.443l.1-.285c.53-1.51.177-3.172-.925-4.369-1.124-1.22-1.32-2.978-.492-4.395Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <mask
      id="Tooth_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={0}
      width={12}
      height={24}
    >
      <path fill="#000" d="M12 0h12v24H12z" />
    </mask>
    <g mask="url(#Tooth_svg__a)">
      <path
        d="m4.509 5.1.66-1.127A2.01 2.01 0 0 1 6.908 3H17.09c.723 0 1.39.372 1.74.973l.66 1.127c.829 1.417.632 3.175-.492 4.395-1.102 1.197-1.455 2.86-.925 4.369l.1.285a4.773 4.773 0 0 1-.106 3.443l-1.173 2.784a1.03 1.03 0 0 1-.716.594c-.695.165-1.341-.367-1.295-1.024.005-.077.014-.153.01-.23-.115-2.34-.84-6.801-2.894-6.801-2.054 0-2.779 4.462-2.894 6.801-.004.077.005.153.01.23.046.657-.6 1.189-1.295 1.024a1.03 1.03 0 0 1-.716-.594l-1.173-2.784c-.463-1.1-.5-2.32-.106-3.443l.1-.285c.53-1.51.177-3.172-.925-4.369-1.124-1.22-1.32-2.978-.492-4.395Z"
        stroke="#555770"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgTooth;
