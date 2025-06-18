import React from "react";

export function HeroColor() {
  return (
    <section className="z-0 self-center w-full text-6xl tracking-widest text-center text-white max-md:max-w-full max-md:text-4xl">
      <div className="flex relative flex-col w-full min-h-[250px] max-md:max-w-full max-md:text-4xl">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/58cd6d364fff4966b7ea43a323aeb3d1/25fcaa921a5f1ec4b02023896ce1f34489f9f51b?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        <div className="relative px-16 py-20 w-full bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full max-md:text-4xl">
          <h1>Personal Color Match</h1>
        </div>
      </div>
    </section>
  );
}