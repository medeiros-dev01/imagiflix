import React from "react";

const Modal = ({ poster_path, title, original_title, overview, vote_average, runtime, video}: any) => {
  return (
    <div className="fixed top-0 left-0 z-10 p-20 w-full h-screen grid place-items-center">
      <div className="w-full h-full grid place-items-center bg-black shadow-2xl opacity-50">Modal</div>
    </div>
  );
};

export default Modal;