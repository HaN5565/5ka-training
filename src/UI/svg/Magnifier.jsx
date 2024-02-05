import React from 'react';

const Magnifier = (props) => {
  return (
    <svg onClick={props.onClickLogic} className={props.svgClass} width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs />
      <path className={props.pathClass} id="Ellipse 281 (Stroke)" d="M14.5 19C17.5375 19 20 16.5376 20 13.5C20 10.4624 17.5375 8 14.5 8C11.4625 8 9 10.4624 9 13.5C9 16.5376 11.4625 19 14.5 19ZM14.5 22C19.1944 22 23 18.1945 23 13.5C23 8.80554 19.1944 5 14.5 5C9.8056 5 6 8.80554 6 13.5C6 18.1945 9.8056 22 14.5 22Z" fill="#9B9A9D" filopacity="1.000000" fillRule="evenodd" />
      <path className={props.pathClass} id="Vector 357 (Stroke)" d="M18.1607 18.7568C18.8474 18.2932 19.7797 18.4741 20.2432 19.1608L24.6013 25.6165C25.0649 26.3031 24.884 27.2355 24.1974 27.699C23.5108 28.1625 22.5784 27.9816 22.1149 27.295L17.7568 20.8394C17.2932 20.1527 17.4741 19.2203 18.1607 18.7568Z" fill="#9B9A9D" filopacity="1.000000" fillRule="evenodd" />
    </svg>
  );
};

export default Magnifier;