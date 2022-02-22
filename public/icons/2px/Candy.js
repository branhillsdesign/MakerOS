import * as React from "react";

const SvgCandy = ({ title, titleId, ...props }) => (
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
      d="m16 6.255-.572.82.572-.82ZM17.745 8l-.82.572.82-.572Zm-.003-6.321-.935-.356.935.356Zm.767-.165-.625.78.625-.78Zm2.592.729.137.99-.137-.99Zm1.22 4.015.356.935-.356-.935Zm.165-.767-.78.625.78-.625Zm-.729-2.592.99.138-.99-.138ZM8 17.745l.572-.82-.572.82ZM6.255 16l.82-.572-.82.572Zm.003 6.322.935.355-.935-.355Zm-.767.164.625-.78-.625.78Zm-2.592-.729-.138-.99.138.99Zm-1.22-4.015-.356-.935.355.935Zm-.165.767.78-.625-.78.625Zm.728 2.592-.99-.137.99.137ZM7.14 6.963l-.695-.719.695.72Zm4.023-1.913-.118-.993.118.993ZM12 6c1.276 0 2.456.397 3.428 1.075l1.144-1.64A7.968 7.968 0 0 0 12 4v2Zm3.428 1.075c.583.407 1.09.914 1.497 1.497l1.64-1.144a8.04 8.04 0 0 0-1.993-1.993l-1.144 1.64Zm1.497 1.497A5.968 5.968 0 0 1 18 12h2c0-1.698-.53-3.276-1.435-4.572l-1.64 1.144Zm.01-1.962 1.741-4.576-1.869-.711-1.742 4.576 1.87.711Zm.949-4.315c.728.583 1.898 1.14 3.354.938l-.275-1.98a2.38 2.38 0 0 1-1.829-.52l-1.25 1.562Zm.217 6.64 4.576-1.742-.711-1.87-4.576 1.742.71 1.87Zm5.165-4.07a2.38 2.38 0 0 1-.518-1.828l-1.981-.276c-.203 1.457.355 2.627.938 3.355l1.561-1.25Zm-.589 2.328c.532-.202.81-.66.892-1.076a1.535 1.535 0 0 0-.303-1.251l-1.56 1.25a.465.465 0 0 1-.1-.384.567.567 0 0 1 .36-.408l.711 1.869Zm-1.439-3.96a.428.428 0 0 1-.367-.104.428.428 0 0 1-.104-.368l1.98.276c.078-.556-.17-1.03-.462-1.322-.292-.292-.767-.54-1.322-.463l.275 1.981Zm-2.562-1.199a.567.567 0 0 1-.408.36.465.465 0 0 1-.384-.1l1.25-1.56A1.536 1.536 0 0 0 17.883.43c-.416.081-.874.36-1.076.892l1.87.711ZM12 18a5.968 5.968 0 0 1-3.428-1.075l-1.144 1.64A7.967 7.967 0 0 0 12 20v-2Zm-3.428-1.075a6.04 6.04 0 0 1-1.497-1.497l-1.64 1.144a8.04 8.04 0 0 0 1.993 1.994l1.144-1.64Zm-1.497-1.497A5.968 5.968 0 0 1 6 12H4c0 1.698.53 3.276 1.434 4.572l1.64-1.144Zm-.01 1.962-1.741 4.576 1.869.711 1.742-4.576-1.87-.711Zm-.95 4.315c-.727-.583-1.897-1.14-3.354-.938l.275 1.981a2.38 2.38 0 0 1 1.83.518l1.25-1.56Zm-.216-6.64-4.576 1.742.711 1.87 4.576-1.742-.711-1.87Zm-5.165 4.07a2.38 2.38 0 0 1 .518 1.828l1.981.276c.202-1.457-.355-2.627-.938-3.355l-1.561 1.25Zm.589-2.328c-.532.202-.81.66-.892 1.076-.08.408.003.877.303 1.252l1.56-1.25c.103.127.122.27.1.383a.567.567 0 0 1-.36.408l-.711-1.869Zm1.438 3.96a.428.428 0 0 1 .368.104c.04.04.133.16.104.368l-1.981-.276c-.077.556.17 1.03.463 1.322.292.293.766.54 1.321.463l-.275-1.981Zm2.563 1.199a.567.567 0 0 1 .408-.36.465.465 0 0 1 .384.1l-1.25 1.56c.374.3.843.383 1.251.303.416-.081.874-.36 1.076-.892l-1.87-.711ZM17.5 12A5.5 5.5 0 0 1 12 6.5h-2a7.5 7.5 0 0 0 7.5 7.5v-2Zm-2 4A7.5 7.5 0 0 1 8 8.5H6a9.5 9.5 0 0 0 9.5 9.5v-2ZM8 8.5c0-.464.042-.918.122-1.357l-1.967-.36A9.55 9.55 0 0 0 6 8.5h2ZM6 12a5.98 5.98 0 0 1 1.833-4.317L6.444 6.244A7.98 7.98 0 0 0 4 12h2Zm1.833-4.317a5.977 5.977 0 0 1 3.448-1.64l-.237-1.986a7.977 7.977 0 0 0-4.6 2.187l1.39 1.439Zm3.448-1.64C11.516 6.015 11.756 6 12 6V4c-.323 0-.642.02-.956.057l.237 1.986ZM12 6.5c0-.423.048-.834.137-1.228l-1.95-.445A7.52 7.52 0 0 0 10 6.5h2Zm6.728 5.363c-.394.09-.805.137-1.228.137v2a7.52 7.52 0 0 0 1.672-.187l-.444-1.95ZM18 12c0 .244-.015.484-.043.72l1.986.236c.038-.314.057-.633.057-.956h-2Zm-.043.72a5.977 5.977 0 0 1-1.64 3.447l1.439 1.39a7.978 7.978 0 0 0 2.187-4.601l-1.986-.237Zm-1.64 3.447A5.98 5.98 0 0 1 12 18v2a7.98 7.98 0 0 0 5.756-2.444l-1.44-1.389Zm.54-.29A7.55 7.55 0 0 1 15.5 16v2c.585 0 1.159-.053 1.716-.155l-.36-1.967Z"
      fill="#555770"
    />
  </svg>
);

export default SvgCandy;