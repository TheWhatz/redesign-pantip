'use client';

import React, { useEffect, useState } from 'react';

interface Highlight {
  success: string;
  data: Array<HighlightData>;
}

interface HighlightData {
  image_url: Array<string>;
  message: string;
  name: string;
  post_url: string;
  weight: number;
}

export default function Highlight() {
  const [highlight, setHighlight] = useState<Highlight>();

  const getHighlight = async () => {
    const response = await fetch(
      'https://pantip.com/api/forum-service/home/get_highlight',
      {
        headers: {
          ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
        },
      },
    );
    const data = await response.json();
    setHighlight(data);
  };

  useEffect(() => {
    getHighlight();
  }, []);

  return (
    <div
      id="controls-carousel"
      className="relative w-full"
      data-carousel="static"
    >
      {highlight?.success ? (
        <div className="relative h-56 overflow-hidden rounded-b-lg md:h-96">
          {highlight.data.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? 'active' : 'hidden'
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={item.image_url[2]}
                className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
                alt="..."
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid h-80 place-content-center">
          <p className="text-white">Loading...</p>
        </div>
      )}
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="size-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="size-4 text-white rtl:rotate-180 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path stroke="currentColor" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
