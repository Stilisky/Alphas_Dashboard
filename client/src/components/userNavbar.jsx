"use client";

export default function Userbar() {
  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ALPHAS DASHBOARD</span>
        </a>
        <div class="flex md:order-2">
          <a href="/logout" type="button" class="text-white bg-[#2bb24c] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</a>
          <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#2bb24c] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#y" class="block py-2 pl-3 pr-4 text-white bg-[#2bb24c] rounded md:bg-transparent md:text-[#2bb24c] md:p-0 md:dark:text-[#2bb24c]" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#n" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-[#2bb24c] md:hover:bg-transparent md:hover:text-[#2bb24c] md:p-0 md:dark:hover:text-[#2bb24c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
            </li>
            <li>
              <a href="#l" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-[#2bb24c] md:hover:bg-transparent md:hover:text-[#2bb24c] md:p-0 md:dark:hover:text-[#2bb24c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Setting</a>
            </li>
            <li>
              <a href="#m" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-[#2bb24c] md:hover:bg-transparent md:hover:text-[#2bb24c] md:p-0 md:dark:hover:text-[#2bb24c] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
