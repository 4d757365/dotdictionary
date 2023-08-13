"use client";

import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-1 h-96 items-center justify-center">
      <DotLoader color={"black"} size={40} className="" />
    </div>
  );
};

export default Loading;
