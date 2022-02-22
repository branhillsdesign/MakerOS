import * as React from "react";

const SvgHeadsetCrossed = ({ title, titleId, ...props }) => (
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
    <g clipPath="url(#Headset_Crossed_svg__a)">
      <mask
        id="Headset_Crossed_svg__b"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path
          d="M22.003 22 0 0v24h24V0H1.938l20.668 20.668L22.003 22Z"
          fill="#fff"
        />
      </mask>
      <g mask="url(#Headset_Crossed_svg__b)">
        <path
          d="m3.14 3.984 17.418 17.418"
          stroke="#555770"
          strokeWidth={1.2}
        />
        <path
          d="m15.788 21.398-.429-.42.43.42Zm3.642-3.724.429.42-.429-.42ZM4.6 10A7.4 7.4 0 0 1 12 2.6V1.4A8.6 8.6 0 0 0 3.4 10h1.2ZM12 2.6a7.4 7.4 0 0 1 7.4 7.4h1.2A8.6 8.6 0 0 0 12 1.4v1.2Zm4.217 19.218 3.642-3.725-.858-.839-3.642 3.725.858.839Zm4.383-5.542V16h-1.2v.276h1.2Zm-.741 1.817a2.6 2.6 0 0 0 .741-1.817h-1.2a1.4 1.4 0 0 1-.399.978l.858.84Zm-5.5 4.507a2.6 2.6 0 0 0 1.858-.782l-.858-.84a1.4 1.4 0 0 1-1 .422v1.2Zm-1.18 0h1.18v-1.2h-1.18v1.2Z"
          fill="#555770"
        />
        <mask id="Headset_Crossed_svg__c" fill="#fff">
          <path d="M1 11a1 1 0 0 1 1-1h3v6H2a1 1 0 0 1-1-1v-4ZM19 10h3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-3v-6ZM10 21.412a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1Z" />
        </mask>
        <path
          d="M5 10h1.2V8.8H5V10Zm0 6v1.2h1.2V16H5Zm14-6V8.8h-1.2V10H19Zm0 6h-1.2v1.2H19V16ZM2 11.2h3V8.8H2v2.4ZM3.8 10v6h2.4v-6H3.8ZM5 14.8H2v2.4h3v-2.4Zm-2.8.2v-4H-.2v4h2.4ZM19 11.2h3V8.8h-3v2.4Zm2.8-.2v4h2.4v-4h-2.4Zm.2 3.8h-3v2.4h3v-2.4ZM20.2 16v-6h-2.4v6h2.4ZM11 21.612h2v-2.4h-2v2.4Zm1.8-.2v1h2.4v-1h-2.4Zm.2.8h-2v2.4h2v-2.4Zm-1.8.2v-1H8.8v1h2.4Zm1.6 0c0-.11.09-.2.2-.2v2.4a2.2 2.2 0 0 0 2.2-2.2h-2.4Zm.2-.8a.2.2 0 0 1-.2-.2h2.4a2.2 2.2 0 0 0-2.2-2.2v2.4ZM21.8 15c0-.11.09-.2.2-.2v2.4a2.2 2.2 0 0 0 2.2-2.2h-2.4ZM11 19.212a2.2 2.2 0 0 0-2.2 2.2h2.4a.2.2 0 0 1-.2.2v-2.4ZM2 14.8c.11 0 .2.09.2.2H-.2A2.2 2.2 0 0 0 2 17.2v-2.4Zm20-3.6a.2.2 0 0 1-.2-.2h2.4A2.2 2.2 0 0 0 22 8.8v2.4ZM11 22.212c.11 0 .2.09.2.2H8.8a2.2 2.2 0 0 0 2.2 2.2v-2.4ZM2 8.8A2.2 2.2 0 0 0-.2 11h2.4a.2.2 0 0 1-.2.2V8.8Z"
          fill="#555770"
          mask="url(#Headset_Crossed_svg__c)"
        />
      </g>
    </g>
    <defs>
      <clipPath id="Headset_Crossed_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgHeadsetCrossed;
