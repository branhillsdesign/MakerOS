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
    <circle cx={12} cy={12} r={10.4} stroke="#555770" strokeWidth={1.2} />
    <path
      d="m12.971 12.483.445.403-.445-.403ZM9.288 9.301c0-1.555 1.287-2.701 2.747-2.701V5.4c-2.064 0-3.947 1.627-3.947 3.9h1.2ZM12.035 6.6a2.66 2.66 0 0 1 2.674 2.7h1.2a3.86 3.86 0 0 0-3.874-3.9v1.2Zm2.674 2.7c0 .528-.2.872-.579 1.262-.202.208-.436.409-.72.66-.275.245-.58.524-.883.859l.89.805c.257-.284.523-.528.79-.766.26-.231.541-.472.783-.721.51-.524.92-1.152.92-2.098h-1.2Zm-2.182 2.78c-.735.812-1.127 1.768-1.127 2.922h1.2c0-.847.275-1.518.816-2.116l-.89-.805Zm-1.092 4.422v1.5h1.2v-1.5h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgInfoQuestionMark;
