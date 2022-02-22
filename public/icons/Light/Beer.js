import * as React from "react";

const SvgBeer = ({ title, titleId, ...props }) => (
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
      d="M4.895 8.603v-.6h-.6v.6h.6Zm9.78 0v-.6h-.608l.008.607.6-.007ZM9.457 7.34a.6.6 0 1 0-.987-.682l.987.682Zm5.216-2.14-.595.07a.6.6 0 0 0 .965.403l-.37-.473Zm-7.038-.557-.433.416a.6.6 0 0 0 1.01-.254l-.577-.162ZM9.3 11.045l-.43.418.43-.418Zm3.6.654-.259-.541.259.541Zm.392-.225-.338-.496.338.496Zm-4.327-.838.493-.34-.493.34Zm6.35 10.764H6.79v1.2h8.527v-1.2Zm2.085-9.755h.947v-1.2H17.4v1.2Zm3 2.355v2h1.2v-2h-1.2Zm-3.6-2.955V19H18v-7.955h-1.2Zm0 7.955v1.086H18V19h-1.2Zm1.547-.6H17.4v1.2h.947v-1.2ZM20.4 16c0 1.352-.904 2.4-2.053 2.4v1.2c1.991 0 3.253-1.78 3.253-3.6h-1.2Zm-2.053-4.355c1.16 0 2.053 1.015 2.053 2.355h1.2c0-1.831-1.272-3.555-3.253-3.555v1.2ZM6.79 21.4c-.709 0-1.294-.582-1.294-1.314h-1.2A2.504 2.504 0 0 0 6.789 22.6v-1.2Zm8.527 1.2a2.8 2.8 0 0 0 1.833-.712c.492-.437.851-1.07.851-1.802h-1.2c0 .325-.16.649-.448.905-.29.257-.672.409-1.036.409v1.2ZM3.6 6.545c0-1.18.946-2.127 2.1-2.127v-1.2c-1.828 0-3.3 1.496-3.3 3.327h1.2Zm12.45-1.218c.906 0 1.65.743 1.65 1.673h1.2c0-1.58-1.27-2.873-2.85-2.873v1.2Zm-1.006.347a1.626 1.626 0 0 1 1.006-.347v-1.2c-.657 0-1.263.225-1.745.602l.739.945ZM11.1 2.6c1.53 0 2.8 1.162 2.979 2.672l1.191-.141C15.023 3.034 13.255 1.4 11.1 1.4v1.2ZM5.7 4.418c.589 0 1.12.245 1.503.642l.865-.832A3.279 3.279 0 0 0 5.7 3.218v1.2Zm2.513.388A3.007 3.007 0 0 1 11.1 2.6V1.4c-1.927 0-3.545 1.307-4.042 3.082l1.155.324ZM17.7 7c0 .358-.058.588-.138.736a.646.646 0 0 1-.372.305l.42 1.124a1.842 1.842 0 0 0 1.007-.857c.21-.388.283-.84.283-1.308h-1.2Zm-.9 1.603v2.442H18V8.603h-1.2ZM9 8.818c0-.059.002-.118.006-.176l-1.198-.079a3.86 3.86 0 0 0-.008.255H9Zm.006-.176c.032-.482.194-.928.452-1.301l-.987-.682a3.785 3.785 0 0 0-.663 1.904l1.198.08Zm-4.111.56h3.512v-1.2H4.895v1.2Zm9.78 0H17.4v-1.2h-2.725v1.2Zm-9.6-.625A2.126 2.126 0 0 1 3.6 6.545H2.4c0 1.49.97 2.753 2.314 3.177l.361-1.145Zm.42 11.51V9.148h-1.2v10.937h1.2Zm0-10.938v-.546h-1.2v.546h1.2ZM11.55 11.4a2.525 2.525 0 0 1-1.82-.773l-.86.836c.679.7 1.629 1.137 2.68 1.137v-1.2Zm1.091-.242a2.516 2.516 0 0 1-1.091.242v1.2c.571 0 1.118-.125 1.609-.36l-.518-1.082Zm1.434-2.548c.013 1.096-.455 1.914-1.121 2.368l.676.992c1.025-.699 1.663-1.91 1.644-3.375l-1.2.015Zm-1.121 2.368c-.1.068-.204.128-.313.18l.518 1.082c.164-.078.32-.168.47-.27l-.675-.992Zm-.262.496v6.89h1.2v-6.89h-1.2Zm-2.961-.847c-.1-.102-.191-.213-.273-.332l-.987.682c.12.173.253.336.398.486l.862-.836Zm-.273-.332A2.59 2.59 0 0 1 9 8.818H7.8c0 .801.248 1.547.67 2.16l.988-.683Zm-1.093.341v7.728h1.2v-7.728h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgBeer;
