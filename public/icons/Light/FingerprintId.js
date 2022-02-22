import * as React from "react";

const SvgFingerprintId = ({ title, titleId, ...props }) => (
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
      d="M17.962 4.088a.6.6 0 0 0 .65-1.01l-.65 1.01Zm-12.23-1.01a.6.6 0 1 0 .65 1.01l-.65-1.01Zm14.725 7.383a.6.6 0 1 0 1.086-.512l-1.086.512ZM2.463 9.938a.6.6 0 0 0 1.074.534l-1.074-.534ZM16.249 22.6a.6.6 0 1 0 0-1.2v1.2Zm-11.78-2.976a.6.6 0 1 0 1.139-.377l-1.14.378Zm8.303-4.803a.6.6 0 0 0-1.2 0h1.2Zm6.025 5.728a.6.6 0 1 0 0-1.2v1.2Zm-2.13-5.729a.6.6 0 1 0 1.2 0h-1.2Zm-6.843 7.694a.6.6 0 0 0 .62-1.028l-.62 1.028ZM12.172 2.6c1.486 0 3.874.253 5.79 1.488l.65-1.01C16.409 1.66 13.744 1.4 12.172 1.4v1.2Zm-5.79 1.488C8.298 2.853 10.687 2.6 12.172 2.6V1.4c-1.572 0-4.237.26-6.44 1.679l.65 1.009Zm5.79 1.076c3.542 0 6.691 1.92 8.285 5.297l1.086-.512c-1.794-3.801-5.368-5.985-9.37-5.985v1.2Zm-8.635 5.308c1.43-2.878 5.097-5.308 8.635-5.308v-1.2c-4.006 0-8.082 2.699-9.71 5.974l1.075.534Zm15.679 4.348c0 .624-.218 1.106-.548 1.433-.332.327-.813.532-1.4.532v1.2c.873 0 1.667-.309 2.243-.879.579-.57.905-1.37.905-2.286h-1.2Zm-1.948 1.965c-.395 0-.893-.188-1.294-.55-.392-.355-.654-.842-.654-1.415h-1.2c0 .966.449 1.762 1.05 2.305.59.534 1.367.86 2.098.86v-1.2Zm-7.044-1.452c0-1.158.341-1.743.689-2.05.363-.32.838-.427 1.26-.427v-1.2c-.598 0-1.398.15-2.053.727-.672.592-1.096 1.545-1.096 2.95h1.2Zm1.948-2.477c1.175 0 1.948.857 1.948 1.964h1.2c0-1.724-1.265-3.164-3.148-3.164v1.2Zm-3.148 2.477c0 1.42.557 3.219 1.725 4.671 1.184 1.471 3.005 2.596 5.5 2.596v-1.2c-2.091 0-3.582-.927-4.565-2.148-.997-1.24-1.46-2.774-1.46-3.919h-1.2Zm11.392-.513c0-1.164-.557-3.208-1.835-4.967-1.296-1.785-3.372-3.325-6.409-3.325v1.2c2.569 0 4.314 1.281 5.438 2.83 1.143 1.574 1.606 3.376 1.606 4.262h1.2Zm-8.244-8.292c-1.953 0-4.62.996-6.432 3.135-1.846 2.18-2.755 5.48-1.271 9.962l1.139-.378c-1.37-4.134-.495-6.987 1.047-8.808 1.576-1.86 3.903-2.71 5.517-2.71v-1.2Zm-.6 8.293c0 1.114.276 2.566 1.371 3.742 1.104 1.184 2.943 1.986 5.854 1.986v-1.2c-2.695 0-4.168-.737-4.976-1.604-.815-.876-1.049-1.988-1.049-2.925h-1.2Zm6.296 0c0-.95-.278-2.363-1.131-3.555-.875-1.223-2.33-2.174-4.565-2.174v1.2c1.841 0 2.935.759 3.589 1.672.675.945.907 2.097.907 2.856h1.2Zm-5.696-5.729c-1.38 0-2.458.35-3.288.925-.826.572-1.365 1.341-1.717 2.12-.695 1.54-.69 3.195-.69 3.71h1.2c0-.512.004-1.934.583-3.215.285-.631.701-1.208 1.308-1.63.603-.418 1.436-.71 2.604-.71v-1.2Zm-5.695 6.754c0 .58.138 1.804.61 3.091.47 1.286 1.3 2.71 2.737 3.577l.62-1.028c-1.112-.67-1.81-1.811-2.23-2.962-.421-1.149-.537-2.232-.537-2.678h-1.2Z"
      fill="#555770"
    />
  </svg>
);

export default SvgFingerprintId;