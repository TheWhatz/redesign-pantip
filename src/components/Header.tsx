import Image from 'next/image';
import React from 'react';

import Search from './Search';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#2D2A49' }}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="https://pantip.com/" className="-m-1.5 p-1.5">
            <span className="sr-only">Pantip</span>
            <Image
              className="h-10 w-auto"
              src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
              alt=""
              width={130}
              height={112}
            />
          </a>
        </div>
        <div className="flex gap-x-8 text-white">
          <p>หน้าแรก</p>
          <p>My Feed</p>
          <p>Pantip Pick</p>
          <p>Pantip Hitz</p>
          <p>Explore</p>
        </div>
        <div className="flex">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <div
            className="flex p-2"
            style={{ borderRadius: 25, borderWidth: 1 }}
          >
            <a
              href="https://pantip.com/"
              aria-label="details"
              className="content-center text-sm font-semibold leading-6 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </a>
            <a
              aria-label="login"
              href="https://pantip.com/"
              className="content-center text-sm font-semibold leading-6 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <div className="mx-auto flex max-w-7xl">
        <div className="w-full px-10 pb-10 pt-5">
          <Search />
        </div>
      </div>
    </header>
  );
}
