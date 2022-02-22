import * as React from "react";

const SvgConeIcecream = ({ title, titleId, ...props }) => (
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
      d="m11.5 5.737.773.635-.773-.635Zm0 4.526.773-.635-.773.635Zm4.82.767-.536-.845.535.845Zm-4.912 11.738.928-.37-.928.37Zm.185 0-.928-.373.928.374ZM6 8c0-1.421 1.175-2.6 2.656-2.6v-2C6.1 3.4 4 5.445 4 8h2Zm4.2-3.228A2.654 2.654 0 0 1 12.719 3V1a4.653 4.653 0 0 0-4.411 3.124l1.892.648ZM8.656 5.4c.15 0 .296.012.438.035l.32-1.974c-.248-.04-.5-.061-.758-.061v2Zm5.688 0a2.68 2.68 0 0 1 1.44.415l1.07-1.69a4.68 4.68 0 0 0-2.51-.725v2Zm1.44.415A2.584 2.584 0 0 1 17 8h2a4.584 4.584 0 0 0-2.146-3.875l-1.07 1.69ZM12.72 3c1.32 0 2.4.938 2.616 2.147l1.969-.353C16.915 2.627 15.002 1 12.719 1v2ZM9.094 5.435c.658.106 1.233.45 1.633.937l1.546-1.27a4.665 4.665 0 0 0-2.86-1.641l-.319 1.974ZM11.688 8c0-.616.217-1.18.585-1.628l-1.546-1.27c-.648.79-1.04 1.8-1.04 2.898h2Zm.585-1.628a2.67 2.67 0 0 1 2.07-.972v-2a4.671 4.671 0 0 0-3.616 1.702l1.546 1.27Zm2.07 4.228c-.84 0-1.584-.38-2.07-.972l-1.546 1.27a4.671 4.671 0 0 0 3.617 1.702v-2Zm-2.07-.972A2.551 2.551 0 0 1 11.688 8h-2c0 1.099.39 2.108 1.04 2.898l1.545-1.27Zm-1.546 0a2.671 2.671 0 0 1-2.07.972v2a4.671 4.671 0 0 0 3.616-1.702l-1.546-1.27Zm-2.07.972c-.518 0-.997-.144-1.403-.391l-1.041 1.707c.711.434 1.55.684 2.443.684v-2Zm-1.403-.391A2.586 2.586 0 0 1 6 8H4c0 1.661.891 3.11 2.213 3.916l1.041-1.707Zm-1.45 1.224L10.48 23.14l1.857-.741-4.674-11.706-1.857.741ZM17 8c0 .91-.478 1.718-1.216 2.185l1.07 1.69A4.584 4.584 0 0 0 19 8h-2Zm-1.216 2.185a2.68 2.68 0 0 1-1.44.415v2a4.68 4.68 0 0 0 2.51-.725l-1.07-1.69Zm-3.263 12.957 4.726-11.739-1.855-.747-4.726 11.74 1.855.746Zm-2.042-.003c.368.922 1.671.923 2.042.003l-1.856-.747c.304-.753 1.37-.751 1.671.003l-1.857.741Z"
      fill="#555770"
    />
  </svg>
);

export default SvgConeIcecream;