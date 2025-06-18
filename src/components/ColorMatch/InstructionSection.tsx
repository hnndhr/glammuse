import React from "react";

export function InstructionsSection() {
  return (
    <section className="mt-9 text-xl tracking-wide leading-8 text-black max-md:max-w-full">
      <h2 className="text-2xl font-bold mb-4">
        How to Use the Color Match Filter Box Effectively
      </h2>

      <p className="mb-4">
        Confidence begins with the right tones. Choosing the right personal
        color filter helps highlight your natural beauty—whether you're trying
        on outfits or selecting makeup shades. The filter box above offers
        four seasonal palettes: Summer, Winter, Autumn, and Spring, each
        representing unique color characteristics tailored to your skin
        undertone.
      </p>

      <p className="mb-4">
        Follow the steps below to find your ideal match:
      </p>

      <h3 className="text-2xl font-bold mb-2">
        Use Natural Lighting:
      </h3>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>
          Stand in front of a window or in a space with soft, natural
          daylight.
        </li>
        <li>
          Avoid harsh artificial lighting or colored lights that may alter
          how the filter appears on your skin.
        </li>
      </ul>

      <h3 className="text-2xl font-bold mb-2">
        Make Sure Your Face is Clearly Visible:
      </h3>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>
          Remove anything that may block your face, such as masks, hats, or
          heavy bangs.
        </li>
        <li>
          Tie your hair back if needed, especially if it shadows your face.
        </li>
      </ul>

      <h3 className="text-2xl font-bold mb-2">
        Clean Face or Minimal Makeup Recommended:
      </h3>
      <ul className="list-disc list-inside mb-4 ml-4">
        <li>
          For the most accurate result, use the filter with a clean face or
          minimal makeup.
        </li>
        <li>
          Bold lipsticks or strong blush may interfere with how the filter
          adjusts to your natural tone.
        </li>
      </ul>

      <h3 className="text-2xl font-bold mb-2">
        Click Through Each Seasonal Filter:
      </h3>
      <ul className="list-disc list-inside ml-4">
        <li>Click through each seasonal filter.</li>
        <li>
          Notice how each palette affects your skin tone, eye color, and
          hair.
        </li>
        <li>
          The right filter will brighten your features and make you look
          naturally radiant.
        </li>
      </ul>
    </section>
  );
}
