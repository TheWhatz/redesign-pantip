import Image from 'next/image';
import React from 'react';

const aboutUs = [
  'กฎ กติกาและมารยาท',
  'คำแนะนำการโพสต์',
  'นโยบายเกี่ยวกับข้อมูลส่วนบุคคล',
  'สิทธิ์การใช้งานของสมาชิก',
  'ติดต่อทีมงาน Pantip',
];

const downloadUrl = [
  'https://pantip.com/static/images/button_download-app-store.png',
  'https://pantip.com/static/images/button_download-google-play.png',
  'https://ptcdn.info/application/huawei-Black.png',
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#353156' }}>
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="lg:flex lg:justify-between">
          <div className="md:mb-0">
            <a
              href="https://pantip.com/"
              className="flex justify-center md:justify-start"
            >
              <Image
                src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png"
                className="me-3 h-10"
                alt="Pantip Logo"
              />
            </a>
            <div className="grid grid-rows-1 py-5">
              <p className="flex justify-center text-white md:justify-start">
                ดาวน์โหลดได้แล้ววันนี้
              </p>
              <div className="grid grid-cols-1 justify-items-center gap-x-3 gap-y-5 pt-5 sm:grid-cols-1 md:grid-cols-2 md:justify-items-start lg:grid-cols-3">
                {downloadUrl.map((item) => (
                  <Image
                    key={item}
                    src={item}
                    className="me-3 h-10"
                    alt="Pantip Logo"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 sm:place-items-start sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                อื่นๆ
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://pantip.com/" className="hover:underline ">
                    ร่วมงานกับ Pantip
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://pantip.com/" className="hover:underline">
                    Download App Pantip
                  </a>
                </li>
                <li className="mb-4">
                  <a href="https://pantip.com/" className="hover:underline">
                    Pantip Certified Developer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                เกี่ยวกับพันทิป
              </h2>
              <ul className="font-medium text-gray-500 dark:text-gray-400">
                {aboutUs.map((item) => (
                  <li key={item} className="mb-4">
                    <a href="https://pantip.com/" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <div className="justify-center sm:flex sm:items-center sm:justify-between">
          <span className="justify-items-center text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Internet Marketing co., ltd
          </span>
          <div className="mt-4 flex justify-center sm:mt-0 sm:justify-center">
            <a
              href="https://pantip.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://pantip.com/"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
              <span className="sr-only">X page</span>
            </a>
            <a
              href="https://pantip.com/"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 576 512"
              >
                <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
              </svg>
              <span className="sr-only">Youtube page</span>
            </a>
            <a
              href="https://pantip.com/"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
              <span className="sr-only">Instragram page</span>
            </a>
            <a
              href="https://pantip.com/"
              className="ms-5 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="size-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
              <span className="sr-only">Tiktok page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
