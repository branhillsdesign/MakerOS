import * as React from "react";

const SvgMicrophone = ({ title, titleId, ...props }) => (
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
      d="m4.535 21.793-.708.707.708-.707ZM2.207 18.05l.707.707-.707-.707Zm0 1.414.707-.707-.707.707ZM15.18 4a3.41 3.41 0 0 1 4.822 0l1.415-1.415a5.41 5.41 0 0 0-7.65 0L15.178 4Zm4.822 0a3.41 3.41 0 0 1 0 4.822l1.415 1.414a5.41 5.41 0 0 0 0-7.65L20 3.998ZM15.18 8.82a3.403 3.403 0 0 1-.964-2.895l-1.98-.28a5.403 5.403 0 0 0 1.53 4.589L15.18 8.82Zm-.964-2.895c.1-.705.42-1.384.964-1.927l-1.414-1.415a5.39 5.39 0 0 0-1.53 3.061l1.98.281Zm-1.74-.802L3.121 15.726l1.5 1.323 9.354-10.602-1.5-1.323Zm7.526 3.697a3.39 3.39 0 0 1-1.928.964l.282 1.98a5.39 5.39 0 0 0 3.06-1.53L20.002 8.82Zm-1.928.964a3.403 3.403 0 0 1-2.894-.964l-1.414 1.414a5.403 5.403 0 0 0 4.59 1.53l-.282-1.98Zm-.52.24L6.95 19.38l1.323 1.5 10.602-9.354-1.323-1.5ZM3.163 15.68 1.5 17.344l1.414 1.414 1.664-1.663-1.414-1.415ZM1.5 20.172 3.827 22.5l1.415-1.414-2.328-2.328L1.5 20.173ZM6.656 22.5l1.664-1.664-1.415-1.414-1.663 1.664L6.656 22.5Zm5.238-11.809L9.4 13.186l1.414 1.414 2.495-2.494-1.415-1.415Zm-8.73 6.404 3.741 3.741 1.415-1.414-3.742-3.742-1.414 1.415Zm.663 5.405a2 2 0 0 0 2.829 0l-1.414-1.414L3.827 22.5ZM1.5 17.344a2 2 0 0 0 0 2.828l1.414-1.414L1.5 17.344Z"
      fill="#555770"
    />
  </svg>
);

export default SvgMicrophone;