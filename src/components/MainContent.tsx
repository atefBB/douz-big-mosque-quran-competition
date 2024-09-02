import { useState } from "react";

export function MainContent() {
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // @todo get levels from db
  const levels = ["المستوى الأول", "المستوى الثاني", "المستوى الثالث"];

  return (
    <main className="h-full my-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="bg-white border rounded px-5 shadow-xl hover:shadow-md mx-auto max-w-2xl">
        <div className="my-6">
          <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
            معلومات التسجيل
          </h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-600">
            سيتم تسجيل هذه المعلومات بقاعدة بيانات لسهولة الوصول إليها لاحقا
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="fitstName"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                الاسم
              </label>
              <div className="mt-2">
                <input
                  id="fitstName"
                  name="fitstName"
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="الاسم"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="fatherName"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                اسم الأب
              </label>
              <div className="mt-2">
                <input
                  id="fatherName"
                  name="fatherName"
                  type="text"
                  onChange={(event) => setFatherName(event.target.value)}
                  placeholder="اسم الأب"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="lastName"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                اللقب
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="اللقب"
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
                  {levels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <button
              type="submit"
              onClick={() => {
                setFullName(`${firstName} بن ${fatherName} ${lastName}`);
                alert(fullName);
              }}
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
