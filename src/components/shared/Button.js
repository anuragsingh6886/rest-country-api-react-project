import React from "react";
import { BsArrowLeft } from "react-icons/bs";
export default function Button({ onClick = (f) => f }) {
  return (
    <button
      onClick={onClick}
      className="my-10 flex items-center text-lightText dark:text-white  bg-lightBg dark:bg-darkblue px-10 py-2
      shadow-lg "
    >
      <BsArrowLeft className="mr-4" />
      Back
    </button>
  );
}
