import * as React from "react";

const SvgFeather = ({ title, titleId, ...props }) => (
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
      d="m4.5 11-.928-.371L4.5 11Zm11.57-3.678a1 1 0 0 0-1.14-1.644l1.14 1.644ZM1.571 22.63a1 1 0 0 0 1.856.742l-1.856-.742Zm19.21-20.582.214.977-.214-.977Zm.109.146-.873-.488.873.488Zm-.323-1.123c-3.535.775-7.28 2.011-10.37 3.593-3.034 1.554-5.661 3.553-6.626 5.966l1.857.742c.678-1.696 2.72-3.412 5.68-4.927 2.904-1.487 6.479-2.673 9.887-3.42l-.428-1.954ZM3.572 10.63c-.561 1.401-.755 2.941-.605 4.294.145 1.312.644 2.655 1.695 3.395l1.15-1.636c-.37-.26-.74-.917-.857-1.98-.114-1.022.034-2.232.474-3.33l-1.857-.743Zm1.09 7.689c.883.621 2.172 1.111 3.772.898 1.59-.212 3.367-1.103 5.273-3.009l-1.414-1.414c-1.694 1.694-3.088 2.303-4.124 2.44-1.026.138-1.819-.172-2.356-.55l-1.151 1.635Zm9.045-2.11c1.88-1.88 3.414-4.434 4.707-6.895.65-1.237 1.25-2.473 1.805-3.606.558-1.141 1.066-2.17 1.545-3.026l-1.746-.976c-.51.913-1.041 1.99-1.596 3.123-.558 1.142-1.145 2.349-1.778 3.555-1.274 2.424-2.695 4.754-4.351 6.41l1.414 1.414ZM5.237 17.5l.866.501V18l.007-.01.03-.05a26.688 26.688 0 0 1 .619-.97c.44-.659 1.097-1.588 1.952-2.656 1.716-2.141 4.213-4.814 7.358-6.99l-1.138-1.645C11.576 8 8.94 10.828 7.15 13.062a40.549 40.549 0 0 0-2.056 2.796 28.808 28.808 0 0 0-.719 1.133c0 .002-.002.004-.003.005v.002c-.001 0-.001.001.864.502Zm-.85-.526c-1.271 2.055-1.797 3.107-2.815 5.655l1.856.742c.982-2.452 1.456-3.4 2.66-5.345l-1.701-1.052Zm16.61-13.95c-.75.164-1.362-.633-.979-1.319l1.746.976c.468-.836-.279-1.812-1.196-1.61l.428 1.953Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFeather;
