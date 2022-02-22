import * as React from "react";

const SvgAxe = ({ title, titleId, ...props }) => (
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
      d="m6.32 15.671.424.424-.425-.424Zm10.92-8.863-.424.424.424-.424ZM9.502 9.713l-.425-.423.425.423Zm3.592 1.248-.425.424.425-.424Zm8.638-3.807.582-.145-.17-.685-.649.279.237.55ZM13.44 15.46l-.551-.236-.277.648.682.17.146-.582Zm-5.528-2.769.588.118-.588-.118Zm-2.016 2.555-5.32 5.33.85.847 5.319-5.329-.85-.848Zm9.884-12.67L14.397 3.96l.85.848 1.381-1.385-.85-.848Zm-1.382 2.232 2.418 2.423.85-.848-2.419-2.423-.85.848Zm0-.848L10.25 8.115l.85.847 4.146-4.153-.85-.848ZM10.25 8.115 9.077 9.29l.85.847L11.1 8.962l-.85-.847Zm3.268 2.423L11.1 8.115l-.85.847 2.42 2.423.848-.847Zm3.297-3.306a3.548 3.548 0 0 0 1.919.989c.873.154 1.942.04 3.235-.516l-.474-1.102c-1.126.483-1.957.541-2.552.436a2.349 2.349 0 0 1-1.278-.655l-.85.848Zm-4.146 4.153c.273.274.55.686.654 1.282.106.597.047 1.43-.435 2.559l1.103.471c.554-1.294.668-2.365.514-3.239a3.556 3.556 0 0 0-.987-1.92l-.849.847ZM21.15 7.3c.647 2.592-.01 4.791-1.397 6.181-1.388 1.39-3.581 2.047-6.168 1.4l-.292 1.164c2.942.736 5.586.01 7.309-1.716 1.722-1.726 2.447-4.373 1.712-7.32L21.15 7.3ZM7.322 12.575a5.233 5.233 0 0 1-1.427 2.672l.849.848a6.433 6.433 0 0 0 1.755-3.285l-1.177-.235Zm1.177.235a5.233 5.233 0 0 1 1.428-2.673l-.85-.847a6.433 6.433 0 0 0-1.755 3.285l1.177.235Z"
      fill="#555770"
    />
  </svg>
);

export default SvgAxe;