import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ linkTo, text, classes }) => {
  return (
    <Link
      to={linkTo}
      className={`inline-block font-normal text-base transition rounded-md bg-white p-2
      mb-2 hover:bg-gray-300 ${classes}`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
