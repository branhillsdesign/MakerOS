import * as React from "react";

const SvgChristmasSocks = ({ title, titleId, ...props }) => (
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
      d="m16.634 5.617-.162-.578.162.578ZM10 13l-.583.143.002.006L10 13Zm-3.848 6.791-.581.15.58-.15Zm5.077 3.06.162.578-.162-.578Zm1.901-.791.34.494-.34-.494Zm-1.371.643-.162-.577.162.577Zm-5.022-15.3.581-.15-.58.15Zm1.114.67-.162-.577.162.578Zm9.425-3.619-.58.15.58-.15Zm-1.82-3.421-.16-.578.16.578Zm1.114.67.582-.148-.582.149Zm2.275 12.529-.581.149.58-.15Zm-1.887 5.189-.34-.494.34.494ZM6.674 3.489l.162.578-.162-.578Zm-.643 1.163-.58.149.58-.15Zm3.711 9.152.359.481-.359-.481Zm.162-.163-.51-.316.51.316ZM6.836 4.067l8.782-2.457-.323-1.155L6.513 2.91l.323 1.156Zm9.153-2.214.706 2.75 1.163-.298-.706-2.75-1.163.298Zm-8.67 5.4-.707-2.75L5.45 4.8l.706 2.75 1.162-.298Zm8.733-1.487 2.212 8.615 1.162-.298-2.211-8.615-1.163.298Zm.566 13.16-3.828 2.64.68.988 3.829-2.64-.681-.987Zm-5.021 3.2-.53.148.324 1.155.53-.148-.324-1.155Zm-2.8-6.87 1.304-.97-.717-.963-1.303.97.717.962Zm7.675-10.217L8.567 7.25l.324 1.156 7.904-2.211-.323-1.156ZM8.567 7.25l-.878.246.323 1.155.879-.245-.324-1.156Zm2.016 5.607L9.312 7.685l-1.166.286 1.271 5.172 1.166-.286Zm-.17 1.1a1.43 1.43 0 0 0 .168-1.106l-1.162.298a.23.23 0 0 1-.026.176l1.02.631Zm-3.68 5.685a3.91 3.91 0 0 1 .053-2.13l-1.145-.358a5.109 5.109 0 0 0-.07 2.786l1.162-.298Zm4.335 2.632c-1.867.522-3.82-.628-4.335-2.632l-1.162.298c.67 2.614 3.264 4.204 5.82 3.49l-.323-1.156Zm1.722-.709c-.367.253-.77.442-1.193.56l.323 1.156a5.2 5.2 0 0 0 1.55-.727l-.68-.988ZM6.155 7.553c.208.81 1.027 1.332 1.856 1.1L7.69 7.495c-.14.039-.319-.041-.37-.243l-1.163.299Zm10.54-2.948c.053.21-.073.393-.224.435l.323 1.156c.819-.23 1.269-1.087 1.063-1.89l-1.163.299ZM15.617 1.61c.14-.039.32.041.371.243l1.163-.298c-.209-.811-1.027-1.332-1.857-1.1l.323 1.155Zm2.646 12.771c.446 1.738-.228 3.568-1.646 4.546l.68.988c1.849-1.274 2.695-3.624 2.128-5.832l-1.162.298ZM6.513 2.911c-.82.23-1.269 1.087-1.063 1.89l1.162-.298c-.054-.21.072-.394.224-.436l-.323-1.156ZM8.08 14.293c-.909.676-2.03 1.544-2.44 2.861l1.145.357c.278-.893 1.064-1.55 2.012-2.256l-.717-.963Zm2.02-.008c.082-.06.212-.167.313-.329l-1.02-.631c.01-.017.019-.025.018-.024l-.008.006a.502.502 0 0 1-.02.016l.717.962Z"
      fill="#555770"
    />
  </svg>
);

export default SvgChristmasSocks;