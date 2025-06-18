"use client";
import React from "react";

export function ColorFilterBox() {
  return (
    <div className="px-14 pt-4 pb-7 w-full text-4xl text-center bg-white rounded-3xl border border-solid border-stone-700 border-opacity-70 min-h-[992px] shadow-[3px_3px_4px_rgba(0,0,0,0.25)] text-stone-700 max-md:px-5 max-md:max-w-full">
      <h2 className="gap-6 self-stretch w-full max-md:max-w-full">
        Choose Your True Color
      </h2>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/84fdab07600b1c72c1a810564b2b36933dec8e22?placeholderIfAbsent=true"
        className="object-contain mt-7 w-full aspect-[1.31] max-md:max-w-full"
        alt="Color filter preview"
      />
      <div className="z-10 px-16 pb-0 mt-7 w-full whitespace-nowrap max-md:px-5 max-md:max-w-full">
        Summer
      </div>
      <div className="flex flex-col items-center px-20 mt-7 w-full text-xl text-white bg-white max-md:px-5 max-md:max-w-full">
        <button className="px-16 py-2.5 max-w-full rounded-xl shadow-sm bg-stone-700 w-[274px] max-md:px-5">
          See Description
        </button>
      </div>
    </div>
  );
}
