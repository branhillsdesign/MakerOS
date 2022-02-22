import * as React from "react";

const SvgRocket = ({ title, titleId, ...props }) => (
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
      d="m8.27 8.343.708.707-.707-.707ZM21.5 2.5l.999.046.05-1.095-1.095.05.046.999Zm-20 8.92-.884-.467-.345.652.522.522.707-.707Zm2.182 2.182-.707.707.707.708.707-.707-.707-.708ZM12.58 22.5l-.707.707.522.522.652-.345-.467-.884Zm-2.182-2.182-.708-.707-.707.707.707.707.708-.707Zm-5.631-2.316-.707-.707-.707.707.707.707.707-.707Zm1.231 1.231-.707.707.707.707.707-.707-.707-.707Zm7.904-9.135a.741.741 0 0 1 0-1.048l-1.414-1.414a2.741 2.741 0 0 0 0 3.876l1.414-1.414Zm0-1.048a.741.741 0 0 1 1.048 0l1.414-1.414a2.741 2.741 0 0 0-3.876 0l1.414 1.414Zm-4.924 0a18.957 18.957 0 0 1 6.331-4.195L14.562 3a20.957 20.957 0 0 0-6.998 4.636L8.978 9.05Zm6.331-4.195c2.001-.806 4.112-1.258 6.237-1.356L21.454 1.5c-2.347.108-4.68.608-6.892 1.5l.747 1.854Zm-8.937 7.438c.732-1.15 1.6-2.238 2.606-3.243L7.564 7.636a21.093 21.093 0 0 0-2.879 3.583l1.687 1.074Zm2.373-4.83c-.864-.466-2.264-.796-3.788-.386-1.562.42-3.126 1.58-4.34 3.876l1.767.935c1-1.89 2.155-2.628 3.092-2.88.974-.262 1.851-.038 2.32.215l.949-1.76ZM.793 12.126l2.182 2.182 1.414-1.414-2.182-2.182-1.414 1.415Zm3.596 2.182 1.847-1.846-1.414-1.414-1.847 1.846 1.414 1.415Zm8.099-2.797a2.741 2.741 0 0 0 3.876 0l-1.414-1.414a.741.741 0 0 1-1.048 0l-1.414 1.414Zm3.876 0a2.741 2.741 0 0 0 0-3.876L14.95 9.05c.29.29.29.758 0 1.048l1.414 1.414Zm0 4.924A20.958 20.958 0 0 0 21 9.438l-1.855-.747a18.957 18.957 0 0 1-4.195 6.331l1.414 1.414ZM21 9.438a21.036 21.036 0 0 0 1.499-6.892L20.5 2.454a19.039 19.039 0 0 1-1.356 6.237L21 9.438Zm-8.219 9.877a21.09 21.09 0 0 0 3.583-2.879l-1.414-1.414a19.091 19.091 0 0 1-3.243 2.606l1.074 1.687Zm1.996-3.112c.253.47.477 1.347.215 2.321-.252.937-.99 2.091-2.88 3.092l.935 1.768c2.295-1.215 3.456-2.78 3.876-4.34.41-1.525.08-2.925-.385-3.789l-1.761.948Zm-1.49 5.59-2.182-2.182-1.415 1.414 2.183 2.182 1.414-1.414Zm-2.182-.768 1.846-1.847-1.414-1.414-1.847 1.847 1.415 1.414Zm3.123-16.39 5.137 5.137 1.414-1.415-5.136-5.136-1.415 1.414Zm-9.606 7.542 1.74 3.745 1.814-.844-1.74-3.744-1.814.843Zm1.94 4.03 1.23 1.231 1.415-1.414-1.231-1.231-1.414 1.414Zm0-1.414L4.06 17.295l1.414 1.414 2.502-2.502-1.414-1.414Zm1.517 2.845 3.744 1.74.843-1.814-3.745-1.74-.842 1.814ZM6.705 19.94l2.502-2.502-1.414-1.414-2.502 2.502 1.414 1.414ZM4.06 18.71l.615.615L6.09 17.91l-.616-.615-1.414 1.414Zm.615.615.616.615 1.414-1.414-.615-.616-1.415 1.415Z"
      fill="#555770"
    />
  </svg>
);

export default SvgRocket;
