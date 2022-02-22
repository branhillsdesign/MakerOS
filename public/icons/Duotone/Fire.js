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
    <path
      d="M12.974 7.57c.462-1.278.66-2.738.66-3.997C16.151 4.929 19.5 8.107 19.5 13.75c0 3.976-3.33 7.25-7.5 7.25s-7.5-3.274-7.5-7.25c0-1.976.818-3.774 2.156-5.087.038.199.084.387.138.564.19.625.512 1.21 1.058 1.58.153.105.319.161.475.181 1.213.16 2.237-.204 3.032-.894.763-.662 1.275-1.586 1.615-2.524Z"
      stroke="#555770"
      strokeWidth={2}
    />
    <mask
      id="Fire_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={1}
      width={12}
      height={22}
    >
      <path fill="#000" d="M12 1h12v22H12z" />
    </mask>
    <g mask="url(#Fire_svg__a)">
      <path
        d="M12.974 7.57c.462-1.278.66-2.738.66-3.997C16.151 4.929 19.5 8.107 19.5 13.75c0 3.976-3.33 7.25-7.5 7.25s-7.5-3.274-7.5-7.25c0-1.976.818-3.774 2.156-5.087.038.199.084.387.138.564.19.625.512 1.21 1.058 1.58.153.105.319.161.475.181 1.213.16 2.237-.204 3.032-.894.763-.662 1.275-1.586 1.615-2.524Z"
        stroke="currentColor"
        strokeWidth={2}
      />
    </g>
  </svg>
);

export default SvgFire;
