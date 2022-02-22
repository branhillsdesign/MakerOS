import * as React from "react";

const SvgFlipFlops = ({ title, titleId, ...props }) => (
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
      d="m2 13.765-.996.088.002.027.004.027.99-.142Zm8 0 .992.129.002-.02.002-.021-.996-.088ZM1.5 8.118h-1v.044l.004.044.996-.088Zm9 0 .996.088.004-.044v-.044h-1Zm3.5 9.647-.996.088.002.027.004.027.99-.142Zm8 0 .992.129.002-.02.002-.021-.996-.088Zm-8.5-5.647h-1v.044l.004.044.996-.088Zm9 0 .996.088.004-.044v-.044h-1ZM6 17c-.943 0-1.581-.355-2.042-.904-.49-.584-.82-1.445-.968-2.474l-1.98.286c.18 1.251.607 2.508 1.415 3.472C3.26 18.378 4.458 19 6 19v-2Zm3.008-3.364c-.14 1.072-.47 1.923-.952 2.488C7.602 16.654 6.96 17 6 17v2c1.525 0 2.73-.585 3.576-1.578.82-.959 1.246-2.225 1.416-3.528l-1.984-.258ZM6 3c1.991 0 3.5 1.505 3.5 3.235h2C11.5 3.288 8.98 1 6 1v2Zm0-2C3.02 1 .5 3.288.5 6.235h2C2.5 4.505 4.009 3 6 3V1ZM5 2v3.765h2V2H5ZM2.996 13.677l-.5-5.648-1.992.177.5 5.647 1.992-.176ZM2.5 8.117V6.236h-2v1.883h2ZM5.537 4.88l-4.5 2.352.926 1.773 4.5-2.353-.926-1.772ZM9.5 6.235v1.883h2V6.235h-2Zm.004 1.794-.5 5.648 1.992.176.5-5.647-1.992-.177ZM5.537 6.651l4.5 2.353.926-1.773-4.5-2.352-.926 1.772ZM18 21c-.943 0-1.581-.355-2.042-.904-.49-.584-.82-1.445-.968-2.474l-1.98.285c.18 1.252.607 2.51 1.415 3.473C15.26 22.378 16.458 23 18 23v-2Zm3.008-3.364c-.14 1.072-.47 1.922-.952 2.488-.454.531-1.096.876-2.056.876v2c1.525 0 2.73-.585 3.576-1.578.82-.959 1.246-2.225 1.416-3.528l-1.984-.258ZM18 7c1.991 0 3.5 1.505 3.5 3.235h2C23.5 7.288 20.98 5 18 5v2Zm0-2c-2.98 0-5.5 2.288-5.5 5.235h2C14.5 8.505 16.009 7 18 7V5Zm-1 1v3.765h2V6h-2Zm-2.004 11.677-.5-5.647-1.992.176.5 5.647 1.992-.177Zm-.496-5.56v-1.882h-2v1.883h2Zm3.037-3.238-4.5 2.353.926 1.772 4.5-2.353-.926-1.772Zm3.963 1.356v1.883h2v-1.883h-2Zm.004 1.795-.5 5.647 1.992.176.5-5.647-1.992-.176Zm-3.967-1.38 4.5 2.354.926-1.772-4.5-2.353-.926 1.772Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFlipFlops;
