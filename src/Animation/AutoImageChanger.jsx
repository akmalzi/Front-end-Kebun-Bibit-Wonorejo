import { useState, useEffect } from "react";

function AutoImageChanger() {
  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="relative w-[100px] h-[100px]">
        <img
          src={"/assets/navigasi/popup-detail/icon/rusa1-icon.png"}
          alt={`rusa`}
          className="w-full h-full object-cover transition-opacity duration-1000 opacity-100"
        />
      </div>
    </div>
  );
}

export default AutoImageChanger;
