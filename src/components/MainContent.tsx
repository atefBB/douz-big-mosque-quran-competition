import { useState } from "react";

export function MainContent() {
  const [fullName, setFullName] = useState("");

  return (
    <main className="h-full my-14 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="bg-white border rounded px-5 shadow-xl hover:shadow-md mx-auto max-w-2xl">
        <div className="my-6">
          <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
            معلومات التسجيل
          </h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-600">
            سيتم تسجيل هذه العلومات في قاعدة بيانات لسهولة العودة إليها لاحقا
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="full-name"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                الاسم واللقب
              </label>
              <div className="mt-2">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  onChange={(event) => setFullName(event.target.value)}
                  placeholder="فلان بن فلان"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="level"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                المستوى
              </label>
              <div className="mt-2">
                <select
                  id="level"
                  name="level"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>المستوى اﻷول - نصف اﻷخير</option>
                  <option>ربع يس</option>
                  <option>الجزئين اﻷخيرين - المجادلة وعم</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              onClick={() => alert(fullName)}
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              تسجيل
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
