import * as React from "react";

const SvgSwimming = ({ title, titleId, ...props }) => (
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
      d="m3.152 15.146-.262-.54.262.54Zm17.696 0-.262.54.262-.54Zm-3.62.12-.348-.489.349.488Zm-3.467-.008-.349.488.349-.488Zm-3.522 0 .349.488-.349-.488Zm-3.468.007.35-.488-.35.488ZM3.152 19.45l-.262-.54.262.54Zm17.696 0-.262.54.262-.54Zm-3.62.12-.348-.489.349.488Zm-3.467-.008-.349.488.349-.488Zm-3.522 0 .349.488-.349-.488Zm-3.468.007.35-.488-.35.488ZM2 16.1c.463 0 .986-.206 1.415-.415l-.525-1.079c-.413.201-.722.294-.89.294v1.2Zm18.585-.415c.43.209.952.415 1.415.415v-1.2c-.168 0-.477-.093-.89-.294l-.524 1.08Zm-3.008.069c.824-.589 1.976-.571 3.008-.069l.525-1.079c-1.298-.631-2.944-.747-4.23.171l.697.977Zm-4.165-.008a3.59 3.59 0 0 0 4.165.008l-.697-.977a2.39 2.39 0 0 1-2.77-.007l-.698.976Zm-2.824 0a2.444 2.444 0 0 1 2.824 0l.697-.976a3.644 3.644 0 0 0-4.219 0l.698.976Zm-4.165.008a3.59 3.59 0 0 0 4.165-.008l-.698-.976a2.39 2.39 0 0 1-2.77.007l-.697.977Zm-3.008-.069c1.032-.502 2.184-.52 3.008.069l.697-.977c-1.286-.918-2.932-.802-4.23-.17l.525 1.078ZM2 20.403c.463 0 .986-.206 1.415-.415L2.89 18.91c-.413.201-.722.294-.89.294v1.2Zm18.585-.415c.43.209.952.415 1.415.415v-1.2c-.168 0-.477-.093-.89-.294l-.524 1.08Zm-3.008.069c.824-.589 1.976-.571 3.008-.069l.525-1.079c-1.298-.631-2.944-.747-4.23.171l.697.977Zm-4.165-.008a3.59 3.59 0 0 0 4.165.008l-.697-.977a2.39 2.39 0 0 1-2.77-.007l-.698.976Zm-2.824 0a2.444 2.444 0 0 1 2.824 0l.697-.976a3.644 3.644 0 0 0-4.219 0l.698.976Zm-4.165.008a3.59 3.59 0 0 0 4.165-.008l-.698-.976a2.39 2.39 0 0 1-2.77.007l-.697.977Zm-3.008-.069c1.032-.502 2.184-.52 3.008.069l.697-.977c-1.286-.918-2.932-.802-4.23-.17l.525 1.078Z"
      fill="#555770"
    />
    <mask
      id="Swimming_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={1}
      width={20}
      height={12}
    >
      <path
        d="M3.152 11.449c-.42.204-.836.354-1.152.354V1h20v10.803c-.316 0-.731-.15-1.152-.354-1.166-.567-2.565-.634-3.62.12a2.99 2.99 0 0 1-3.467-.008 3.045 3.045 0 0 0-3.522 0 2.99 2.99 0 0 1-3.468.007c-1.054-.753-2.453-.686-3.619-.12Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#Swimming_svg__a)">
      <path
        d="M16 12c-1.5 0-2.5-1.5-4-1.5S9.5 12 7.5 12l2.25-2L12 8l2 2 2 2Z"
        fill="#000"
      />
      <path
        d="m10.15 6.15.424-.424-.424.424ZM7.348 4.437l-.184.572.184-.572ZM7.5 12l-.399-.448-1.18 1.048h1.58L7.5 12Zm8.5 0v.6h1.449l-1.025-1.024L16 12Zm-6.25-2-.399-.448.399.448ZM14 10l.424-.424L14 10Zm-3.426-4.274a7.6 7.6 0 0 0-3.041-1.86L7.164 5.01a6.4 6.4 0 0 1 2.562 1.565l.848-.848Zm1.85 1.85-1.85-1.85-.848.848 1.85 1.85.848-.848Zm-.823-.024-2.25 2 .798.896 2.25-2-.798-.896Zm-2.25 2-2.25 2 .798.896 2.25-2-.798-.896Zm7.073 2.024-2-2-.848.848 2 2 .848-.848Zm-2-2-2-2-.848.848 2 2 .848-.848ZM5 4.77c.792 0 1.509.027 2.164.239l.369-1.143C6.68 3.591 5.793 3.57 5 3.57v1.2Zm2.5 7.83c1.161 0 2.025-.442 2.725-.823.736-.402 1.211-.677 1.775-.677V9.9c-.936 0-1.71.475-2.35.823-.675.369-1.311.677-2.15.677v1.2Zm4.5-1.5c.557 0 1.04.274 1.691.665.6.36 1.366.835 2.31.835v-1.2c-.558 0-1.042-.274-1.692-.665-.6-.36-1.366-.835-2.309-.835v1.2Z"
        fill="#555770"
      />
    </g>
    <mask id="Swimming_svg__b" fill="#fff">
      <path d="M19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
    </mask>
    <path d="M19 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" fill="#000" />
    <path
      d="M17.8 5.5a1.3 1.3 0 0 1-1.3 1.3v2.4a3.7 3.7 0 0 0 3.7-3.7h-2.4Zm-1.3 1.3a1.3 1.3 0 0 1-1.3-1.3h-2.4a3.7 3.7 0 0 0 3.7 3.7V6.8Zm-1.3-1.3a1.3 1.3 0 0 1 1.3-1.3V1.8a3.7 3.7 0 0 0-3.7 3.7h2.4Zm1.3-1.3a1.3 1.3 0 0 1 1.3 1.3h2.4a3.7 3.7 0 0 0-3.7-3.7v2.4Z"
      fill="#555770"
      mask="url(#Swimming_svg__b)"
    />
  </svg>
);

export default SvgSwimming;
