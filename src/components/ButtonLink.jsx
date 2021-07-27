import React from "react";

const ButtonLink = ({ linkTo, text, classes }) => {
  return (
    <a
      href={linkTo}
      className={`inline-block font-normal text-base transition rounded-md bg-white p-2
      mb-2 hover:bg-gray-300 ${classes}`}
    >
      {text}
    </a>
  );
};

export default ButtonLink;
