import React from "react";

function Grille() {
  return (
    <div>
      <div class="grid grid-row-4 gap-6  mx-8">
        <div class="line-clamp-3 border-b-4 border-indigo-500 bg-slate-300">
          Service1
          <div class="grid grid-cols-1 divide-y">
            <div class="flex items-center pl-3">
              <input
                id="vue-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="react-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="react-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="angular-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="angular-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>
          </div>
        </div>
        <div class="mt-4 border-b-4 border-indigo-500 bg-slate-300">
          Service2
          <div class="grid grid-cols-1 divide-y">
            <div class="flex items-center pl-3">
              <input
                id="vue-cli-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-cli-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-nest-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-nest-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-node-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-node-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>
          </div>
        </div>
        <div class="border-b-4 border-indigo-500 bg-slate-300">
          Service3
          <div class="grid grid-cols-1 divide-y">
            <div class="flex items-center pl-3">
              <input
                id="vue-js-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-js-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-jsx-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-jsx-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-init-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-init-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>
          </div>
        </div>
        <div class="border-b-4 border-indigo-500 bg-slate-300">
          Service4
          <div class="grid grid-cols-1 divide-y">
            <div class="flex items-center pl-3">
              <input
                id="vue-new-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-new-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-add-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-add-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>

            <div class="flex items-center pl-3">
              <input
                id="vue-end-checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                for="vue-end-checkbox"
                class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vue JS
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex place-content-center mt-6">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Change</button>
      </div>
    </div>
  );
}
export default Grille;
